import React, {useState} from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import '../css/authentication.css'
const Signup = () => {
    const [country, setcountry] = useState("")
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
                    <input type="text" name='Username' placeholder='First Name' className="" />
                    <span className=''>

                    </span>
                </div>
                <div className="input-container">
                    <input type="text" name='Username' placeholder='Last Name' className="" />
                    <span className=''>

                    </span>
                </div>
                </div>

                <div className="input-container">
                    <input type="email" name='email' placeholder='Email' className="" />
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
                        <input type="text" name='Username' placeholder='State' className="" />
                        <span className=''>

                        </span>
                    </div>
                </div>

                <div className="input-container">
                    <input type="text" name='password' placeholder='password' className="" />
                    <span className=''>
                    </span>
                </div>
                <span className=""></span>

                <div className="input-container">
                    <input type="" name='cpassword' placeholder='Confirm Password' className="" />
                    <span className=''></span>
                </div>
                <span className=''></span>

                <div className="input-button">
                    <button type='submit' className="sign-in">

                        Sign In
                    </button>
                    <button type="button" className="login-with-google-btn" >
                        Sign In with Google

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