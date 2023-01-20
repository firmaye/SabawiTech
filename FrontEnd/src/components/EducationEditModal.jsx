import React from 'react'
import { useState } from 'react'
import "../css/educationaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { DatePicker } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
const EducationSchema = Yup.object().shape({
    formattendedFrom: Yup.string()
        .required('Required'),
    formattendedTo: Yup.string()
        .required('Required'),
    formareaofstudy: Yup.string()
        .required('Required'),
    formschoolname: Yup.string()
        .required('Required'),

})
const EducationEditModal = ({ selected }) => {

    const dispatch = useDispatch()
    console.log(selected)
    console.log(selected._id)
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [buttonloading, setbuttonloading] = useState(false)

    let closeEducationModal = () => {
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
                        formattendedFrom: attendedfrom,
                        formattendedTo: attendedto,
                        formareaofstudy: areaofstudy,
                        formschoolname: schoolname,
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={EducationSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        console.log(values)
                        let body = {
                            schoolName: values.formschoolname,
                            dateAttendedFrom: values.formattendedFrom,
                            dateAttendedTo: values.formattendedTo,
                            areaOfStudy: values.formareaofstudy
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        setbuttonloading(true)

                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/education/${userid}/${selected._id}`, {
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
                                errorModal()
                                console.log(error)
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
                        <form className=''>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Education</h5>
                                    <button onClick={closeEducationModal} type="button" className="education-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="education-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="education-modal-education"></h2>
                                                    <form method="">
                                                        <div className="education-modal-input-group">
                                                            <input className="" type="text" placeholder="School Name" onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formschoolname} name='formschoolname' />
                                                            <div className='input-error-display' style={{ position: "absolute" }} >{errors.formschoolname && touched.formschoolname && errors.formschoolname}</div>

                                                        </div>
                                                        <div className="education-modal-location-container">

                                                            <div>

                                                                <div className="education-modal-input-group">
                                                                    <label>Attended From</label>
                                                                    <DatePicker onChange={(date) => { setFieldValue("formattendedFrom", date.$d.toString()); }} />
                                                                    <div className='input-error-display' style={{ position: "absolute" }} >{errors.formattendedFrom && touched.formattendedFrom && errors.formattendedFrom}</div>
                                                                </div>
                                                            </div>

                                                            <div>

                                                                <div className="education-modal-input-group">
                                                                    <label>Attended To</label>
                                                                    <DatePicker onChange={(date) => { setFieldValue("formattendedTo", date.$d.toString()); }} />

                                                                    <div className='input-error-display' style={{ position: "absolute" }} >{errors.formattendedTo && touched.formattendedTo && errors.formattendedTo}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="education-modal-input-group">
                                                            <input className="" type="text" placeholder="Area of Study" onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formareaofstudy} name='formareaofstudy' />
                                                            <div className='input-error-display' style={{ position: "absolute" }} >{errors.formareaofstudy && touched.formareaofstudy && errors.formareaofstudy}</div>

                                                        </div>


                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeEducationModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {buttonloading ? <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
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

export default EducationEditModal