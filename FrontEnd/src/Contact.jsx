import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import "./css/contact.css"
const Contact = () => {
    return (
        <main>
            <Navbar />
            <Header title={"Contact"} />

            <section>
                <div class="container">
                    <div class="row">

                        <div class="profile-card-container-parent col-lg-3">
                            <div class="card profile-card-3">

                                <div class="profile-thumb-block">
                                    <div className="profile-icon-container address-container">

                                        <i class="fa fa-address-book"></i>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="profile-card-container-parent col-lg-3">
                            <div class="card profile-card-3">


                                <div class="profile-thumb-block">

                                    <div className="profile-icon-container mail-container">

                                        <i class="fa fa-envelope"></i>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="profile-card-container-parent col-lg-3">
                            <div class="card profile-card-3">

                                <div class="profile-thumb-block">
                                    <div className="profile-icon-container phone-container">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="profile-card-container-parent col-lg-3">
                            <div class="card profile-card-3">

                                <div class="profile-thumb-block">
                                    <div className="profile-icon-container location-container">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="getintouch">

                    <div class="contact1">
                        <div class="container-contact1">
                            <div class="contact1-pic js-tilt" data-tilt>
                                <img src="./Images/img-01.png" alt="IMG" />
                            </div>

                            <form class="contact1-form validate-form">
                                <span class="contact1-form-title">
                                    Get in touch
                                </span>

                                <div class="wrap-input1 validate-input" data-validate="Name is required">
                                    <input class="input1" type="text" name="name" placeholder="Name" />
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input1" type="text" name="email" placeholder="Email" />
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate="Subject is required">
                                    <input class="input1" type="text" name="subject" placeholder="Subject" />
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="wrap-input1 validate-input" data-validate="Message is required">
                                    <textarea class="input1" name="message" placeholder="Message"></textarea>
                                    <span class="shadow-input1"></span>
                                </div>

                                <div class="container-contact1-form-btn">
                                    <button class="contact1-form-btn">
                                        <span>
                                            Send Email
                                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Contact