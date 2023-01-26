import React from 'react'
import "../css/opportunitypage.css"
const Navbar = () => {
    let logout = () => {
        window.localStorage.removeItem('user')
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
    }
    let login = () => {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand">
                    ProTalent
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href={"/"} className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href={"/opportunity"} className="nav-link active">Browse Opportunities</a>
                        </li>
                        <li className="nav-item">
                            <a href={"/blog"} className="nav-link active">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href={"/contact"} className="nav-link active">Contact</a>
                        </li>
                        {JSON.parse(localStorage.getItem('user')) == null ?
                            <></>
                            : <li className="nav-item">
                                <a href={"/profile"} className="nav-link active">Profile</a>
                            </li>}
                        {JSON.parse(localStorage.getItem('user')) == null ?
                            <li className="nav-item">
                                <div><button onClick={login} type="submit" className="btn btn-primary">Log In</button>
                                </div>
                            </li>
                            : <li className="nav-item">
                                <div><button onClick={logout} type="submit" className="btn btn-primary">Log Out</button>
                                </div>            </li>}


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