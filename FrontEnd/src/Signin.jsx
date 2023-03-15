import { useState } from 'react'
import './css/authentication.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useGoogleLogin } from '@react-oauth/google';

const Signin = () => {
    const [password, setpassword] = useState("")
    const [emailerror, setemailerror] = useState("")
    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required("Required")
            .test('Invalid Email', "Invalid Email or Password", // <- key, message
                function (value) {
                    let body = {
                        email: value,
                        password: password
                    }
                    body = JSON.stringify(body)

                    return new Promise((resolve, reject) => {
                        if (password == "") {
                            resolve(true);
                        } else {
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
                                        // if (data.message == "User Not found.") {
                                        //     resolve(false);
                                        // }
                                        // if (data.message == "Invalid Password!") {
                                        //     resolve(false);
                                        // }
                                        // if (data.message == "User is not Registered") {
                                        //     resolve(false);
                                        // }
                                    } else {
                                        resolve(true)
                                    }
                                    // successModal()
                                })
                                .catch((error) => {
                                    // errorModal()
                                    console.error('Error:', error);
                                });
                        }
                    })
                })
        , password: Yup.string()
            .required('Required'),
    })
    const [googleerror, setgoogleerror] = useState("")

    const loginusingGoogle =
        useGoogleLogin({
            onSuccess: async response => {
                let body = {
                    access_token: response.access_token
                }
                body = JSON.stringify(body)
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
                                        sessionStorage.setItem("user", JSON.stringify(data.info));
                                    }
                                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/`
                                }
                            } else {
                                // redirect to extra detail page
                                if (data.accessToken) {
                                    sessionStorage.setItem("user", JSON.stringify(data.info));
                                }
                                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail/1`
                            }
                        } else {
                            setgoogleerror(data.info)
                        }
                    })
                } catch (err) {

                }

            }
        })
    return (
        <div className='main-container-parent'>
            <div className=" main-container main-container-signin">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validateOnChange={false}
                    validateOnBlur={false}

                    validationSchema={SigninSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            email: values.email,
                            password: values.password
                        }
                        body = JSON.stringify(body)
                        setSubmitting(false);
                        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: body
                        })
                            .then((response) => {

                                return response.json();
                            })
                            .then((data) => {
                                setSubmitting(false);
                                if (data.success) {
                                    sessionStorage.setItem("user", JSON.stringify(data.info));
                                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`
                                }
                                // successModal()
                            })
                            .catch((error) => {
                                // errorModal()
                                setSubmitting(false);
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
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className='signup-form'>
                            <div className="form-title">
                                Sign In And Explore
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>

                                <div className="input-container">
                                    <input
                                        style={{ marginLeft: 0 }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} type="email" name='email' placeholder='Email' className="" />
                                    <span className="">
                                    </span>
                                </div>
                                <div className='input-error-display' >{errors.email && touched.email && errors.email}</div>

                                <div className="input-container">
                                    <input
                                        style={{ marginLeft: 0 }}
                                        type="password"
                                        name="password"
                                        onChange={(event) => { setpassword(event.target.value), handleChange(event) }}
                                        onBlur={handleBlur}
                                        value={values.password} placeholder='password' className="" />
                                    <span className=''>
                                    </span>
                                </div>
                                <div className='input-error-display' >{errors.password && touched.password && errors.password}</div>
                                <div className="input-button">
                                    <button onClick={(event) => { handleSubmit(event) }} type='submit' className="sign-in">
                                        Sign In
                                    </button>
                                    <button type="button" onClick={loginusingGoogle} className="login-with-google-btn" >
                                        Sign In with Google
                                    </button>
                                    <div style={{ textAlign: "center", color: "red" }}>
                                        {googleerror}
                                    </div>
                                    <div className='register-container' >
                                        Not Registered Yet? <a href='/signup' className='register'> Register</a>
                                    </div>
                                </div>
                            </div>




                        </form>
                        // <form onSubmit={handleSubmit}>
                        //     <input
                        //         type="email"
                        //         name="email"
                        //         onChange={""}
                        //         onBlur={handleBlur}
                        //         value={values.email}
                        //     />
                        //     {errors.email && touched.email && errors.email}
                        //     <input
                        //         type="password"
                        //         name="password"
                        //         onChange={""}
                        //         onBlur={handleBlur}
                        //         value={values.password}
                        //     />
                        //     {errors.password && touched.password && errors.password}
                        //     <button type="submit" disabled={isSubmitting}>
                        //         Submit
                        //     </button>
                        // </form>
                    )}
                </Formik>
            </div>



        </div >
    )
}




// export default App

export default Signin