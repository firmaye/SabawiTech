import React, { useEffect } from 'react'
import "./css/editportifolio.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Loading from './components/Loading'
import AddPortifolioSuccessModal from './components/AddPortifolioSuccessModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ErrorModal from './components/ErrorModal'
import { setModal } from './redux/profilemodal'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'

const EditPortifolio = () => {
    const params = useParams()
    const paramsid = params.id
    const [buttonloading, setbuttonloading] = useState(false)
    const [previouswork, setpreviouswork] = useState([])
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState("")
    const [workTitle, setworkTitle] = useState("")
    const [workThumbnail, setworkThumbnail] = useState()
    const [workPlaceholder, setworkPlaceholder] = useState()
    const [errorworkTitle, seterrorworkTitle] = useState("")
    const [errorworkThumbnail, seterrorworkThumbnail] = useState()
    const [workLink, setworkLink] = useState()
    const dispatch = useDispatch()
    const [skillerror, setskillerror] = useState("")

    const [loading, setloading] = useState(true)
    let successModal = () => {
        dispatch(setModal("addportifoliosuccess"))

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
    const blobUrlToFile = (blobUrl) => new Promise((resolve) => {
        fetch(blobUrl + "?not-from-cache-please", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => {

            res.blob().then((blob) => {
                // please change the file.extension with something more meaningful
                // or create a utility function to parse from URL
                const file = new File([blob], '.png', { type: blob.type })
                resolve(file)
            }).catch((error) => {
            })
        })
    })
    let handleSubmit = async () => {
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
        if (workTitle != "" && checkPhotoExistence() && checkSkillExistence()
        ) {
            setbuttonloading(true)

            let image = await blobUrlToFile(workPlaceholder)
            const formData = new FormData();
            // Update the formData object
            formData.append(
                'workThumbnail',
                image
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
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/previousWork/${userid}/${paramsid}`, {
                method: 'PATCH',

                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    successModal()
                })
                .catch((error) => {
                    // errorModal()
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
            setworkPlaceholder(window.URL.createObjectURL(value.files[0]))
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            seterrorworkThumbnail("")
            document.getElementById("filename").innerHTML = "Please Select an image";
            document.getElementById('image-preview').src = ""
            // alert("File Not Selected Or Selected Format Not Supported")
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
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
        }
        let userid = JSON.parse(sessionStorage.getItem('user')).id
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/previousWork/${userid}`).then(res => res.json()).then(result => {
            const found = result.previousWork.find(element => element._id == paramsid);
            let skillsString = found.workSkill[0].split(",")
            setskills(skillsString)
            setworkTitle(found.workTitle)
            setworkThumbnail(found.workThumbnail)
            setworkPlaceholder(`${import.meta.env.VITE_BACKEND_URL}/uploads/images/` + found.workThumbnail)
            setworkLink(found.workLink)
            setpreviouswork(found)
            setloading(false)

        }).catch((error) => { });
    }, [])
    if (loading) {
        return (
            <Loading />)
    }

    return (

        <FadeIn>
            <main>
                <Navbar />
                <Header title={"Edit Portifolio"} />
                {currentModal == "addportifoliosuccess" ? <AddPortifolioSuccessModal />
                    : currentModal == "error" ? <ErrorModal />
                        : <></>}

                <div className="">
                    <div className="edit-portifolio-container">
                        <div className="edit-portifolio-card edit-portifolio-identity-container-parent  d-lg-block">

                        </div>
                        <div className="edit-portifolio-personal-description-container-parent row" >
                            <div className=" col-lg-4">
                                <div className="edit-portifolio-sidebar-container">
                                    <div className="edit-portifolio-edit-add-portifolio">
                                        <div>
                                            Edit Project
                                        </div>
                                        <button>
                                            <FontAwesomeIcon icon={faPencil} />

                                        </button>
                                    </div>
                                    {/* <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faPencil} />


                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faPencil} />


                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <FontAwesomeIcon icon={faPencil} />


                                    </button>
                                </div> */}

                                </div>
                            </div>
                            <div className=" edit-portifolio-personal-description-container col min-width-0">
                                <div className="edit-portifolio-personal-description">
                                    <div className=" edit-portifolio-personal-description-title row">
                                        <div className="col">
                                            <h2>Edit Portifolio Project</h2>
                                        </div>

                                    </div>
                                    <div className="row edit-portifolio-personal-description-details">
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Image
                                            </div>
                                            <div className="edit-portifolio-modal-image-container">
                                                <div className="image-upload">
                                                    <input type="file" name="" id="logo" onChange={(value) => { fileValue(value.target) }} />
                                                    <label htmlFor="logo" className="upload-field" id="file-label">
                                                        <div className="file-thumbnail">
                                                            <img id="image-preview" src={workPlaceholder} alt="" />
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
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Title
                                            </div>
                                            <div className="edit-portifolio-label-input-container">
                                                <input onChange={(data) => { setworkTitle(data.target.value) }} value={workTitle} type="text" />
                                            </div>
                                            <div className='input-error-display' style={{ position: "absolute" }} >{errorworkTitle}</div>

                                        </div>
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Link (Optional)
                                            </div>
                                            <div className="edit-portifolio-label-input-container">
                                                <input onChange={(data) => { setworkLink(data.target.value) }} value={workLink} type="text" />
                                            </div>

                                        </div>
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Skill
                                            </div>
                                            <div className="edit-portifolio-skills">

                                                <div className="skill-list mt-2">
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
                                            </div>
                                            <div className="edit-portifolio-label-input-container ml-1 mt-2 row">
                                                <input value={newskills} onChange={(data) => { setnewskills(data.target.value) }} type="text" className='col edit-portifolio-input' />
                                                <div className="col col-auto">
                                                    <button onClick={() => { if (newskills != "") { setskills([...skills, newskills]); setnewskills("") } }} className="profile-edit-btn">
                                                        <FontAwesomeIcon icon={faPlus} size="2x" />

                                                    </button>
                                                </div>
                                                <div className='input-error-display extra-detail-error-profile-photo' >{skillerror}</div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="edit-portifolio-buttons ">
                                            <button onClick={() => {
                                                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/profile`;
                                            }} className="see-public">Close </button>
                                            {buttonloading ? <button className="btn btn-primary loading" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </button> : <button onClick={handleSubmit} className="setting">Edit</button>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </FadeIn>
    )
}

export default EditPortifolio