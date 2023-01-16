import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import "./css/extradetail.css"
import ProfileImg from "./assets/profile.jpg"
import { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import AddPortifolioSuccessModal from './components/AddPortifolioSuccessModal'
import ErrorModal from './components/ErrorModal'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from './redux/profilemodal'

const ExtraDetail = () => {
    if (JSON.parse(localStorage.getItem('user')) == null) {
        window.location.href = "http://localhost:8081/signin"
    }
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
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState("")
    const [selectedImage, setSelectedImage] = useState("");
    const [title, settitle] = useState("");
    const [descritpion, setdescritpion] = useState("");
    const [imageerror, setimageerror] = useState("")
    const [skillerror, setskillerror] = useState("")
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
        // console.log(file)
        // console.log({ profilePhoto: selectedImage })
        // let body = JSON.stringify({ profilePhoto: selectedImage })
        // console.log(body)
        // event.preventDefault()
        let userid = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:8080/api/users/register/${userid}`, {
            method: 'PATCH',
            body: formData
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
    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        console.log(value.files[0])
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            setSelectedImage("")
            document.getElementById("filename").innerHTML = "Please Select an image";
            document.getElementById('image-preview').src = ""
            console.log("File not supported. Kindly Upload the Image of below given extension ")
        }
    }
    let checkPhotoExistence = () => {
        console.log(selectedImage)
        if (selectedImage == "" || selectedImage == undefined) {
            setimageerror("Please Select Valid Image")
            return false
        } else {
            setimageerror("")
            return true
        }
    }
    let checkSkillExistence = () => {

        console.log(skills.length)
        if (skills.length == 0) {
            setskillerror("Please Add A Work Skill")
            console.log(skillerror)
            return false
        } else {
            setskillerror("")
            console.log(skillerror)
            return true
        }
    }
    let userid = JSON.parse(localStorage.getItem('user')).id

    const [username, setusername] = useState("")
    useEffect(() => {
        fetch(`http://localhost:8080/api/users/${userid}`).then(res => res.json()).then(result => {
            console.log(result)
            setusername(`${result.firstName} ${result.lastName} `)
        }).catch((error) => { console.log(error) });
    }, [])
    const [selectedpart, setselectedpart] = useState("")
    console.log(selectedpart)
    const currentModal = useSelector((state) => state.profileModal.openedmodal)

    return (
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
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Profile Image
                                    </div>
                                    <button className={selectedpart == "profileImage" || selectedpart == "title" || selectedpart == "skills" ? "selected" : ""}>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Title And Description
                                    </div>
                                    <button className={selectedpart == "title" || selectedpart == "skills" ? "selected" : ""} >
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Skills
                                    </div>
                                    <button className={selectedpart == "skills" ? "selected" : ""}>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                {/* <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="extra-detail-edit-extra-detail">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

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
                                        <button onClick={() => { window.location.href = "http://localhost:8081/profile" }} className="see-public">Close </button>
                                        <button onClick={(event) => { event.preventDefault(); setselectedpart("profileImage") }} className="setting">Get Started</button>
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
                                                                Drag and Drop
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
                                            <button className="see-public">Close </button>
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
                                        console.log(values)
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
                                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='input-error-display extra-detail-error-profile-photo' >{skillerror}</div>
                                                    <div className="row">
                                                        <div className="extra-detail-buttons ">
                                                            <button onClick={(event) => { event.preventDefault(); setselectedpart("title") }} className="see-public">Back </button>
                                                            <button onClick={() => { checkSkillExistence() ? handleSubmit() : () => { } }} className="setting">Finish</button>
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
                                        <button onClick={() => { window.location.href = "http://localhost:8081/profile" }} className="see-public">Close </button>
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
                                                                Drag and Drop
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
                                                                    <i className="fa fa-plus" aria-hidden="true"></i>
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
    )
}

export default ExtraDetail