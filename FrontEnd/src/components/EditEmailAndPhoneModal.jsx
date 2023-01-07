import React from 'react'
import { useState } from 'react'
import "../css/editemailandphonemodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';


const EmailAndPhoneModal = ({ emailandphone }) => {
    const dispatch = useDispatch()

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEmailAndPhoneModal = () => {
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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Phone</h5>
                        <button onClick={closeEmailAndPhoneModal} type="button" className="emailandphone-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="emailandphone-modal-page-wrapper ">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h2 className="emailandphone-modal-education"></h2>
                                        <form method="">
                                            <div className="emailandphone-modal-input-group">
                                                <input value={emailandphone.email} className="" type="text" placeholder="Email" name="" />
                                            </div>
                                            <div className="emailandphone-modal-input-group">
                                                <input value={emailandphone.phone} className="" type="text" placeholder="Phone Number" name="" />
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeEmailAndPhoneModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailAndPhoneModal