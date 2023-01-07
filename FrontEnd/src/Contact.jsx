import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorModal from './components/ErrorModal'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SuccessModal from './components/SuccessModal'
import "./css/contact.css"
import { setModal } from './redux/profilemodal'

const Contact = () => {
    if (JSON.parse(localStorage.getItem('user')) == null) {
        window.location.href = "http://localhost:8081/signin"
    }
    const dispatch = useDispatch()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")
    let successModal = () => {
        dispatch(setModal("success"))

    }
    let errorModal = () => {
        dispatch(setModal("error"))

    }
    let handleSubmit = (event) => {
        let body = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()

        console.log(`http://localhost:8080/api/issues`)
        fetch(`http://localhost:8080/api/issues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                successModal()
            })
            .catch((error) => {
                errorModal()
                console.log(error)
                console.error('Error:', error);
            });
    }
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    return (
        <main>

            {currentModal == "success" ? <SuccessModal />
                : currentModal == "error" ? <ErrorModal />
                    : <></>
            }
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
                                    <input onChange={(data) => { setname(data.target.value) }} className="input1" type="text" name="name" placeholder="Name" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input onChange={(data) => { setemail(data.target.value) }} className="input1" type="text" name="email" placeholder="Email" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Subject is required">
                                    <input onChange={(data) => { setsubject(data.target.value) }} className="input1" type="text" name="subject" placeholder="Subject" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" data-validate="Message is required">
                                    <textarea onChange={(data) => { setmessage(data.target.value) }} className="input1" name="message" placeholder="Message"></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button onClick={(value) => { handleSubmit(value) }} className="contact1-form-btn">
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