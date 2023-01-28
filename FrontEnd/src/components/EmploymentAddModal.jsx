import React from 'react'
import { useState } from 'react'
import "../css/employmentaddmodal.css"
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { DatePicker } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CountryDropdown } from 'react-country-region-selector';
const EmploymentSchema = Yup.object().shape({
    formcompanyname: Yup.string()
        .required('Required'),
    formcountry: Yup.string()
        .required('Required'),
    formstate: Yup.string()
        .required('Required'),
    formtitle: Yup.string()
        .required('Required'),
    formperiodFrom: Yup.string()
        .required('Required'),
    formperiodTo: Yup.string()
        .required('Required'),
    formdescription: Yup.string()
        .required('Required')
})
const EmploymentModal = () => {
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [buttonloading, setbuttonloading] = useState(false)

    let closeEmploymentModal = () => {
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
                        formcompanyname: "",
                        formcountry: "",
                        formstate: "",
                        formtitle: "",
                        formperiodFrom: "",
                        formperiodTo: "",
                        formdescription: ""
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={EmploymentSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            empAt: values.formcompanyname,
                            empCountry: values.formcountry,
                            empState: values.formstate,
                            empRole: values.formtitle,
                            empFrom: values.formperiodFrom,
                            empTo: values.formperiodTo,
                            empDescription: values.formdescription,
                        }
                        body = JSON.stringify(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        setbuttonloading(true)
                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/employmentHistory/${userid}`, {
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
                        <form className=' row '>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Employment</h5>
                                    <button onClick={closeEmploymentModal} type="button" className="employment-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="employment-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="employment-modal-employment"></h2>

                                                    <div className="employment-modal-input-group">
                                                        <label>Company Name</label>

                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formcompanyname} name='formcompanyname' className="" type="text" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formcompanyname && touched.formcompanyname && errors.formcompanyname}</div>

                                                    </div>

                                                    <div className="employment-modal-location-container">
                                                        <div className="employment-modal-input-group col-6 employment-modal-location-country">
                                                            <label style={{
                                                                position: "absolute",
                                                                top: "-13px"
                                                            }}>Country</label>

                                                            <CountryDropdown
                                                                onChange={(val) => { setFieldValue("formcountry", val) }}
                                                                onBlur={handleBlur}
                                                                value={values.formcountry} />
                                                            <div className='input-error-display' style={{
                                                                position: "absolute",
                                                                bottom: "-30px"
                                                            }} >{errors.formcountry && touched.formcountry && errors.formcountry}</div>

                                                        </div>
                                                        <div className="employment-modal-input-group">
                                                            <label style={{
                                                                position: "absolute",
                                                                top: "-13px"
                                                            }} >State</label>

                                                            <input onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formstate} name='formstate' type="text" placeholder="City" />

                                                            <div className='input-error-display' style={{ position: "absolute", bottom: "-30px" }} >{errors.formstate && touched.formstate && errors.formstate}</div>
                                                        </div>
                                                    </div>
                                                    <div className="employment-modal-input-group">
                                                        <label>Title</label>

                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formtitle} name='formtitle' className="" type="text" placeholder="Title" />
                                                        <div className='input-error-display' style={{ position: "absolute" }} >{errors.formtitle && touched.formtitle && errors.formtitle}</div>

                                                    </div>
                                                    <div className="employment-modal-period-container">

                                                        <div>

                                                            <div className="education-modal-input-group">
                                                                <label>Period From</label>
                                                                <DatePicker onChange={(date) => { setFieldValue("formperiodFrom", date.$d.toString()); }} />

                                                                <div className='input-error-display' style={{ position: "absolute" }} >{errors.formperiodFrom && touched.formperiodFrom && errors.formperiodFrom}</div>
                                                            </div>
                                                        </div>
                                                        <div>

                                                            <div className="education-modal-input-group">
                                                                <label>Period To</label>
                                                                <DatePicker onChange={(date) => { setFieldValue("formperiodTo", date.$d.toString()); }} />

                                                                <div className='input-error-display' style={{ position: "absolute" }} >{errors.formperiodTo && touched.formperiodTo && errors.formperiodTo}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="employment-modal-period-container employment-textarea-container">

                                                        <div className="employment-modal-input-group employment-textarea-container-child">
                                                            <label>Description</label>
                                                            <textarea onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formdescription} name='formdescription' id="" cols="30" rows="10"></textarea>
                                                            <div className='input-error-display' style={{ position: "absolute" }} >{errors.formdescription && touched.formdescription && errors.formdescription}</div>

                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeEmploymentModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
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
        </div >
    )
}

export default EmploymentModal