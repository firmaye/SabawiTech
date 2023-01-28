import React from 'react'
import { useState } from 'react'
import "../css/certificationeditmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { DatePicker } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const CertificationSchema = Yup.object().shape({
    formtitle: Yup.string()
        .required('Required'),
    formprovider: Yup.string()
        .required('Required'),
    formlink: Yup.string()
        .required('Required'),
    fromdateissued: Yup.string()
        .required('Required'),

})
const CertificationEditModal = ({ selected }) => {
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [buttonloading, setbuttonloading] = useState(false)

    let closeCertificationEditModal = () => {
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
                        fromdateissued: new Date(selected.dateIssued),
                        formtitle: selected.certTitle,
                        formprovider: selected.certProvider,
                        formlink: selected.certLink,
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={CertificationSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            certTitle: values.formtitle,
                            certProvider: values.formprovider,
                            certLink: values.formlink,
                            dateIssued: values.fromdateissued
                        }
                        body = JSON.stringify(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        setbuttonloading(true)

                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/certification/${userid}/${selected._id}`, {
                            method: 'PATCH',
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
                        <form className=' row '>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Certificate</h5>
                                    <button onClick={closeCertificationEditModal} type="button" className="certification-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="certification-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="certification-modal-certification"></h2>

                                                    <div className="certification-modal-input-group">
                                                        <label>Certificate Title</label>
                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formtitle} name='formtitle' className="" type="text" placeholder="Certificate Title" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formtitle && touched.formtitle && errors.formtitle}</div>

                                                    </div>

                                                    <div className="certification-modal-input-group">
                                                        <label>Certificate Provider</label>
                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formprovider} name='formprovider' className="" type="text" placeholder="Certificate Provider" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formprovider && touched.formprovider && errors.formprovider}</div>

                                                    </div>
                                                    <div className="certification-modal-input-group">
                                                        <label>Certificate Link</label>
                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formlink} name='formlink' className="" type="text" placeholder="Certificate Link" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formlink && touched.formlink && errors.formlink}</div>

                                                    </div>
                                                    <div className="certification-modal-period-container">

                                                        <div>

                                                            <div className="certification-modal-input-group">
                                                                <label>Date Issued</label>
                                                                <DatePicker defaultValue={dayjs(values.fromdateissued)} onChange={(date) => { setFieldValue("fromdateissued", date.$d.toString()); }} />
                                                                <div className='input-error-display' style={{ position: "absolute" }} >{errors.fromdateissued && touched.fromdateissued && errors.fromdateissued}</div>
                                                            </div>
                                                        </div>

                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeCertificationEditModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button> : <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>}
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CertificationEditModal