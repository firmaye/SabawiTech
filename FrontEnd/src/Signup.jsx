import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './css/authentication.css'
const Signup = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    let errorModal = () => {
        dispatch(setModal("error"))
        setmodalstyle({
            display: "none"
        })
    }
    let handleSubmit = (event) => {
        let body = {
            firstName,
            lastName,
            userName,
            email,
            password,
            country,
            state
        }
        body = JSON.stringify(body)
        // console.log(body)
        event.preventDefault()
        fetch('http://localhost:8080/api/auth/signup', {
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
                    window.location.href = "http://localhost:8081/extradetail"
                }

            })
            .catch((error) => {
                // errorModal()
                console.log(error)
                console.error('Error:', error);
            });
    }
    return (
        <div className="main-container">
            <div className="background">
                <img src="./Images/background.jpg" alt="" srcSet="" />
            </div>
            <form className='signup-form'>
                <div className="form-title">
                    Sign Up And Explore
                </div>
                <div className="siderow">
                    <div className="input-container">
                        <input type="text" onChange={(data) => { setfirstName(data.target.value) }} name='Username' placeholder='First Name' className="" />
                        <span className=''>

                        </span>
                    </div>
                    <div className="input-container">
                        <input type="text" onChange={(data) => { setlastName(data.target.value) }} name='Username' placeholder='Last Name' className="" />
                        <span className=''>

                        </span>
                    </div>
                </div>

                <div className="input-container">
                    <input type="email" onChange={(data) => { setemail(data.target.value) }} name='email' placeholder='Email' className="" />
                    <span className="">
                    </span>
                </div>

                <div className="siderow">
                    {/* <input type="text" name='Username' placeholder='Country' className="" />
                        <span className=''>

                        </span> */}
                    <CountryDropdown
                        className="input-container countrycont"
                        value={country}
                        onChange={(val) => setcountry(val)} />

                    <div className="input-container">
                        <input type="text" onChange={(data) => { setstate(data.target.value) }} name='Username' placeholder='State' className="" />
                        <span className=''>

                        </span>
                    </div>
                </div>

                <div className="input-container">
                    <input onChange={(data) => { setpassword(data.target.value) }} type="text" name='password' placeholder='password' className="" />
                    <span className=''>
                    </span>
                </div>
                <span className=""></span>

                <div className="input-container">
                    <input type="" name='cpassword' placeholder='Confirm Password' className="" />
                    <span className=''></span>
                </div>
                <div className="input-container">
                    <input onChange={(data) => { setuserName(data.target.value) }} type="text" name='username' placeholder='username' className="" />
                    <span className=''>
                    </span>
                </div>
                <span className=""></span>
                <span className=''></span>

                <div className="input-button">
                    <button type='submit' onClick={handleSubmit} className="sign-in">

                        Sign Up
                    </button>
                    <button type="button" className="login-with-google-btn" >
                        Sign up with Google

                    </button>
                    <div className='register-container' >

                        Already Have an Account? <a> Login</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup