import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import { useGoogleLogin } from '@react-oauth/google';
import './css/authentication.css'
import { Formik } from 'formik';
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
                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: body
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (!data.success) {
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
                                    if (data.info.accessToken) {
                                        localStorage.setItem("user", JSON.stringify(data.info));
                                    }
                                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/`
                                }
                            } else {
                                // redirect to extra detail page
                                if (data.accessToken) {
                                    localStorage.setItem("user", JSON.stringify(data.info));
                                }
                                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail`
                            }
                        } else {
                            setgoogleerror("Google Authenticaion Failed! Please Try Again")
                        }
                    })
                } catch (err) {

                }

            }
        })

    return (
        <div className="main-container">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    firstName: "",
                    lastName: "",
                    userName: "",
                    country: "",
                    state: ""
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting }, formik) => {
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

                            } else {
                            }
                            // if (data.accessToken) {
                            //     localStorage.setItem("user", JSON.stringify(data));
                            // }
                            // window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail`
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form className='signup-form row justify-content-center'>
                        <div className="form-title">
                            Sign Up And Explore
                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="text" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName} name='firstName' placeholder='First Name' className="" />
                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{errors.firstName && touched.firstName && errors.firstName}</div>
                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="text" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName} name='lastName' placeholder='last Name' className="" />
                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{errors.lastName && touched.lastName && errors.lastName}</div>

                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="text" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName} name='userName' placeholder='user Name' className="" />
                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{errors.userName && touched.userName && errors.userName}</div>

                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="email" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} name='email' placeholder='Email' className="" />
                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{errors.email && touched.email && errors.email}</div>

                        </div>
                        <div className="input-container col-12 col-md-6">
                            <CountryDropdown
                                onChange={(val) => { setFieldValue("country", val) }}
                                onBlur={handleBlur}
                                value={values.country} />
                            <div style={{ marginLeft: "40px" }} className='input-error-display' >{errors.country && touched.country && errors.country}</div>
                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="text" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.state} name='state' placeholder='State' className="" />
                            <div style={{ marginLeft: "40px" }} className='input-error-display'>{errors.state && touched.state && errors.state}</div>
                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password} type="password" name='password' placeholder='password' className="" />
                            <div style={{ marginLeft: "40px" }} className='input-error-display' >{errors.password && touched.password && errors.password}</div>
                        </div>
                        <div className="input-container col-12 col-md-6">
                            <input type="password" onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword} name='confirmPassword' placeholder='Confirm Password' className="" />
                            <span className=''></span>
                            <div style={{ marginLeft: "40px" }} className='input-error-display' >{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</div>
                        </div>
                        <div className="input-button col-6">
                            <button type='submit' onClick={handleSubmit} className="sign-in">
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
                )}
            </Formik>
        </div>
    )
}
export default Signup