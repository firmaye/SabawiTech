import React, { useEffect } from 'react'
import "./css/extradetail.css"
import { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import AddPortifolioSuccessModal from './components/AddPortifolioSuccessModal'
import ErrorModal from './components/ErrorModal'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setModal } from './redux/profilemodal'
import FadeIn from 'react-fade-in/lib/FadeIn';
import Loading from './components/Loading';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';

const ExtraDetail = () => {
    const [loading, setloading] = useState(true)

    const params = useParams()
    let source = params.type
    const dispatch = useDispatch()
    let successModal = () => {
        dispatch(setModal("addportifoliosuccess"))

    }
    let errorModal = () => {
        dispatch(setModal("error"))

    }
    const titleSchema = Yup.object().shape({
        formtitle: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        formdescription: Yup.string()
            .min(2, 'Too Short!')
            .required('Required')
    })
    const personalDetailSchema = Yup.object().shape({

        formuserName: Yup.string()
            .min(2, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        formcountry: Yup.string()
            .required('Required'),
        formstate: Yup.string()
            .required('Required'),
    })
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState("")
    const [selectedImage, setSelectedImage] = useState("");
    const [title, settitle] = useState("");
    const [descritpion, setdescritpion] = useState("");
    const [imageerror, setimageerror] = useState("")
    const [skillerror, setskillerror] = useState("")
    const [userName, setuserName] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [buttonloading, setbuttonloading] = useState(false)
    let setImagePath = (e) => {
        setSelectedImage(e.target.files[0])

    }
    let handleSubmit = () => {
        const formData = new FormData();
        // Update the formData object
        formData.append(
            'profilePhoto',
            selectedImage
        );
        formData.append(
            'title',
            title
        );
        formData.append(
            'titleOverview',
            descritpion
        );
        formData.append(
            'skill',
            skills
        );
        let userid = JSON.parse(localStorage.getItem('user')).id
        setbuttonloading(true)

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/register/${userid}`, {
            method: 'PATCH',
            body: formData
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
    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            setSelectedImage("")
            document.getElementById("filename").innerHTML = "Please Select an image";
            document.getElementById('image-preview').src = ""
            setimageerror("Please Select Valid Image")
        }
    }
    let checkPhotoExistence = () => {
        if (selectedImage == "" || selectedImage == undefined) {
            setimageerror("Please Select Valid Image")
            return false
        } else {
            setimageerror("")
            return true
        }
    }
    let checkSkillExistence = () => {

        if (skills.length == 0) {
            setskillerror("Please Add A Work Skill")
            return false
        } else {
            setskillerror("")
            return true
        }
    }

    const [username, setusername] = useState("")
    const [selectedpart, setselectedpart] = useState("")
    const currentModal = useSelector((state) => state.profileModal.openedmodal)

    // useEffect(() => {

    //     if (JSON.parse(localStorage.getItem('user')) != null) {
    //         let userid = JSON.parse(localStorage.getItem('user')).id
    //         fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userid}`).then(res => res.json()).then(result => {

    //         }).catch((error) => { });
    //     } else {
    //         setloading(false)
    //     }
    // }, [])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user')) == null) {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
        } else {
            let userid = JSON.parse(localStorage.getItem('user')).id
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userid}`).then(res => res.json()).then(result => {
                if (result.profilePhoto == undefined || result.profilePhoto == "") {
                    setloading(false)
                    setusername(`${result.firstName} ${result.lastName} `)
                } else {
                    window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/`

                }
            }).catch((error) => { });
        }
    }, [])



    if (loading) {
        return (
            <Loading />)
    }
    return (
        <FadeIn>
            <main>
                {currentModal == "addportifoliosuccess" ? <AddPortifolioSuccessModal />
                    : currentModal == "error" ? <ErrorModal />
                        : <></>}

                <div className="" style={{ marginBottom: "50px" }}>
                    <div className="extra-detail-container">
                        <div className="extra-detail-card extra-detail-identity-container-parent  d-lg-block">

                        </div>
                        <div className="extra-detail-personal-description-container-parent row" >
                            <div className=" col-lg-4">
                                <div className="extra-detail-sidebar-container">
                                    {source == "1" ? <div className="extra-detail-edit-extra-detail">
                                        <div>
                                            Personal Detail
                                        </div>
                                        <button className={selectedpart == "personalDetail" || selectedpart == "profileImage" || selectedpart == "title" || selectedpart == "skills" ? "selected" : ""}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </button>
                                    </div> : <></>}

                                    <div className="extra-detail-edit-extra-detail">
                                        <div>
                                            Profile Image
                                        </div>
                                        <button className={selectedpart == "profileImage" || selectedpart == "title" || selectedpart == "skills" ? "selected" : ""}>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </button>
                                    </div>
                                    <div className="extra-detail-edit-extra-detail">
                                        <div>
                                            Title And Description
                                        </div>
                                        <button className={selectedpart == "title" || selectedpart == "skills" ? "selected" : ""} >
                                            <FontAwesomeIcon icon={faCheck} />

                                        </button>
                                    </div>
                                    <div className="extra-detail-edit-extra-detail">
                                        <div>
                                            Skills
                                        </div>
                                        <button className={selectedpart == "skills" ? "selected" : ""}>
                                            <FontAwesomeIcon icon={faCheck} />

                                        </button>
                                    </div>
                                    {/* <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div> */}

                                </div>
                            </div>

                            {selectedpart == "" ? <div className=" extra-detail-personal-description-container col min-width-0">
                                <div className="extra-detail-intro-description">
                                    <div className=" extra-detail-intro-title row">
                                        <div className="col">
                                            <h2>Hello there <span style={{ color: "#6787FE" }} >{username}</span></h2>
                                        </div>

                                    </div>
                                    <div className="row extra-detail-intro-details">
                                        <div className="extra-detail-intro-details-child extra-detail-intro-subititle">
                                            Ready for your next big opportunity
                                        </div>
                                        <div className="extra-detail-intro-details-child ">
                                            Please fill out this form it only takes about 5 minutes

                                            It only takes 5 minutes
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="extra-detail-buttons ">
                                            {/* <button onClick={() => { window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/profile` }} className="see-public">Close </button> */}
                                            {source == "1" ?
                                                <button onClick={(event) => { event.preventDefault(); setselectedpart("personalDetail") }} className="setting">Get Started</button>
                                                : <button onClick={(event) => { event.preventDefault(); setselectedpart("profileImage") }} className="setting">Get Started</button>}
                                        </div>
                                    </div>
                                </div>
                            </div> : selectedpart == "personalDetail" ?
                                <Formik
                                    initialValues={{
                                        formtitle: title
                                        ,
                                        formdescription: descritpion,
                                        formuserName: userName,
                                        formcountry: country,
                                        formstate: state
                                    }}
                                    validateOnBlur={false}
                                    validationSchema={personalDetailSchema}
                                    onSubmit={async (values, { setSubmitting }, formik) => {
                                        setSubmitting(false);
                                        setuserName(values.formuserName);
                                        setcountry(values.formcountry);
                                        setstate(values.formstate);
                                        setselectedpart("profileImage")
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleSubmit,
                                        handleBlur,
                                        setFieldValue

                                        /* and other goodies */
                                    }) => (
                                        <form className='col'>
                                            <div className=" extra-detail-personal-description-container col min-width-0">
                                                <div className="extra-detail-personal-description">
                                                    <div className=" extra-detail-personal-description-title row">
                                                        <div className="col">
                                                            <h2>Add Title And Description</h2>
                                                        </div>

                                                    </div>
                                                    <div className="row extra-detail-personal-description-details">


                                                        <div className="col-12 extra-detail-input-parent-container">
                                                            <div className="extra-detail-label">
                                                                UserName
                                                            </div>
                                                            <div className='extra-detail-label-input-container' >
                                                                <input type="text" onChange={handleChange}

                                                                    value={values.formuserName} name='formuserName' placeholder='User Name' className="" />
                                                            </div>
                                                            <div className='input-error-display'  >{errors.formuserName && touched.formuserName && errors.formuserName}</div>
                                                        </div>
                                                        <div className="col-12 extra-detail-input-parent-container">
                                                            <div className="extra-detail-label">
                                                                Country
                                                            </div>
                                                            <div className='extra-detail-label-input-container' >
                                                                <CountryDropdown
                                                                    onChange={(val) => { setFieldValue("formcountry", val) }}

                                                                    value={values.formcountry} /></div>
                                                            <div className='input-error-display' >{errors.formcountry && touched.formcountry && errors.formcountry}</div>
                                                        </div>
                                                        <div className="col-12 extra-detail-input-parent-container">
                                                            <div className="extra-detail-label">
                                                                State
                                                            </div>
                                                            <div className='extra-detail-label-input-container' >
                                                                <input type="text" onChange={handleChange}

                                                                    value={values.formstate} name='formstate' placeholder='State' className="" /></div>
                                                            <div className='input-error-display'>{errors.formstate && touched.formstate && errors.formstate}</div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="extra-detail-buttons ">
                                                            <button type='button' onClick={(event) => { event.preventDefault(); setselectedpart("") }} className="see-public">Back </button>
                                                            <button type='button' onClick={(event) => { event.preventDefault(); handleSubmit(event) }} className="setting">Next</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></form>
                                    )}
                                </Formik> : selectedpart == "profileImage" ?

                                    <div className=" extra-detail-personal-description-container col min-width-0">
                                        <div className="extra-detail-personal-description">
                                            <div className=" extra-detail-personal-description-title row">
                                                <div className="col">
                                                    <h2>Add Portifolio Image</h2>
                                                </div>

                                            </div>
                                            <div className="row extra-detail-personal-description-details">
                                                <div className="col-12 extra-detail-input-parent-container">
                                                    <div className="extra-detail-label">
                                                        Profile Image
                                                    </div>
                                                    <div className="extra-detail-modal-image-container">
                                                        <div className="image-upload">
                                                            <input type="file" name="" id="logo"
                                                                onChange={(value) => {
                                                                    fileValue(value.target);
                                                                    setImagePath(value);
                                                                }}
                                                            />
                                                            <label htmlFor="logo" className="upload-field" id="file-label">
                                                                <div className="file-thumbnail">
                                                                    <img id="image-preview" src={selectedImage == "" ? "https://www.btklsby.go.id/images/placeholder/basic.png" : window.URL.createObjectURL(selectedImage)} alt="" />
                                                                    <h3 id="filename">
                                                                        Click or Drag and Drop Image on the Space Provided
                                                                    </h3>
                                                                    <p >Supports JPG, PNG, SVG</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='input-error-display extra-detail-error-profile-photo' style={{ marginLeft: "40px" }} >{imageerror}</div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="extra-detail-buttons ">
                                                    {source == "1" ?
                                                        <button onClick={(event) => { event.preventDefault(); setselectedpart("personalDetail") }} className="see-public">Back </button> :
                                                        <button onClick={(event) => { event.preventDefault(); setselectedpart("") }} className="see-public">Back </button>}
                                                    <button type='button' onClick={(event) => { event.preventDefault(); checkPhotoExistence() ? setselectedpart("title") : () => { } }} className="setting">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    : selectedpart == "title" ?
                                        <Formik
                                            initialValues={{
                                                formtitle: title
                                                ,
                                                formdescription: descritpion
                                            }}
                                            validateOnBlur={false}
                                            validationSchema={titleSchema}
                                            onSubmit={async (values, { setSubmitting }, formik) => {
                                                setSubmitting(false);
                                                setdescritpion(values.formdescription)
                                                settitle(values.formtitle);
                                                setselectedpart("skills")
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
                                                    <div className=" extra-detail-personal-description-container col min-width-0">
                                                        <div className="extra-detail-personal-description">
                                                            <div className=" extra-detail-personal-description-title row">
                                                                <div className="col">
                                                                    <h2>Add Title And Description</h2>
                                                                </div>

                                                            </div>
                                                            <div className="row extra-detail-personal-description-details">

                                                                <div className="col-12 extra-detail-input-parent-container">
                                                                    <div className="extra-detail-label">
                                                                        Work Title
                                                                    </div>
                                                                    <div className="extra-detail-label-input-container">
                                                                        <input
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.formtitle} name='formtitle' placeholder='Work Title' type="text" />
                                                                    </div>
                                                                    <div className='input-error-display' >{errors.formtitle && touched.formtitle && errors.formtitle}</div>

                                                                </div>
                                                                <div className="col-12 extra-detail-input-parent-container">
                                                                    <div className="extra-detail-label">
                                                                        Work Description
                                                                    </div>
                                                                    <div className="extra-detail-label-input-container">
                                                                        <textarea placeholder='Work Description' style={{ marginBottom: "0px" }} value={values.formdescription} onChange={(data) => { handleChange(data) }} name="formdescription" ></textarea>
                                                                        <div className='input-error-display' >{errors.formdescription && touched.formdescription && errors.formdescription}</div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="extra-detail-buttons ">
                                                                    <button type='button' onClick={(event) => { event.preventDefault(); setselectedpart("profileImage") }} className="see-public">Back </button>
                                                                    <button type='button' onClick={(event) => { event.preventDefault(); handleSubmit(event) }} className="setting">Next</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></form>
                                            )}
                                        </Formik>
                                        : selectedpart == "skills" ?
                                            <div className=" extra-detail-personal-description-container col min-width-0">
                                                <div className="extra-detail-personal-description">
                                                    <div className=" extra-detail-personal-description-title row">
                                                        <div className="col">
                                                            <h2>Add Skills</h2>
                                                        </div>

                                                    </div>
                                                    <div className="col-12 add-portifolio-input-parent-container">
                                                        <div className="add-portifolio-label">
                                                            Work Skills
                                                        </div>

                                                        <div className="edit-portifolio-skills ">

                                                            <div className="skill-list">
                                                                {
                                                                    skills.map((element) => {
                                                                        return (<div className="skills">
                                                                            {element}
                                                                            <button onClick={(event) => {
                                                                                event.preventDefault();
                                                                                let newskilllist = skills.filter((childelement) => {
                                                                                    if (childelement != element) {
                                                                                        return childelement
                                                                                    }
                                                                                })
                                                                                setskills(newskilllist)
                                                                            }} type="button" className="skill-list-modal-close" >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>)
                                                                    })
                                                                }
                                                            </div>
                                                            <div className="edit-portifolio-label-input-container ">
                                                                <div style={{ display: "flex" }}>

                                                                    <input value={newskills} onChange={(data) => { setnewskills(data.target.value) }} placeholder="Enter skills individually and press +" type="text" className='col edit-portifolio-input' />
                                                                    <div className="col col-auto">
                                                                        <button onClick={(event) => { event.preventDefault(); setskills([...skills, newskills]); setnewskills("") }} className="profile-edit-btn">
                                                                            <FontAwesomeIcon icon={faPlus} />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='input-error-display extra-detail-error-profile-photo' >{skillerror}</div>
                                                            <div className="row">
                                                                <div className="extra-detail-buttons ">
                                                                    <button onClick={(event) => { event.preventDefault(); setselectedpart("title") }} className="see-public">Back </button>
                                                                    {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                        Loading...
                                                                    </button> : <button onClick={() => { checkSkillExistence() ? handleSubmit() : () => { } }} className="setting">Finish</button>}

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            : <></>}

                            {/* {selectedpart == "" ? <div className=" extra-detail-personal-description-container col min-width-0">
                            <div className="extra-detail-intro-description">
                                <div className=" extra-detail-intro-title row">
                                    <div className="col">
                                        <h2>Hello there {username}</h2>
                                    </div>

                                </div>
                                <div className="row extra-detail-intro-details">
                                    <div className="extra-detail-intro-details-child extra-detail-intro-subititle">
                                        Ready for your next big opportunity
                                    </div>
                                    <div className="extra-detail-intro-details-child ">
                                        Please fill out this form it only takes about 5 minutes

                                        It only takes 5 minutes
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="extra-detail-buttons ">
                                        <button onClick={() => { window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/profile" }} className="see-public">Close </button>
                                        <button onClick={() => { setselectedpart("profileImage") }} className="setting">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div> : selectedpart == "profileImage" ?
                            <div className=" extra-detail-personal-description-container col min-width-0">
                                <div className="extra-detail-personal-description">
                                    <div className=" extra-detail-personal-description-title row">
                                        <div className="col">
                                            <h2>Add Portifolio Image</h2>
                                        </div>

                                    </div>
                                    <div className="row extra-detail-personal-description-details">
                                        <div className="col-12 extra-detail-input-parent-container">
                                            <div className="extra-detail-label">
                                                Profile Image
                                            </div>
                                            <div className="extra-detail-modal-image-container">
                                                <div className="image-upload">
                                                    <input type="file" name="" id="logo" onChange={(value) => {
                                                        fileValue(value.target);
                                                        setImagePath(value);
                                                    }} />
                                                    <label htmlFor="logo" className="upload-field" id="file-label">
                                                        <div className="file-thumbnail">
                                                            <img id="image-preview" src="https://www.btklsby.go.id/images/placeholder/basic.png" alt="" />
                                                            <h3 id="filename">
                                                                Click or Drag and Drop Image on the Space Provided
                                                            </h3>
                                                            <p >Supports JPG, PNG, SVG</p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="extra-detail-buttons ">
                                            <button className="see-public">Close </button>
                                            <button onClick={() => { setselectedpart("title") }} className="setting">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : selectedpart == "title" ?
                                <div className=" extra-detail-personal-description-container col min-width-0">
                                    <div className="extra-detail-personal-description">
                                        <div className=" extra-detail-personal-description-title row">
                                            <div className="col">
                                                <h2>Add Title And Description</h2>
                                            </div>

                                        </div>
                                        <div className="row extra-detail-personal-description-details">

                                            <div className="col-12 extra-detail-input-parent-container">
                                                <div className="extra-detail-label">
                                                    Work Title
                                                </div>
                                                <div className="extra-detail-label-input-container">
                                                    <input onChange={(data) => { settitle(data.target.value) }} type="text" />
                                                </div>

                                            </div>
                                            <div className="col-12 extra-detail-input-parent-container">
                                                <div className="extra-detail-label">
                                                    Work Description
                                                </div>
                                                <div className="extra-detail-label-input-container">
                                                    <textarea onChange={(data) => { settitle(data.target.value) }}  ></textarea>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="extra-detail-buttons ">
                                                <button onClick={() => { setselectedpart("profileImage") }} className="see-public">Back </button>
                                                <button onClick={() => { setselectedpart("skills") }} className="setting">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> : selectedpart == "skills" ?
                                    <div className=" extra-detail-personal-description-container col min-width-0">
                                        <div className="extra-detail-personal-description">
                                            <div className=" extra-detail-personal-description-title row">
                                                <div className="col">
                                                    <h2>Add Skills</h2>
                                                </div>

                                            </div>
                                            <div className="col-12 add-portifolio-input-parent-container">
                                                <div className="add-portifolio-label">
                                                    Work Skills
                                                </div>

                                                <div className="edit-portifolio-skills col">

                                                    <div className="skill-list">
                                                        {
                                                            skills.map((element) => {
                                                                return (<div className="skills">
                                                                    {element}
                                                                    <button onClick={(data) => {
                                                                        let newskilllist = skills.filter((childelement) => {
                                                                            if (childelement != element) {
                                                                                return childelement
                                                                            }
                                                                        })
                                                                        setskills(newskilllist)
                                                                    }} type="button" className="skill-list-modal-close" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>)
                                                            })
                                                        }
                                                    </div>
                                                    <div className="edit-portifolio-label-input-container col-12">
                                                        <div style={{ display: "flex" }}>

                                                            <input onChange={(data) => { setnewskills(data.target.value) }} placeholder="Enter skills individually and press +" type="text" className='col edit-portifolio-input' />
                                                            <div className="col col-auto">
                                                                <button onClick={() => { setskills([...skills, newskills]) }} className="profile-edit-btn">
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="extra-detail-buttons ">
                                                            <button onClick={() => { setselectedpart("title") }} className="see-public">Back </button>
                                                            <button className="setting">Finish</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : <></>} */}


                        </div>
                    </div>

                </div>
            </main>
        </FadeIn>
    )
}

export default ExtraDetail