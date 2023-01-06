import { useState } from 'react'
import './css/authentication.css'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const SigninSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required')
            .test('Unique Email', 'Email already in use', // <- key, message
                function (value) {
                    let body = {
                        email: value,
                        password: password
                    }
                    body = JSON.stringify(body)
                    console.log(body)
                    return new Promise((resolve, reject) => {
                        fetch('http://localhost:8080/api/auth/signin', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: body
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data)
                                if (data.message == "User Not found.") {
                                    resolve(false);
                                } else {
                                    resolve(true)
                                }
                                // successModal()
                            })
                            .catch((error) => {
                                // errorModal()
                                console.log(error)
                                console.error('Error:', error);
                            });
                    })
                })
    })
    let handleSubmit = (event) => {
        console.log("handlesubmit")
        event.preventDefault()
        let body = {
            email,
            password
        }
        body = JSON.stringify(body)
        console.log(body)
        fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(data));
                    window.location.href = "http://localhost:8081/"
                }
                // successModal()
            })
            .catch((error) => {
                // errorModal()
                console.log(error)
                console.error('Error:', error);
            });
    }
    return (
        <div className='main-container-parent'>
            <div className=" main-container">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    // validate={values => {
                    //     const errors = {};
                    //     if (!values.email) {
                    //         errors.email = 'Required';
                    //     } else if (
                    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    //     ) {
                    //         errors.email = 'Invalid email address';
                    //     }
                    //     let body = {
                    //         email: values.email,
                    //         password: values.password,
                    //     }
                    //     body = JSON.stringify(body)
                    //     fetch('http://localhost:8080/api/auth/signin', {
                    //         method: 'POST',
                    //         headers: {
                    //             'Content-Type': 'application/json',
                    //         },
                    //         body: body
                    //     })
                    //         .then((response) => response.json())
                    //         .then((data) => {
                    //             console.log(data)
                    //             if (data.message == "User Not found.") {
                    //                 console.log("called")
                    //                 errors.email = 'User Doesnt Exist';
                    //             }
                    //         })
                    //     if (!values.password) {
                    //         errors.password = 'Required';
                    //     }
                    //     return errors;
                    // }}
                    validationSchema={SigninSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            email: values.email,
                            password: values.password
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        setSubmitting(false);
                        await fetch('http://localhost:8080/api/auth/signin', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: body
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                setSubmitting(false);
                                console.log(data)
                                if (data.accessToken) {
                                    localStorage.setItem("user", JSON.stringify(data));
                                    window.location.href = "http://localhost:8081/"
                                }
                                // successModal()
                            })
                            .catch((error) => {
                                // errorModal()
                                setSubmitting(false);
                                console.log(error)
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
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className='signup-form'>
                            <div className="form-title">
                                Sign In And Explore
                            </div>
                            <div className="input-container">
                                <input onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} type="email" name='email' placeholder='Email' className="" />
                                <span className="">
                                </span>
                            </div>
                            <div className='input-error-display' >{errors.email && touched.email && errors.email}</div>

                            <div className="input-container">
                                <input type="password"
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
                                <button type="button" className="login-with-google-btn" >
                                    Sign In with Google
                                </button>
                                <div className='register-container' >
                                    Not Registered Yet? <a href='/signup' className='register'> Register</a>
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