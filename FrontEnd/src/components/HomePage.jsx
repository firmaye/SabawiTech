import React from 'react';
import '../css/homepage.css'
import Footer from './footer';
const HomePage = () => {
    return (
        <div class="flex-container maincont">
        <div class="content">
            <div class="banner_content">
                <h1>The Easiest Way to Get Your New Job</h1>
                <p>Work with talented people at the most affordabale price to get the most out of your time and cost</p>
            </div>
            <div class="landingillustration">
                <img src="./Images/provider error.png" alt=""/>
            </div>
        </div>
        <div class="row container providecont">
            <h1>What we provide</h1>
            <div class="col-md-4">
                <div class="card cardmodify">
                    <div class="card-body cardbodymodify">
                        <img src="./Images/datasecured.jpg" alt=""/>
                        <h3 class="card-title">Reliable Dealings</h3>
                        <p class="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardmodify">
                    <div class="card-body cardbodymodify">
                        <img src="./Images/livechat supprt.jpg" alt=""/>
                        <h3 class="card-title">Data Secured</h3>
                        <p class="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardmodify">
                    <div class="card-body cardbodymodify">
                        <img src="./Images/reliabledealings.jpg" alt=""/>
                        <h3 class="card-title">Live chat support</h3>
                        <p class="card-text cardmodifytext">Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
                    </div>
                </div>
            </div>
        </div>
        <section class="popular">
            <div class="populartext">
                <h1>Most Popular services</h1>
                <p>uniqely promote adaptive quality vectors rather than stand-alone e-markets
                    Pontifilcate alternative architectures where as iterate.
                </p>
            </div>
            <div class="row">
                <div class="col-md-4 bottomresponsive">
                    <div class="card popularcardmodify">
                        <div class="card-body popularcardbody">
                            <img src="./Images/translate-600x399.jpg" alt=""/>
                            <div class="profilecont">
                                <img class="profile" src="./Images/profile.jpg" alt=""/>
                                <h5>Bayley Robertson</h5>
                                <p>Delivery: <span><b>1-3 Days</b></span></p>
                            </div>
                            <h5 class="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                            <hr/>
                            <div class="service">
                                <p>Translation</p>
                                <p>$5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 bottomresponsive">
                    <div class="card popularcardmodify">
                        <div class="card-body popularcardbody">
                            <img src="./translate-600x399.jpg" alt=""/>
                            <div class="profilecont">
                                <img class="profile" src="./Images/profile.jpg" alt=""/>
                                <h5>Bayley Robertson</h5>
                                <p>Delivery: <span><b>1-3 Days</b></span></p>
                            </div>
                            <h5 class="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                            <hr/>
                            <div class="service">
                                <p>Translation</p>
                                <p>$5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 bottomresponsive">
                    <div class="card popularcardmodify">
                        <div class="card-body popularcardbody">
                            <img src="./translate-600x399.jpg" alt=""/>
                            <div class="profilecont">
                                <img class="profile" src="./Images/profile.jpg" alt=""/>
                                <h5>Bayley Robertson</h5>
                                <p>Delivery: <span><b>1-3 Days</b></span></p>
                            </div>
                            <h5 class="card-title poptitle">I will translate english to japanese or japanese to ...</h5>
                            <hr/>
                            <div class="service">
                                <p>Translation</p>
                                <p>$5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="cardview">
            <div class="cardviewtext">
                <h1>Find the talent needed to get your business growing.</h1>
                <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
            </div>
            <div class="cardviewillustration">
                <img src="./Images/provider error.png" alt=""/>
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default HomePage;
