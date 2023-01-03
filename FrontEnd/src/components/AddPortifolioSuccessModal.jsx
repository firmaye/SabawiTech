import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/successmodal.css"
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/profilemodal';

const AddPortifolioSuccessModal = () => {
    const dispatch = useDispatch()
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    let closeSuccessModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
        window.location.reload()
    }
    return (
        <form>

            <div style={modalstyle} id="successModal" className="modal ">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <i className="fa fa-check"></i>
                            </div>
                            <h4 className="modal-title w-100">Success</h4>
                            <button onClick={closeSuccessModal} type="button" className="delete-portifolio-modal-close" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>                        </button>                    </div>
                        <div className="modal-body">
                            <p>Operation Done Successfully.</p>
                        </div>
                        <div className="modal-footer justify-content-center">

                            <button onClick={closeSuccessModal} type="submit" className="btn btn-danger">Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddPortifolioSuccessModal