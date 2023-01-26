import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../css/successmodal.css"
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { redirect } from 'react-router-dom';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const NotAllowed = () => {
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    let closeNotAllowed = () => {
        dispatch(setModal(""))
    }
    return (
        <form>

            <div style={modalstyle} id="successModal" className="modal ">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faExclamation} />
                            </div>
                            <h4 className="modal-title w-100">Please Signin or Signup to view details</h4>
                            <button onClick={closeNotAllowed} type="button" className="delete-portifolio-modal-close" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>                        </button>                    </div>
                        <div className="modal-body">
                            {/* <p>Operation Done Successfully.</p> */}
                        </div>
                        <div className="modal-footer justify-content-center">

                            <button onClick={closeNotAllowed} type="submit" className="btn btn-danger">Back</button>
                            <button onClick={(event) => {
                                event.preventDefault()
                                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
                            }} type="submit" className="btn btn-danger">SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NotAllowed