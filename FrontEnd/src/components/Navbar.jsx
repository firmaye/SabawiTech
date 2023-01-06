import React from 'react'
import "../css/opportunitypage.css"
import Logo from "../assets/logo.png"

const Navbar = () => {
    let logout = () => {
        window.localStorage.removeItem('user')
        window.location.href = "http://localhost:8081/signin"
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" srcSet="" />
            </div>
            <div className="navbar-links">
                <div><a href={"/"}>Home</a></div>
                <div><a href={"/opportunity"}>Browse Jobs</a></div>
                <div>Services</div>
                <div><a href={"/blog"}>Blog</a></div>
                <div><a href={"/contact"}>Contact</a></div>
                <div><a href={"/profile"}>Profile</a></div>
                <div><button onClick={logout} type="submit" className="btn btn-primary">Log Out</button>
                </div>

            </div>


        </div >
    )
}

export default Navbar