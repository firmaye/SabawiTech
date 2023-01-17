import React from 'react'
import { useState } from 'react'
import "../css/titlemodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { Formik } from 'formik';
import * as Yup from 'yup';
const titleSchema = Yup.object().shape({
    formtitle: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    formdescription: Yup.string()
        .min(2, 'Too Short!')
        .required('Required')
})
const TitleModal = ({ profileinfo }) => {
    const dispatch = useDispatch()
    const [title, settitle] = useState(profileinfo.title)
    const [description, setdescription] = useState(profileinfo.description)
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
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
    let closeTitleModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    let handleSubmit = (event) => {
        let body = {
            title: title,
            titleOverview: description
        }
        body = JSON.stringify(body)
        console.log(body)
        let userid = JSON.parse(localStorage.getItem('user')).id
        // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/descriptionInfo/${userid}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: body
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data)
        //         successModal()
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         console.error('Error:', error);
        //     });
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <Formik
                    initialValues={{
                        formtitle: title
                        ,
                        formdescription: description
                    }}
                    validateOnBlur={false}
                    validationSchema={titleSchema}
                    onSubmit={async (values, { setSubmitting }, formik) => {
                        let body = {
                            title: values.formtitle,
                            titleOverview: values.formdescription
                        }
                        body = JSON.stringify(body)
                        console.log(body)
                        let userid = JSON.parse(localStorage.getItem('user')).id
                        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/descriptionInfo/${userid}`, {
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
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Title</h5>
                                    <button onClick={closeTitleModal} type="button" className="title-modal-close" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>                        </button>
                                </div>
                                <div className="modal-body">
                                    <div className="title-modal-page-wrapper ">
                                        <div className="">
                                            <div className="">
                                                <div className="">
                                                    <h2 className="title-modal-title"></h2>

                                                    <div className="title-modal-input-group">
                                                        <input onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.formtitle} name='formtitle' placeholder="Title Name" />
                                                        <div style={{ position: "absolute" }} className='input-error-display' >{errors.formtitle && touched.formtitle && errors.formtitle}</div>

                                                    </div>
                                                    <div className="row ">
                                                        <div className="col-12 title-modal-col-12">
                                                            <div className="title-modal-description-input">
                                                                <textarea onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.formdescription} name='formdescription' type="text" placeholder="Description" />
                                                                <div style={{ position: "absolute" }} className='input-error-display' >{errors.formdescription && touched.formdescription && errors.formdescription}</div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={closeTitleModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
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

export default TitleModal