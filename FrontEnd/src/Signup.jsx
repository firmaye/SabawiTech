import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { useGoogleLogin } from '@react-oauth/google';
import './css/authentication.css'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
const Signup = () => {
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        userName: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        country: Yup.string()
            .required('Required'),
        state: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required')
            .test('Invalid Email', "Invalid Email or Password", // <- key, message
                function (value) {
                    let body = {
                        email: value
                    }
                    body = JSON.stringify(body)
                    return new Promise((resolve, reject) => {
                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/check/email/${value}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.exist) {
                                    resolve(this.createError({ message: data.message }));

                                } else {
                                    resolve(true)
                                }
                            })
                            .catch((error) => {
                            });
                    })
                })
    })
    const validate = async (values) => {
        const errors = {};

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 15) {
            errors.password = 'Too Long';
        } else if (values.password.length < 2) {
            errors.password = 'Too Short';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        } else if (values.confirmPassword != values.password) {
            errors.confirmPassword = 'Passwords must match';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Too Long!';
        } else if (values.lastName.length < 2) {
            errors.lastName = 'Too Short!';
        }

        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 20) {
            errors.firstName = 'Too Long!';
        } else if (values.firstName.length < 2) {
            errors.firstName = 'Too Short!';
        }

        if (!values.userName) {
            errors.userName = 'Required';
        } else if (values.userName.length > 20) {
            errors.userName = 'Too Long!';
        } else if (values.userName.length < 2) {
            errors.userName = 'Too Short!';
        }

        if (!values.country) {
            errors.country = 'Required';
        }
        if (!values.state) {
            errors.state = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!errors.email && !errors.userName) {
            let body = {
                email: values.email,
                userName: values.userName
            }
            console.log(body)
            body = JSON.stringify(body)
            console.log(body)
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.existemail)
                    if (data.existemail) {
                        errors.email = 'Email Exist!';
                    }
                    if (data.existuserName) {
                        errors.userName = 'UserName Exist!';
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            console.log("error")
        }
        return errors;
    };
    const [googleerror, setgoogleerror] = useState("")
    const loginusingGoogle =
        useGoogleLogin({
            onSuccess: async response => {
                let body = {
                    access_token: response.access_token
                }
                body = JSON.stringify(body)
                // fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                //     method: "GET",
                //     headers: {
                //         "Authorization": `Bearer ${response.access_token}`
                //     }
                // }).then(response => response.json()).then((data) => {
                // })
                try {
                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: body
                    }).then(response => response.json()).then((data) => {
                        if (data.success) {
                            if (data.exist) {
                                if (data.info == "User signed up with different method") {
                                    setgoogleerror("User Signed In Using Other Methods.")
                                } else {
                                    // redirect to home page
                                    sessionStorage.setItem("user", JSON.stringify(data.info));

                                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/`
                                }
                            } else {
                                // redirect to extra detail page
                                sessionStorage.setItem("user", JSON.stringify(data.info));

                                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail/1`
                            }
                        } else {
                            setgoogleerror("Google Authenticaion Failed! Please Try Again")
                        }
                    })
                } catch (err) {

                }

            }
        })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            userName: "",
            country: "",
            state: ""
        },
        validate,
        validateOnChange: false,
        onSubmit: async (values) => {
            let body = {
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                userName: values.userName,
                country: values.country,
                state: values.state
            }
            body = JSON.stringify(body)
            setSubmitting(false);
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        sessionStorage.setItem("user", JSON.stringify(data.info));
                        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/emailverification/0`
                    } else {
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    })
    return (
        <div className="main-container">
            <form onSubmit={formik.handleSubmit} className='signup-form row justify-content-center'>
                <div className="form-title">
                    Sign Up And Explore
                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="text" onChange={formik.handleChange}

                        value={formik.values.firstName} name='firstName' placeholder='First Name' className="" />
                    <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.firstName}</div>
                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="text" onChange={formik.handleChange}

                        value={formik.values.lastName} name='lastName' placeholder='Last Name' className="" />
                    <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.lastName}</div>

                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="text" onChange={formik.handleChange}

                        value={formik.values.userName} name='userName' placeholder='User Name' className="" />
                    <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.userName}</div>

                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="email" onChange={formik.handleChange}

                        value={formik.values.email} name='email' placeholder='Email' className="" />
                    <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.email}</div>

                </div>
                <div className="input-container col-12 col-md-6">
                    <CountryDropdown
                        onChange={(val) => { formik.handleChange(val) }}

                        value={formik.values.country} />
                    <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.country}</div>
                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="text" onChange={formik.handleChange}

                        value={formik.values.state} name='state' placeholder='State' className="" />
                    <div style={{ marginLeft: "40px" }} className='input-error-display'>{formik.errors.state}</div>
                </div>
                <div className="input-container col-12 col-md-6">
                    <input onChange={formik.handleChange}

                        value={formik.values.password} type="password" name='password' placeholder='Password' className="" />
                    <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.password}</div>
                </div>
                <div className="input-container col-12 col-md-6">
                    <input type="password" onChange={formik.handleChange}

                        value={formik.values.confirmPassword} name='confirmPassword' placeholder='Confirm Password' className="" />
                    <span className=''></span>
                    <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.confirmPassword}</div>
                </div>
                <div className="input-button col-6">
                    <button type='submit' onClick={formik.handleSubmit} className="sign-in">
                        Sign Up
                    </button>
                    <button type="button" onClick={loginusingGoogle} className="login-with-google-btn" >
                        Sign up with Google
                    </button>
                    <div style={{ textAlign: "center", color: "red" }}>
                        {googleerror}
                    </div>
                    <div className='register-container' >
                        Already Have an Account? <a href='/signin'> Login</a>
                    </div>
                </div>
            </form>
            {/* )}
        </Formik> */}
        </div >
    )
}
export default Signup