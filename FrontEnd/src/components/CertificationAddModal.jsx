import React from 'react'
import { useState } from 'react'
import "../css/certificationaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import DatePicker from "react-datepicker";

const CertificationModal = () => {
    const dispatch = useDispatch()
    const [dateissued, setdateissued] = useState(new Date())

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeCertificationModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Certificate</h5>
                        <button onClick={closeCertificationModal} type="button" className="certification-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="certification-modal-page-wrapper ">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h2 class="certification-modal-certification"></h2>
                                        <form method="">
                                            <div class="certification-modal-input-group">
                                                <label>Certificate Title</label>
                                                <input class="" type="text" placeholder="Certificate Title" name="" />
                                            </div>

                                            <div class="certification-modal-input-group">
                                                <label>Certificate Provider</label>
                                                <input class="" type="text" placeholder="Certificate Provider" name="" />
                                            </div>
                                            <div class="certification-modal-input-group">
                                                <label>Certificate Link</label>
                                                <input class="" type="text" placeholder="Certificate Link" name="" />
                                            </div>
                                            <div class="certification-modal-period-container">

                                                <div class="certification-modal-input-group">
                                                    <label>Date Issued</label>
                                                    <DatePicker selected={dateissued} onChange={(date) => setdateissued(date)} />
                                                </div>
                                            </div>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeCertificationModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificationModal