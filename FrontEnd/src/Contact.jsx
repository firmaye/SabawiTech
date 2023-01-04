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
                <div className="container">
                    <div className="row">

                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container address-container">

                                        <i className="fa fa-address-book"></i>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">


                                <div className="profile-thumb-block">

                                    <div className="profile-icon-container mail-container">

                                        <i className="fa fa-envelope"></i>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container phone-container">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        328 Queensberry Street, North Melbourne VIC 3051
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container location-container">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                </div>
                                <div className="card-content">
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
                <div className="getintouch">

                    <div className="contact1">
                        <div className="container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt>
                                <img src="./Images/img-01.png" alt="IMG" />
                            </div>

                            <form className="contact1-form validate-form">
                                <span className="contact1-form-title">
                                    Get in touch
                                </span>

                                <div className="wrap-input1 validate-input" data-validate="Name is required">
                                    <input className="input1" type="text" name="name" placeholder="Name" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input1" type="text" name="email" placeholder="Email" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Subject is required">
                                    <input className="input1" type="text" name="subject" placeholder="Subject" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Message is required">
                                    <textarea className="input1" name="message" placeholder="Message"></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button className="contact1-form-btn">
                                        <span>
                                            Send Email
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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