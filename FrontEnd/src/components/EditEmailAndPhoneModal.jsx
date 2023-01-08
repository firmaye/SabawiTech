import React from 'react'
import { useState } from 'react'
import "../css/editemailandphonemodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { Formik } from 'formik';
import * as Yup from 'yup';
const emailSchema = Yup.object().shape({
    formemail: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    formphone: Yup.string()
        .min(2, 'Too Short!')
        .required('Required')
})
const EmailAndPhoneModal = ({ emailandphone }) => {
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEmailAndPhoneModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    let successModal = () => {
        dispatch(setModal("success"))
        setmodalstyle({
            display: "none"
        })
    }
    let errorModal = () => {
        dispatch(setModal("error"))
        setmodalstyle({
            display: "none"
        })
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <Formik
                    initialValues={{
                        formemail: emailandphone.email
                        ,
                        formphone: emailandphone.phone
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={emailSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            email: values.formemail,
                            phoneNo: values.formphone
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        console.log(userid)
                        fetch(`http://localhost:8080/api/users/emailPhone/${userid}`, {
                            method: 'PATCH',
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

                                console.log(error)
                                errorModal()
                            });



                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleBlur,

                        /* and other goodies */
                    }) => (
                        <form className='col'>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Phone</h5>
                                    <button onClick={closeEmailAndPhoneModal} type="button" className="emailandphone-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="emailandphone-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="emailandphone-modal-education"></h2>
                                                    <form method="">
                                                        <div className="emailandphone-modal-input-group">
                                                            <input onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formemail} name='formemail' className="" type="text" placeholder="Email" />
                                                            <div style={{ position: "absolute" }} className='input-error-display' >{errors.formemail && touched.formemail && errors.formemail}</div>

                                                        </div>
                                                        <div className="emailandphone-modal-input-group">
                                                            <input onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formphone} name='formphone' className="" type="text" placeholder="Phone Number" />
                                                            <div style={{ position: "absolute" }} className='input-error-display' >{errors.formphone && touched.formphone && errors.formphone}</div>

                                                        </div>


                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeEmailAndPhoneModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default EmailAndPhoneModal