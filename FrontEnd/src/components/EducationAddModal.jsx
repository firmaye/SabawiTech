import React from 'react'
import { useState } from 'react'
import "../css/educationaddmodal.css"
const EducationModal = () => {

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEducationModal = () => {
        setmodalstyle({
            display: "none"
        })
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Education</h5>
                        <button onClick={closeEducationModal} type="button" className="education-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="education-modal-page-wrapper ">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h2 class="education-modal-education"></h2>
                                        <form method="">
                                            <div class="education-modal-input-group">
                                                <input class="" type="text" placeholder="School Name" name="" />
                                            </div>
                                            <div className="education-modal-location-container">

                                                <div class="education-modal-input-group">
                                                    <input class="" type="text" placeholder="Attended From" name="" />
                                                </div>
                                                <div class="education-modal-input-group">
                                                    <input class="" type="text" placeholder="Attended To" name="" />
                                                </div>
                                            </div>
                                            <div class="education-modal-input-group">
                                                <input class="" type="text" placeholder="Area of Study" name="" />
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeEducationModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationModal