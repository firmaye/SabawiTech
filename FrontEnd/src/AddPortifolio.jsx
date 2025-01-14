import React from 'react'
import Sidebar from './components/Sidebar'
import "./css/addportifolio.css"
import ProfileImg from "./assets/profile.jpg"
import { useState } from 'react'
import AddPortifolioSuccessModal from './components/AddPortifolioSuccessModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import ErrorModal from './components/ErrorModal'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from './redux/profilemodal'
import Header from './components/Header'
import Navbar from './components/Navbar'

const AddPortifolio = () => {
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState([])
    const [workTitle, setworkTitle] = useState("")
    const [workThumbnail, setworkThumbnail] = useState()
    const [workLink, setworkLink] = useState("")
    const [errorworkTitle, seterrorworkTitle] = useState("")
    const [errorworkThumbnail, seterrorworkThumbnail] = useState()
    const [skillerror, setskillerror] = useState("")
    const [buttonloading, setbuttonloading] = useState(false)

    const dispatch = useDispatch()
    let successModal = () => {
        dispatch(setModal("addportifoliosuccess"))

    }
    let errorModal = () => {
        dispatch(setModal("error"))

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
    let handleSubmit = (event) => {
        checkSkillExistence()
        if (workTitle == "") {
            seterrorworkTitle("Required")
        } else {
            seterrorworkTitle("")
        }
        if (!checkPhotoExistence()) {
            seterrorworkThumbnail("Please Select A Valid Image")
        } else {
            seterrorworkThumbnail("")
        }
        if (workTitle != "" && checkPhotoExistence() && checkSkillExistence()) {
            const formData = new FormData();
            setbuttonloading(true)

            // Update the formData object
            formData.append(
                'workThumbnail',
                workThumbnail
            );
            formData.append(
                'workTitle',
                workTitle
            );
            formData.append(
                'workLink',
                workLink
            );
            formData.append(
                'workSkill',
                skills
            );
            let userid = JSON.parse(sessionStorage.getItem('user')).id
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/previousWork/${userid}`, {
                method: 'POST',

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
    }
    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        setworkThumbnail(value.files[0])
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            seterrorworkThumbnail("")
            document.getElementById("filename").innerHTML = "Please Select an image";
            document.getElementById('image-preview').src = ""
            alert("File Not Selected Or Selected Format Not Supported")
        }
    }
    let checkPhotoExistence = () => {
        if (workThumbnail == "" || workThumbnail == undefined || workThumbnail == "Please Change Image") {
            if (workThumbnail == "Please Change Image") {
                seterrorworkThumbnail("Please Change Image")
            } else {
                seterrorworkThumbnail("Please Select An Image")
            }
            return false
        } else {
            seterrorworkThumbnail("")
            return true
        }
    }
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    return (
        <main>

            {currentModal == "addportifoliosuccess" ? <AddPortifolioSuccessModal />
                : currentModal == "error" ? <ErrorModal />
                    : <></>}
            <Navbar />
            <Header title={"Add Portifolio"} />
            <div className="">
                <div className="add-portifolio-container">
                    <div className="add-portifolio-card add-portifolio-identity-container-parent  d-lg-block">

                    </div>
                    <div className="add-portifolio-personal-description-container-parent row" >
                        <div className=" col-lg-4">
                            <div className="add-portifolio-sidebar-container">
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Add Project
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div>
                                {/* <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faCheck} />

                                    </button>
                                </div> */}

                            </div>
                        </div>
                        <div className=" add-portifolio-personal-description-container col min-width-0">
                            <div className="add-portifolio-personal-description">
                                <div className=" add-portifolio-personal-description-title row">
                                    <div className="col">
                                        <h2>Add Portifolio Project</h2>
                                    </div>
                                </div>
                                <div className="row add-portifolio-personal-description-details">
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Image
                                        </div>
                                        <div className="add-portifolio-modal-image-container">
                                            <div className="image-upload">
                                                <input type="file" name="" id="logo" onChange={(value) => { fileValue(value.target) }} />
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
                                        <div className='input-error-display' style={{ position: "absolute" }} >{errorworkThumbnail}</div>


                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Title
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input onChange={(data) => { setworkTitle(data.target.value) }} type="text" />
                                        </div>
                                        <div className='input-error-display' style={{ position: "absolute" }} >{errorworkTitle}</div>

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Link (Optional)
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input onChange={(data) => { setworkLink(data.target.value) }} type="text" />
                                        </div>
                                        {/* <div className='input-error-display' style={{ position: "absolute" }} >{errorworkLink}</div> */}

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Skills
                                        </div>

                                        <div className="edit-portifolio-skills">

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
                                            <div className="edit-portifolio-label-input-container ">
                                                <div style={{ display: "flex" }}>

                                                    <input value={newskills} onChange={(data) => { setnewskills(data.target.value) }} placeholder="Enter skills individually and press +" type="text" className='col edit-portifolio-input' />
                                                    <div className="col col-auto">
                                                        <button onClick={() => { if (newskills != "") { setskills([...skills, newskills]); setnewskills("") } }} className="profile-edit-btn">
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className='input-error-display extra-detail-error-profile-photo' >{skillerror}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="add-portifolio-buttons ">
                                        <button onClick={() => {
                                            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/profile`;
                                        }} className="see-public">Close </button>
                                        {buttonloading ? <button className="btn btn-primary loading" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button> : <button onClick={handleSubmit} className="setting">Add</button>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default AddPortifolio