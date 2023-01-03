import React from 'react'
import { useState } from 'react'
import "../css/titlemodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import SuccessModal from './SuccessModal';

const TitleModal = ({ profileinfo }) => {
    const dispatch = useDispatch()
    const [title, settitle] = useState(profileinfo.title)
    const [description, setdescription] = useState(profileinfo.description)
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    let successModal = () => {
        dispatch(setModal("success"))
        setmodalstyle({
            display: "none"
        })
    }
    let closeTitleModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    let handleSubmit = (event) => {
        let body = {
            title: title,
            titleOverview: description
        }
        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
        fetch('http://localhost:8080/api/users/descriptionInfo/63b13cfd127ade2c12562493', {
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
                console.log(error)
                console.error('Error:', error);
            });
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Title</h5>
                        <button onClick={closeTitleModal} type="button" className="title-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="title-modal-page-wrapper ">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h2 class="title-modal-title"></h2>
                                        <form method="">
                                            <div class="title-modal-input-group">
                                                <input value={title} onChange={(event) => { settitle(event.target.value) }} class="" type="text" placeholder="Title Name" name="" />
                                            </div>
                                            <div class="row ">
                                                <div class="col-12 title-modal-col-12">
                                                    <div class="title-modal-description-input">
                                                        <textarea value={description} onChange={(event) => { setdescription(event.target.value) }} class="" type="text" placeholder="Description" name="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeTitleModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleModal