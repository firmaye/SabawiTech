import React from 'react'
import { useState } from 'react'
import "../css/languageaddmodal.css"
const LanguageModal = () => {

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeLanguageModal = () => {
        setmodalstyle({
            display: "none"
        })
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Language</h5>
                        <button onClick={closeLanguageModal} type="button" className="language-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="language-modal-page-wrapper ">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h2 class="language-modal-language"></h2>
                                        <form method="">

                                            <div className="language-modal-location-container">

                                                <div class="language-modal-input-group">
                                                    <input class="" type="text" placeholder="Language Name" name="" />
                                                </div>
                                                <div class="language-modal-input-group">
                                                    <input class="" type="text" placeholder="Proficiency" name="" />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeLanguageModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal