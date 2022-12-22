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
                <div>Blog</div>
                <div>About</div>
                <div>Pages</div>
            </div>


        </div >
    )
}

export default Navbar