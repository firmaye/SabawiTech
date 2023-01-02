import React from 'react'
import { useState } from 'react'
import "../css/languageaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import uuid from 'react-uuid';
const LanguageModal = ({ language }) => {
    const dispatch = useDispatch()


    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [languagelistmodal, setlanguagelistmodal] = useState(language)
    const [langtobeedited, setlangtobeedited] = useState({})
    const [langtobeadded, setlangtobeadded] = useState({})
    const [proficiencytobeadded, setproficiencytobeadded] = useState({})
    let closeLanguageModal = () => {
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
                        <h5 className="modal-title" id="exampleModalLabel">Language</h5>
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
                                            {languagelistmodal.map((element) => {
                                                return (

                                                    <div class="col-12 d-flex align-items-center language-modal-existing-group-container mb-3">
                                                        <div class="col-6 language-modal-existing-input-group">
                                                            <input class="" type="text" onChange={(event) => {
                                                                setlanguagelistmodal((oldlist) => {
                                                                    const found = oldlist.find(childelement => childelement._id == element._id);
                                                                    found.languageName = event.target.value
                                                                    const result = oldlist.map(oldelement => {
                                                                        if (oldelement._id == element._id) {
                                                                            return found
                                                                        } else {
                                                                            return oldelement
                                                                        }
                                                                    });
                                                                    return result;
                                                                    ;
                                                                })
                                                            }} value={element.languageName} name="" />

                                                        </div>
                                                        <div class="col-5 language-modal-existing-input-group">
                                                            <input class="" type="text" onChange={(event) => {
                                                                setlanguagelistmodal((oldlist) => {
                                                                    const found = oldlist.find(childelement => childelement._id == element._id);
                                                                    found.languageProficiency = event.target.value
                                                                    const result = oldlist.map(oldelement => {
                                                                        if (oldelement._id == element._id) {
                                                                            return found
                                                                        } else {
                                                                            return oldelement
                                                                        }
                                                                    });
                                                                    return result;
                                                                    ;
                                                                })
                                                            }} value={element.languageProficiency} name="" />
                                                        </div>
                                                        <button onClick={(event) => {
                                                            event.preventDefault()

                                                            const found = languagelistmodal.filter(childelement => childelement._id != element._id);

                                                            setlanguagelistmodal((oldlist) => {
                                                                const found = oldlist.filter(childelement => childelement._id != element._id);
                                                                console.log(found)
                                                                    // found.languageName = event.target.value
                                                                    // const result = oldlist.map(oldelement => {
                                                                    //     if (oldelement._id == element._id) {
                                                                    //         return found
                                                                    //     } else {
                                                                    //         return oldelement
                                                                    //     }
                                                                    // });
                                                                    // return result;
                                                                    ;
                                                                return found
                                                            })
                                                        }} className="language-edit-btn">
                                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                )
                                            })}
                                            <div className="language-modal-location-container d-flex align-items-center">

                                                <div class="language-modal-input-group">
                                                    <input class="" onChange={(event) => { setlangtobeadded(event.target.value) }} type="text" placeholder="Language Name" name="" />
                                                </div>
                                                <div class="language-modal-input-group">
                                                    <input class="" onChange={(event) => { setproficiencytobeadded(event.target.value) }} type="text" placeholder="Proficiency" name="" />
                                                </div>
                                                <div className="">
                                                    <button onClick={(event) => {
                                                        event.preventDefault()
                                                        setlanguagelistmodal((oldstate) => {
                                                            let newstate = [...oldstate, {
                                                                "_id": uuid(),
                                                                "languageName": langtobeadded,
                                                                "languageProficiency": proficiencytobeadded,
                                                                "deletedAt": "2022-12-15T18:35:56.614Z",
                                                                "createdAt": "2022-12-15T18:35:56.614Z",
                                                                "updatedAt": "2022-12-15T18:35:56.615Z"
                                                            }]
                                                            return newstate
                                                        })
                                                        console.log(uuid())
                                                    }} className="language-edit-btn">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
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