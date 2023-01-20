import { useState } from 'react'
import './css/authentication.css'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
    const [password, setpassword] = useState("")
    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required')
            .test('Unique Email', "Incorrect User Name or Password", // <- key, message
                function (value) {
                    let body = {
                        email: value,
                        password: password
                    }
                    body = JSON.stringify(body)
                    console.log(body)
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
                                console.log(data)
                                if (data.message == "User Not found.") {
                                    resolve(false);
                                } else if (data.message == "Invalid Password!") {
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
                        console.log(body)
                        setSubmitting(false);
                        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`, {
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
                                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`
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
                                    {/* <button type="button" className="login-with-google-btn" >
                                        Sign In with Google
                                    </button> */}
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