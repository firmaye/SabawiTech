import React from 'react'
import { useState } from 'react'
import "../css/skillmodal.css"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const SkillModal = () => {
    let modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    }
    const [country, setcountry] = useState("")
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeSkillModal = () => {
        setmodalstyle({
            display: "none"
        })
    }

    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Name And Location</h5>
                        <button onClick={closeSkillModal} type="button" className="skill-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="row modal-body">
                        <div class="col-12 skill-skill-list ">
                            <div className="skill-list">

                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                                <div className="skills">
                                    QA Specialist
                                </div>
                            </div>
                        </div>
                        <div class="col-12 skill-modal-input-group-container">
                            <div class="col skill-modal-input-group">
                                <input class="" type="text" placeholder="Enter New Skill" name="" />
                            </div>
                            <div className="">
                                <button className="skill-edit-btn">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeSkillModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillModal