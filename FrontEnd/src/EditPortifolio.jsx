import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import "./css/editportifolio.css"
import ProfileImg from "./assets/profile.jpg"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Loading from './components/Loading'

const EditPortifolio = () => {
    const params = useParams()
    const paramsid = params.id
    const [previouswork, setpreviouswork] = useState([])
    const [skills, setskills] = useState(["react", "node"])
    const [newskills, setnewskills] = useState("")
    const [workTitle, setworkTitle] = useState("")
    const [workThumbnail, setworkThumbnail] = useState()
    const [workLink, setworkLink] = useState()
    console.log(skills)
    const [loading, setloading] = useState(true)


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user')) == null) {
            window.location.href = "http://localhost:8081/signin"
        }
        let userid = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:8080/api/users/previousWork/${userid}`).then(res => res.json()).then(result => {
            console.log(result.previousWork)
            const found = result.previousWork.find(element => element._id == paramsid);
            console.log(found)
            let skillsString = found.workSkill[0].split(",")

            setskills(skillsString)
            setworkTitle(found.workTitle)
            setworkThumbnail(found.workThumbnail)
            setworkLink(found.workLink)
            setpreviouswork(found)
            setloading(false)

        }).catch((error) => { console.log(error) });
    }, [])
    if (loading) {
        return (
            <Loading />)
    }
    return (

        <FadeIn>
            <main>

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
                                            <i className="fa fa-check" aria-hidden="true"></i>

                                        </button>
                                    </div>
                                    {/* <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

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
                                                            <img id="image-preview" src={"http://localhost:8080/uploads/images/" + workThumbnail} alt="" />
                                                            <h3 id="filename">
                                                                Drag and Drop
                                                            </h3>
                                                            <p >Supports JPG, PNG, SVG</p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Title
                                            </div>
                                            <div className="edit-portifolio-label-input-container">
                                                <input type="text" value={workTitle} />
                                            </div>

                                        </div>
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Link
                                            </div>
                                            <div className="edit-portifolio-label-input-container">
                                                <input type="text" value={workLink} />
                                            </div>

                                        </div>
                                        <div className="col-12 edit-portifolio-input-parent-container">
                                            <div className="edit-portifolio-label">
                                                Work Skill
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
                                            </div>
                                            <div className="edit-portifolio-label-input-container row">
                                                <input onChange={(data) => { setnewskills(data.target.value) }} type="text" className='col edit-portifolio-input' />
                                                <div className="col col-auto">
                                                    <button onClick={() => { setskills([...skills, newskills]) }} className="profile-edit-btn">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="edit-portifolio-buttons ">
                                            <button className="see-public">Close </button>
                                            <button className="setting">Edit</button>
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