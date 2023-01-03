import React from 'react'
import Sidebar from './components/Sidebar'
import "./css/extradetail.css"
import ProfileImg from "./assets/profile.jpg"
import { useState } from 'react'

const ExtraDetail = () => {
    const [skills, setskills] = useState([])
    const [newskills, setnewskills] = useState("")
    const [newportifolio, setnewportifolio] = useState({
        workTitle: "",
        workThumbnail: "",
        workDescription: "",
        workLink: "",
        workSkill: "",

    })
    const [selectedpart, setselectedpart] = useState("profileImage")
    console.log(selectedpart)
    return (
        <main>

            <div className="">
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
                        {selectedpart == "profileImage" ?
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
                                                    <input type="text" />
                                                </div>

                                            </div>
                                            <div className="col-12 extra-detail-input-parent-container">
                                                <div className="extra-detail-label">
                                                    Work Description
                                                </div>
                                                <div className="extra-detail-label-input-container">
                                                    <textarea ></textarea>
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
                                    : <></>}


                    </div>
                </div>

            </div>
        </main>
    )
}

export default ExtraDetail