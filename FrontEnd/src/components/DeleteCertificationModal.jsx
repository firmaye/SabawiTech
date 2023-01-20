import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/deletemodal.css"
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/profilemodal';

const DeleteCertificationModal = ({ tobedeleted }) => {
    console.log(tobedeleted)
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [buttonloading, setbuttonloading] = useState(false)

    let closeDeleteCertificationModal = () => {
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
        event.preventDefault()
        let userid = JSON.parse(localStorage.getItem('user')).id
        setbuttonloading(true)

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/certification/${userid}/${tobedeleted._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
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
        <form>

            <div style={modalstyle} id="deleteModal" className="modal ">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <i className="fa fa-trash"></i>
                            </div>
                            <h4 className="modal-title w-100">Delete</h4>
                            <button onClick={closeDeleteCertificationModal} type="button" className="delete-portifolio-modal-close" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>                        </button>                    </div>
                        <div className="modal-body">
                            <p>Are Your Sure You Want To Delete This</p>
                        </div>
                        <div className="modal-footer justify-content-center">

                            <button onClick={closeDeleteCertificationModal} type="submit" className="btn btn-danger ">NO</button>
                            {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button> : <button onClick={handleSubmit} type="submit" className="btn btn-danger modal-yes-btn">YES</button>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DeleteCertificationModal