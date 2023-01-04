import './css/authentication.css'
const Signin = () => {
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
                        <input type="email" name='email' placeholder='Email' className="" />
                        <span className="">
                        </span>
                    </div>
                    <div className="input-container">
                        <input type="text" name='password' placeholder='password' className="" />
                        <span className=''>
                        </span>
                    </div>
                    <span className=""></span>
                    <span className=''></span>

                    <div className="input-button">
                        <button type='submit' className="sign-in">
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