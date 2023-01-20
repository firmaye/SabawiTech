import React from 'react'
import { useState } from 'react'
import "../css/namemodal.css"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { Formik } from 'formik';
import * as Yup from 'yup';

const nameModalSchema = Yup.object().shape({

    formfirstName: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    formlastName: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    formcountry: Yup.string()
        .required('Required'),
    formstate: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),

})
const NameModal = ({ profileinfo }) => {
    const dispatch = useDispatch()
    const [buttonloading, setbuttonloading] = useState(false)

    const [country, setcountry] = useState(profileinfo.country)
    const [firstname, setfirstname] = useState(profileinfo.firstName)
    const [lastname, setlastname] = useState(profileinfo.lastName)
    const [state, setstate] = useState(profileinfo.state)
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeNameModal = () => {
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
                        formfirstName: firstname,
                        formlastName: lastname,
                        formcountry: country,
                        formstate: state

                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={nameModalSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {

                        let body = {
                            firstName: values.formfirstName,
                            lastName: values.formlastName,
                            country: values.formcountry,
                            state: values.formstate
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        setbuttonloading(true)

                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/personalInfo/${userid}`, {
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
                        <form method="">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Name And Location</h5>
                                    <button onClick={closeNameModal} type="button" className="name-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="name-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="name-modal-title"></h2>

                                                    <div className='d-flex'>

                                                        <div className="col-10 col-sm-5 name-modal-input-group">
                                                            <label>First Name</label>

                                                            <input className=""
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formfirstName}
                                                                type="text"
                                                                name="formfirstName" />

                                                            <div style={{ position: "absolute" }} className='input-error-display' >{errors.formfirstName && touched.formfirstName && errors.formfirstName}</div>
                                                        </div>
                                                        <div className="col-10 col-sm-5 name-modal-input-group">
                                                            <label>Last Name</label>

                                                            <input onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.formlastName}
                                                                type="text"
                                                                name="formlastName" />
                                                            <div style={{ position: "absolute" }} className='input-error-display' >{errors.formlastName && touched.formlastName && errors.formlastName}</div>

                                                        </div>
                                                    </div>
                                                    <div className="row ">
                                                        <div className="col-10  name-modal-dropdown">
                                                            <div className="">
                                                                <label>Location</label>
                                                                <div>
                                                                    <CountryDropdown
                                                                        onChange={(val) => { setFieldValue("formcountry", val) }}
                                                                        onBlur={handleBlur}
                                                                        value={values.formcountry} />
                                                                </div>
                                                                <div style={{ position: "absolute" }} className='input-error-display' >{errors.formcountry && touched.formcountry && errors.formcountry}</div>

                                                            </div>

                                                        </div>
                                                        <div className="col-12  name-modal-col-12">
                                                            <div className="name-modal-input-group">
                                                                <label>State</label>

                                                                <input onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.formstate} type="text" name="formstate" />
                                                                <div style={{ position: "absolute" }} className='input-error-display' >{errors.formstate && touched.formstate && errors.formstate}</div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeNameModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button> : <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save changes</button>}
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default NameModal