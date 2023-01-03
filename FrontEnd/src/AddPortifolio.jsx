import React from 'react'
import Sidebar from './components/Sidebar'
import "./css/addportifolio.css"
import ProfileImg from "./assets/profile.jpg"
import { useState } from 'react'
import AddPortifolioSuccessModal from './components/AddPortifolioSuccessModal'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from './redux/profilemodal'

const AddPortifolio = () => {
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState("")
    const [newportifolio, setnewportifolio] = useState("")
    const [workTitle, setworkTitle] = useState("")
    const [workThumbnail, setworkThumbnail] = useState()
    const [workLink, setworkLink] = useState()
    const dispatch = useDispatch()
    let successModal = () => {
        dispatch(setModal("addportifoliosuccess"))
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

        console.log(workThumbnail)
        const formData = new FormData();
        // Update the formData object
        formData.append(
            'profilePhoto',
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
        fetch('http://localhost:8080/api/users/previousWork/63b13cfd127ade2c12562493', {
            method: 'POST',

            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // successModal()
            })
            .catch((error) => {
                // errorModal()
                console.log(error)
                console.error('Error:', error);
            });
    }
    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        console.log(value.files[0])
        setworkThumbnail(value.files[0])
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            alert("File not supported. Kindly Upload the Image of below given extension ")
        }
    }
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    return (
        <main>
            {currentModal == "addportifoliosuccess" ? <AddPortifolioSuccessModal />
                : currentModal == "error" ? <ErrorModal />
                    : <></>}
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
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                {/* <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

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
                                                            Drag and Drop
                                                        </h3>
                                                        <p >Supports JPG, PNG, SVG</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Title
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input onChange={(data) => { setworkTitle(data.target.value) }} type="text" />
                                        </div>

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Link
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input onChange={(data) => { setworkLink(data.target.value) }} type="text" />
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="add-portifolio-buttons ">
                                        <button className="see-public">Close </button>
                                        <button onClick={handleSubmit} className="setting">Add</button>
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