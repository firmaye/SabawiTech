import React from 'react'
import { useState } from 'react'
import "../css/educationaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import Datetime from "react-datetime"
import "react-datepicker/dist/react-datepicker.css";
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
const EducationModal = () => {
    const dispatch = useDispatch()
    const [schoolname, setschoolname] = useState("")
    const [areaofstudy, setareaofstudy] = useState("")
    const [attendedfrom, setattendedfrom] = useState(new Date())
    const [attendedto, setattendedto] = useState(new Date())
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

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
    let handleSubmit = (event) => {
        let body = {
            schoolName: schoolname,
            dateAttendedFrom: attendedfrom,
            dateAttendedTo: attendedto,
            areaOfStudy: areaofstudy
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
        let userid = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:8080/api/users/education/${userid}`, {
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
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <Formik
                    initialValues={{
                        formattendedFrom: "",
                        formattendedTo: "",
                        formareaofstudy: "",
                        formschoolname: "",
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
                        fetch(`http://localhost:8080/api/users/education/${userid}`, {
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
                                    <h5 className="modal-title" id="exampleModalLabel">Add Education</h5>
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

                                                    <div className="education-modal-input-group">
                                                        <label>School Name</label>
                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formschoolname} name='formschoolname' className="" type="text" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formschoolname && touched.formschoolname && errors.formschoolname}</div>
                                                    </div>
                                                    <div className="education-modal-location-container">


                                                        <Datetime initialValue={values.formattendedFrom} onChange={(event) => { setFieldValue("formattendedFrom", event._d.toString()) }} timeFormat={false} renderInput={(props, openCalender) => {
                                                            return (
                                                                <div>

                                                                    <div className="education-modal-input-group">
                                                                        <label>Attended From</label>
                                                                        <input {...props} />
                                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formattendedFrom && touched.formattendedFrom && errors.formattendedFrom}</div>
                                                                    </div>
                                                                </div>
                                                            )

                                                        }} />

                                                        {/* <DatePicker selected={attendedfrom} onChange={(date) => setattendedfrom(date)} /> */}

                                                        <Datetime initialValue={values.formattendedTo} onChange={(event) => { setFieldValue("formattendedTo", event._d.toString()) }} timeFormat={false} renderInput={(props, openCalender) => {
                                                            return (
                                                                <div>

                                                                    <div className="education-modal-input-group">
                                                                        <label>Attended To</label>
                                                                        <input {...props} />
                                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formattendedTo && touched.formattendedTo && errors.formattendedTo}</div>
                                                                    </div>
                                                                </div>
                                                            )

                                                        }} />
                                                    </div>
                                                    <div className="education-modal-input-group">
                                                        <label>Area of Study</label>

                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formareaofstudy} name='formareaofstudy' type="text" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formareaofstudy && touched.formareaofstudy && errors.formareaofstudy}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeEducationModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
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

export default EducationModal