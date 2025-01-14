import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ErrorModal from './components/ErrorModal'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SuccessModal from './components/SuccessModal'
import "./css/contact.css"
import { setModal } from './redux/profilemodal'
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Yup from 'yup';
import Footer from './components/footer'
import { faAddressBook, faEnvelope, faMapMarker, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
const CertificationSchema = Yup.object().shape({
    formname: Yup.string()
        .required('Required'),
    formemail: Yup.string().email('Invalid email').required('Required'),
    formsubject: Yup.string()
        .required('Required'),
    formmessage: Yup.string()
        .required('Required'),

})
const Contact = () => {
    // if (JSON.parse(sessionStorage.getItem('user')) == null) {
    //     window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/signin"
    // }
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
        event.preventDefault()

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/issues`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((data) => {
                successModal()
            })
            .catch((error) => {
                errorModal()
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

            <section style={{ marginBottom: "80px" }}>
                <div className="container">
                    <div className="row">

                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container address-container">
                                        <FontAwesomeIcon icon={faAddressBook} />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Support
                                    </div>
                                    <div className="card-content-description">
                                        support@sabawitech.com                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">


                                <div className="profile-thumb-block">

                                    <div className="profile-icon-container mail-container">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Email
                                    </div>
                                    <div className="card-content-description">
                                        sabawitech@gmail.com                                 </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container phone-container">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Phone
                                    </div>
                                    <div className="card-content-description">
                                        +251 954842979                                </div>

                                </div>
                            </div>
                        </div>
                        <div className="profile-card-container-parent col-lg-3">
                            <div className="card profile-card-3">

                                <div className="profile-thumb-block">
                                    <div className="profile-icon-container location-container">
                                        <i className="fa fa-map-marker"></i>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-title">
                                        Address
                                    </div>
                                    <div className="card-content-description">
                                        Mexico, KKare Building, Addis Ababa                                    </div>

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
                            <Formik
                                initialValues={{
                                    formname: "",
                                    formemail: "",
                                    formsubject: "",
                                    formmessage: "",
                                }}
                                validateOnChange={false}
                                validateOnBlur={false}
                                validationSchema={CertificationSchema}
                                onSubmit={async (values, { setSubmitting }, formik) => {
                                    let body = {
                                        name: values.formname,
                                        email: values.formemail,
                                        subject: values.formsubject,
                                        message: values.formmessage
                                    }
                                    body = JSON.stringify(body)

                                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/issues`, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: body
                                    })
                                        .then((response) => response.json())
                                        .then((data) => {
                                            successModal()
                                        })
                                        .catch((error) => {
                                            errorModal()
                                            console.error('Error:', error);
                                        });
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    setFieldValue,
                                    /* and other goodies */
                                }) => (
                                    <form className="contact1-form validate-form">
                                        <span className="contact1-form-title">
                                            Get in touch
                                        </span>

                                        <div className="wrap-input1 validate-input" >
                                            <input onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.formname} className="input1" type="text" name="formname" placeholder="Name" />
                                            <div className='input-error-display' style={{ position: "absolute", left: "20px" }} >{errors.formname && touched.formname && errors.formname}</div>
                                        </div>

                                        <div className="wrap-input1 validate-input" >
                                            <input onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.formemail} className="input1" type="text" name="formemail" placeholder="Email" />
                                            <div className='input-error-display' style={{ position: "absolute", left: "20px" }} >{errors.formemail && touched.formemail && errors.formemail}</div>
                                        </div>

                                        <div className="wrap-input1 validate-input" >
                                            <input onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.formsubject} className="input1" type="text" name="formsubject" placeholder="Subject" />
                                            <div className='input-error-display' style={{ position: "absolute", left: "20px" }} >{errors.formsubject && touched.formsubject && errors.formsubject}</div>
                                        </div>

                                        <div className="wrap-input1 validate-input" >
                                            <textarea onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.formmessage} className="input1" name="formmessage" placeholder="Message"></textarea>
                                            <div className='input-error-display' style={{ position: "absolute", left: "20px" }} >{errors.formmessage && touched.formmessage && errors.formmessage}</div>
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
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>


            </section>
            <Footer />
        </main>
    )
}

export default Contact