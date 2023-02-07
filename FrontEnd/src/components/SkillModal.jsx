import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../css/skillmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uuid from 'react-uuid';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const SkillModal = ({ skilllist }) => {
    const dispatch = useDispatch()
    const [buttonloading, setbuttonloading] = useState(false)

    const [skilllistmodal, setskilllistmodal] = useState([])
    useEffect(() => {
        setskilllistmodal(skilllist)
    }, [])

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
        let skilllistedited = skilllistmodal.map((element) => {
            delete element._id
            return element
        })
        let body = {
            skill: skilllistedited
        }
        body = JSON.stringify(body)
        event.preventDefault()
        setbuttonloading(true)
        let userid = JSON.parse(sessionStorage.getItem('user')).id
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/skill/${userid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((data) => {
                successModal()
            })
            .catch((error) => {
                errorModal()
            });
    }
    const [newskill, setnewskill] = useState("")
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeSkillModal = () => {
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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Skill</h5>
                        <button onClick={closeSkillModal} type="button" className="skill-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="row modal-body">
                        <div className="col-12 skill-skill-list ">
                            <div className="skill-list">
                                {
                                    skilllistmodal.map((element) => {
                                        return (<div className="skills">
                                            {element.skillName}
                                            <button onClick={() => {
                                                setskilllistmodal(skilllistmodal.filter(childelement => childelement._id != element._id,
                                                ));
                                            }} type="button" className="modalskill-list-modal-close" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-12 skill-modal-input-group-container">
                            <div className="col skill-modal-input-group">
                                <input value={newskill} onChange={(data) => { setnewskill(data.currentTarget.value) }} className="" type="text" placeholder="Enter New Skill" name="" />
                            </div>
                            <div className="">
                                <button onClick={() => {
                                    if (newskill == "") { } else {
                                        setskilllistmodal(oldArray => [...oldArray, {
                                            "_id": uuid(),
                                            "skillName": `${newskill}`
                                        }]); setnewskill("")
                                    }
                                }} className="skill-edit-btn">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeSkillModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button> : <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save changes</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillModal