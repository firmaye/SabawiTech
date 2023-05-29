import React, { useState, useEffect } from 'react';
import '../css/homepage.css'
import Footer from './footer';
const HomePage = () => {
    const [recent, setRecent] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/recent`).then(resp => resp.json())
            .then(
                result => {
                    setRecent(result)
                }
            )
    }, [])
    return (
        <div className="flex-container maincont">
            <div className="content">
                <div className="banner_content">
                    <h1>Fast Track Your Way To Your New Job</h1>
                    <p>
                        Save time and money finding your perfect job through market-matching, skill evaluation, and intelligent interviewing.</p>
                </div>
                <div className="landingillustration">
                    <img src="./Images/provider error.png" alt="" />
                </div>
            </div>
            <div className="row container providecont">
                <h1>What we provide</h1>
                <div className="col-md-4">
                    <div className="card cardmodify">
                        <div className="card-body cardbodymodify">
                            <img src="./Images/datasecured.jpg" alt="" />
                            <h3 className="card-title">Reliable </h3>
                            <p className="card-text cardmodifytext">
                                Secure and dependable online contracts that allow you to zero in on your next great work opportunity. Together we can find the job that best suits your talent set.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cardmodify">
                        <div className="card-body cardbodymodify">
                            <img src="./Images/livechat supprt.jpg" alt="" />
                            <h3 className="card-title">Secure</h3>
                            <p className="card-text cardmodifytext">
                                At intrant, we take pleasure in offering a secure platform for our freelancers and interns. You can relax knowing that your sensitive data is securely kept and protected</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="popular">
                <div className="populartext">
                    <h1>Most Popular services</h1>
                    <p>Unlock your full potential: See our top-rated services and find the job opportunity that fits you best!</p>
                </div>
                <div className="row">
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./Images/flutter-app-developer.jpg" alt="" />
                                <div className="profilecont">
                                    <h5 style={{ paddingTop: "20px" }}>Kese Events</h5>
                                    <p style={{ paddingRight: "20px" }} >Remote Flutter App And Web Developer<span><b></b></span></p>
                                </div>
                                <h5 className="card-title poptitle"> Kese Event is a start-up company that have event management, live streaming and ticketing services.</h5>
                                <hr />
                                <div className="service">
                                    <p>Paid</p>
                                    <p>10,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./Images/flutter-app-development.jpg" alt="" />
                                <div className="profilecont">
                                    <h5 style={{ paddingTop: "20px" }}>Tenkara Technologies</h5>
                                    <p style={{ paddingRight: "20px" }} >Remote Flutter App Developer<span><b></b></span></p>
                                </div>
                                <h5 className="card-title poptitle"> Design and develop efficient, clean, maintainable, and testable code, following best practices and design patterns...</h5>
                                <hr />
                                <div className="service">
                                    <p>Paid</p>
                                    {/* <p>10,000</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./Images/frontend.jpg" alt="" />
                                <div className="profilecont">
                                    <h5 style={{ paddingTop: "20px" }}>Adret</h5>
                                    <p style={{ paddingRight: "20px" }} >Remote Front End Developer<span><b></b></span></p>
                                </div>
                                <h5 className="card-title poptitle"> Building websites using frameworks such as next.js
                                    ,Updating existing website UI and some logic...</h5>
                                <hr />
                                <div className="service">
                                    <p>Paid</p>
                                    {/* <p>10,000</p> */}
                                </div></div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="cardview">
                <div className="cardviewtext">
                    <h1>Find the talent needed to get your business growing.</h1>
                </div>
                <div className="cardviewillustration">
                    <img src="./Images/provider error.png" alt="" />
                </div>
            </div>
        </div>

    );
}

export default HomePage;
