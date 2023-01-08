import React from 'react';
import '../css/homepage.css'
import Footer from './footer';
const HomePage = () => {
    return (
        <div className="flex-container maincont">
            <div className="content">
                <div className="banner_content">
                    <h1>The Easiest Way to Get Your New Job</h1>
                    <p>Work with talented people at the most affordabale price to get the most out of your time and cost</p>
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
                            <h3 className="card-title">Reliable Dealings</h3>
                            <p className="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cardmodify">
                        <div className="card-body cardbodymodify">
                            <img src="./Images/livechat supprt.jpg" alt="" />
                            <h3 className="card-title">Data Secured</h3>
                            <p className="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cardmodify">
                        <div className="card-body cardbodymodify">
                            <img src="./Images/reliabledealings.jpg" alt="" />
                            <h3 className="card-title">Live chat support</h3>
                            <p className="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="popular">
                <div className="populartext">
                    <h1>Most Popular services</h1>
                    <p>uniqely promote adaptive quality vectors rather than stand-alone e-markets
                        Pontifilcate alternative architectures where as iterate.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./Images/translate-600x399.jpg" alt="" />
                                <div className="profilecont">
                                    <img className="profile" src="./Images/profile.jpg" alt="" />
                                    <h5>Bayley Robertson</h5>
                                    <p>Delivery: <span><b>1-3 Days</b></span></p>
                                </div>
                                <h5 className="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                                <hr />
                                <div className="service">
                                    <p>Translation</p>
                                    <p>$5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./translate-600x399.jpg" alt="" />
                                <div className="profilecont">
                                    <img className="profile" src="./Images/profile.jpg" alt="" />
                                    <h5>Bayley Robertson</h5>
                                    <p>Delivery: <span><b>1-3 Days</b></span></p>
                                </div>
                                <h5 className="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                                <hr />
                                <div className="service">
                                    <p>Translation</p>
                                    <p>$5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bottomresponsive">
                        <div className="card popularcardmodify">
                            <div className="card-body popularcardbody">
                                <img src="./translate-600x399.jpg" alt="" />
                                <div className="profilecont">
                                    <img className="profile" src="./Images/profile.jpg" alt="" />
                                    <h5>Bayley Robertson</h5>
                                    <p>Delivery: <span><b>1-3 Days</b></span></p>
                                </div>
                                <h5 className="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                                <hr />
                                <div className="service">
                                    <p>Translation</p>
                                    <p>$5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cardview">
                <div className="cardviewtext">
                    <h1>Find the talent needed to get your business growing.</h1>
                    <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
                </div>
                <div className="cardviewillustration">
                    <img src="./Images/provider error.png" alt="" />
                </div>
            </div>
        <Footer />
    </div>

    );
}

export default HomePage;
