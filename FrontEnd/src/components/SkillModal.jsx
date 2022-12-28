import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../css/skillmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';

const SkillModal = ({ skilllist }) => {
    const dispatch = useDispatch()

    console.log(skilllist)
    const [skilllistmodal, setskilllistmodal] = useState([])
    useEffect(() => {
        setskilllistmodal(skilllist)
    }, [])


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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Name And Location</h5>
                        <button onClick={closeSkillModal} type="button" className="skill-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="row modal-body">
                        <div class="col-12 skill-skill-list ">
                            <div className="skill-list">
                                {
                                    skilllistmodal.map((element) => {
                                        return (<div className="skills">
                                            {element.skillName}
                                            <button onClick={() => {
                                                setskilllistmodal(skilllistmodal.filter(childelement => childelement.id != element.id,
                                                ));
                                            }} type="button" className="skill-list-modal-close" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div class="col-12 skill-modal-input-group-container">
                            <div class="col skill-modal-input-group">
                                <input value={newskill} onChange={(data) => { setnewskill(data.currentTarget.value) }} class="" type="text" placeholder="Enter New Skill" name="" />
                            </div>
                            <div className="">
                                <button onClick={() => {
                                    setskilllistmodal(oldArray => [...oldArray, {
                                        "id": 45575310,
                                        "skillName": `${newskill}`,
                                        "deletedAt": "2022-12-15T18:35:56.612Z",
                                        "createdAt": "2022-12-15T18:35:56.612Z",
                                        "updatedAt": "2022-12-15T18:35:56.612Z"
                                    }]); setnewskill("")
                                }} className="skill-edit-btn">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeSkillModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillModal