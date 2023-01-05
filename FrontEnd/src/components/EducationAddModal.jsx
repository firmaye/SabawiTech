import React from 'react'
import { useState } from 'react'
import "../css/educationaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EducationModal = () => {
    const dispatch = useDispatch()
    const [schoolname, setschoolname] = useState("")
    const [areaofstudy, setareaofstudy] = useState("")
    const [attendedfrom, setattendedfrom] = useState(new Date())
    const [attendedto, setattendedto] = useState(new Date())
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEducationModal = () => {
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
            schoolName: schoolname,
            dateAttendedFrom: attendedfrom,
            dateAttendedTo: attendedto,
            areaOfStudy: areaofstudy
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
        let userid = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:8080/api/users/education/${userid}`, {
            method: 'POST',
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
                                                <input onChange={(event) => { setschoolname(event.target.value) }} class="" type="text" placeholder="School Name" name="" />
                                            </div>
                                            <div className="education-modal-location-container">

                                                <div class="education-modal-input-group">
                                                    <label>Attended From</label>
                                                    <DatePicker selected={attendedfrom} onChange={(date) => setattendedfrom(date)} />
                                                </div>
                                                <div class="education-modal-input-group">
                                                    <label>Attended To</label>
                                                    <DatePicker selected={attendedto} onChange={(date) => setattendedto(date)} />                                                </div>
                                            </div>
                                            <div class="education-modal-input-group">
                                                <input onChange={(event) => { setareaofstudy(event.target.value) }} class="" type="text" placeholder="Area of Study" name="" />
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeEducationModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationModal