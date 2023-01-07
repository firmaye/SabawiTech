import React from 'react'
import "../css/opportunitypage.css"
import Logo from "../assets/logo.png"

const Navbar = () => {
    let logout = () => {
        window.localStorage.removeItem('user')
        window.location.href = "http://localhost:8081/signin"
    }
    return (
        <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
            <div class="container">
                <a href="/" class="navbar-brand">
                    <i class="fas fa-blog"></i> &nbsp;
                    SabawiDevs
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div id="navbarCollapse" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href={"/"} class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href={"/opportunity"} class="nav-link active">Browse Jobs</a>
                        </li>
                        <li class="nav-item">
                            <a href={"/blog"} class="nav-link active">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href={"/contact"} class="nav-link active">Contact</a>
                        </li>
                        <li class="nav-item">
                            <div><button onClick={logout} type="submit" className="btn btn-primary">Log Out</button>
                            </div>            </li>
                    </ul>
                </div>



            </div>
        </nav>

        // <div className="navbar">
        //     <div className="logo">
        //         <img src={Logo} alt="" srcSet="" />
        //     </div>
        //     <div className="navbar-links">
        //         <div><a href={"/"}>Home</a></div>
        //         <div><a href={"/opportunity"}>Browse Jobs</a></div>
        //         <div>Services</div>
        //         <div><a href={"/blog"}>Blog</a></div>
        //         <div><a href={"/contact"}>Contact</a></div>
        //         <div>Pages</div>
        //     </div>


        // </div >
    )
}

export default Navbar