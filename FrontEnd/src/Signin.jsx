import { useState } from 'react'
import './css/authentication.css'
const Signin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let handleSubmit = (event) => {
        let body = {
            email,
            password
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
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
                <div className="background">
                    <img src="./Images/loginbackground.jpg" alt="" srcSet="" />
                </div>
                <form className='signup-form'>
                    <div className="form-title">
                        Sign In And Explore
                    </div>
                    <div className="input-container">
                        <input type="email" onChange={(data) => { setemail(data.target.value) }} name='email' placeholder='Email' className="" />
                        <span onChange={(data) => { setpassword(data.target.value) }} className="">
                        </span>
                    </div>
                    <div className="input-container">
                        <input onChange={(data) => { setpassword(data.target.value) }} type="text" name='password' placeholder='password' className="" />
                        <span className=''>
                        </span>
                    </div>
                    <span className=""></span>
                    <span className=''></span>

                    <div className="input-button">
                        <button onClick={(event) => { handleSubmit(event) }} type='submit' className="sign-in">
                            Sign In
                        </button>
                        <button type="button" className="login-with-google-btn" >
                            Sign In with Google
                        </button>
                        <div className='register-container' >
                            Not Registered Yet? <a className='register'> Register</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signin