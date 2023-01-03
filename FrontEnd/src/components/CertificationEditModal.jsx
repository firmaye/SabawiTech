import React from 'react'
import { useState } from 'react'
import "../css/certificationeditmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import DatePicker from 'react-datepicker'
const CertificationEditModal = ({ selected }) => {
    const dispatch = useDispatch()
    console.log(selected)
    const [dateissued, setdateissued] = useState(new Date(selected.dateIssued))
    const [certificatetitle, setcertificatetitle] = useState(selected.certTitle)
    const [certificateprovider, setcertificateprovider] = useState(selected.certProvider)
    const [certificatelink, setcertificatelink] = useState(selected.certLink)
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeCertificationEditModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    let successModal = () => {
        dispatch(setModal("success"))
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
        let body = {
            certTitle: certificatetitle,
            certProvider: certificateprovider,
            certLink: certificatelink,
            dateIssued: dateissued
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
        // console.log(`http://localhost:8080/api/users/certification/63b13cfd127ade2c12562493/${selected._id}`)
        fetch(`http://localhost:8080/api/users/certification/63b13cfd127ade2c12562493/${selected._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
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
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Certificate</h5>
                        <button onClick={closeCertificationEditModal} type="button" className="certification-modal-close" >
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
                                                <input onChange={(data) => { setcertificatetitle(data.target.value) }} value={certificatetitle} class="" type="text" placeholder="Certificate Title" name="" />
                                            </div>

                                            <div class="certification-modal-input-group">
                                                <label>Certificate Provider</label>
                                                <input onChange={(data) => { setcertificateprovider(data.target.value) }} value={certificateprovider} class="" type="text" placeholder="Certificate Provider" name="" />
                                            </div>
                                            <div class="certification-modal-input-group">
                                                <label>Certificate Link</label>
                                                <input onChange={(data) => { setcertificatelink(data.target.value) }} value={certificatelink} class="" type="text" placeholder="Certificate Link" name="" />
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
                        <button type="button" onClick={closeCertificationEditModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificationEditModal