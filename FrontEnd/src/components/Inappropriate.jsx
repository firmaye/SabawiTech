import React from 'react'
import { useState } from 'react'
import "../css/inappropriatemodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik';
import * as Yup from 'yup';
const InappropriateSchema = Yup.object().shape({
    formdescription: Yup.string()
        .required('Required'),
    formreason: Yup.string()
        .required('Required'),

})
const InappropriateModal = () => {
    const dispatch = useDispatch()
    const [buttonloading, setbuttonloading] = useState(false)

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeInappropriateModal = () => {
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
                        formreason: "somethingelse",
                        formdescription: ""
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={InappropriateSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            description: values.formdescription,
                            reason: values.formreason,
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        // let userid = JSON.parse(sessionStorage.getItem('user')).id
                        // setbuttonloading(true)

                        // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/inappropriate/${userid}`, {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //     },
                        //     body: body
                        // })
                        //     .then((response) => response.json())
                        //     .then((data) => {
                        //         successModal()
                        //     })
                        //     .catch((error) => {
                        //         errorModal()
                        //         console.error('Error:', error);
                        //     });

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
                        <form className=' row '>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Flag As Inappropriate</h5>
                                    <button onClick={closeInappropriateModal} type="button" className="inappropriate-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="inappropriate-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="inappropriate-modal-inappropriate"></h2>

                                                    <div class="form-check">
                                                        <input onChange={(val) => { setFieldValue("formreason", "scam") }} value={"scam"} class="form-check-input" type="radio" name="job_post_option" id="flexRadioDefault1" />
                                                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                                                            Job Post looks like a scam or contains a suspicous link
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input onChange={(val) => { setFieldValue("formreason", "unclear") }} value={"unclear"} class="form-check-input" type="radio" name="job_post_option" id="flexRadioDefault2" />
                                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                            Job post is unclear or incomplete
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input onChange={(val) => { setFieldValue("formreason", "somethingelse") }} class="form-check-input" type="radio" name="job_post_option" id="flexRadioDefault2" checked={values.formreason == "somethingelse" ? true : false} />
                                                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                            It is Something Else
                                                        </label>
                                                    </div>

                                                    <div style={{ marginBottom: "20px" }} className="inappropriate-modal-description">
                                                        <label>Please Tell Us More</label>
                                                        <textarea onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formdescription} name='formdescription' className="" type="text" placeholder="Description" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formdescription && touched.formdescription && errors.formdescription}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeInappropriateModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button> : <button type="button" onClick={handleSubmit} className="btn btn-primary">Report</button>}
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default InappropriateModal