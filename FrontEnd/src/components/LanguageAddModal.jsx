import React from 'react'
import { useState } from 'react'
import "../css/languageaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import uuid from 'react-uuid';
const LanguageModal = ({ language }) => {
    const dispatch = useDispatch()

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
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })
    const [buttonloading, setbuttonloading] = useState(false)

    const [languagelistmodal, setlanguagelistmodal] = useState(language)
    const [langtobeadded, setlangtobeadded] = useState("")
    const [proficiencytobeadded, setproficiencytobeadded] = useState("")
    const [langerror, setlangerror] = useState("")
    const [existinglangerror, setexistinglangerror] = useState("")
    const [proficiencyerror, setproficiencyerror] = useState("")
    let closeLanguageModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }
    let handleSubmit = (event) => {
        let error = false
        console.log(languagelistmodal)
        languagelistmodal.map((element) => {

            console.log("executed")
            if (element.languageName == "") {
                error = true
            }
            if (element.languageProficiency == "") {
                error = true
            }


        })
        let languageedited = languagelistmodal.filter((element) => {
            if (element.languageName == "" && element.languageName == "") {
                return false
            } else { return true }
        })
        console.log(languageedited)
        console.log(error)
        if (!error) {

            let languageedited = languagelistmodal.map((element) => {
                delete element._id
                return element
            })
            let language = JSON.stringify({ language: languageedited })
            console.log(language)
            event.preventDefault()
            let userid = JSON.parse(localStorage.getItem('user')).id
            console.log(`http://localhost:8080/api/users/language/${userid}`)
            setbuttonloading(true)

            fetch(`http://localhost:8080/api/users/language/${userid}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: language
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
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Language</h5>
                        <button onClick={closeLanguageModal} type="button" className="language-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="language-modal-page-wrapper ">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h2 className="language-modal-language"></h2>
                                        <form method="">
                                            {languagelistmodal.map((element) => {
                                                return (

                                                    <div className="col-12 d-flex align-items-center language-modal-existing-group-container mb-3">
                                                        <div className="col-6 language-modal-existing-input-group">
                                                            <input className="" placeholder="Please Set Language" type="text" onChange={(event) => {
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
                                                        <div className="col-5 language-modal-existing-input-group">
                                                            <input className="" type="text" onChange={(event) => {

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
                                                            }} value={element.languageProficiency} placeholder="Please Set Proficiency" name="" />
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

                                                <div className="language-modal-input-group">
                                                    <input value={langtobeadded} className="" onChange={(event) => { setlangtobeadded(event.target.value) }} type="text" placeholder="Language Name" name="" />
                                                    <div style={{ position: "absolute" }} className='input-error-display' >{langerror}</div>

                                                </div>
                                                <div className="language-modal-input-group">
                                                    <input value={proficiencytobeadded} className="" onChange={(event) => { setproficiencytobeadded(event.target.value) }} type="text" placeholder="Proficiency" name="" />
                                                    <div style={{ position: "absolute" }} className='input-error-display' >{proficiencyerror}</div>
                                                </div>
                                                <div className="">
                                                    <button onClick={(event) => {
                                                        event.preventDefault()
                                                        if (langtobeadded == "") {
                                                            setlangerror("Required")
                                                        } else {
                                                            setlangerror("")

                                                        }
                                                        if (proficiencytobeadded == "") {
                                                            setproficiencyerror("Required")


                                                        } else {
                                                            setproficiencyerror("")

                                                        }
                                                        if (langtobeadded != "" &&
                                                            proficiencytobeadded != "") {
                                                            console.log("execute")
                                                            setlanguagelistmodal((oldstate) => {
                                                                let newstate = [...oldstate, {
                                                                    "_id": uuid(),
                                                                    "languageName": langtobeadded,
                                                                    "languageProficiency": proficiencytobeadded,
                                                                }]
                                                                return newstate
                                                            })
                                                            setlangtobeadded("")
                                                            setproficiencytobeadded("")
                                                        }
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
                        {buttonloading ? <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button> : <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal