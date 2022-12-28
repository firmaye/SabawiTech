import React from 'react'
import "../css/opportunitypage.css"
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" srcSet="" />
            </div>
            <div className="navbar-links">
                <div> Home</div>
                <div><a href={"/opportunity"}>Browse Jobs</a></div>
                <div>Services</div>
                <div><a href={"/blog"}>Blog</a></div>
                <div>About</div>
                <div><a href={"/profile"}>Profile</a></div>
            </div>


        </div >
    )
}

export default Navbar