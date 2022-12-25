import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import "./css/editportifolio.css"
import ProfileImg from "./assets/profile.jpg"
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const EditPortifolio = () => {
    const params = useParams()
    const paramsid = params.id
    const [previouswork, setpreviouswork] = useState([])

    useEffect(() => {

        fetch("../user.json").then(res => res.json()).then(result => {
            const found = result.previousWork.find(element => element.id == paramsid);
            setpreviouswork(found)
            // setpreviouswork(result.previousWork)
        }).catch((error) => { console.log(error) });
    }, [])
    return (
        <main>

            <div className="">
                <div className="edit-portifolio-container">
                    <div className="edit-portifolio-card edit-portifolio-identity-container-parent  d-lg-block">

                    </div>
                    <div className="edit-portifolio-personal-description-container-parent row" >
                        <div className=" col-lg-4">
                            <div className="edit-portifolio-sidebar-container">
                                <div className="edit-portifolio-edit-add-portifolio">
                                    <div>
                                        Edit Project
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                {/* <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="edit-portifolio-edit-edit-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div> */}

                            </div>
                        </div>
                        <div className=" edit-portifolio-personal-description-container col min-width-0">
                            <div className="edit-portifolio-personal-description">
                                <div className=" edit-portifolio-personal-description-title row">
                                    <div className="col">
                                        <h2>Edit Portifolio Project</h2>
                                    </div>

                                </div>
                                <div className="row edit-portifolio-personal-description-details">
                                    <div className="col-12 edit-portifolio-input-parent-container">
                                        <div className="edit-portifolio-label">
                                            Work Image
                                        </div>
                                        <div className="edit-portifolio-modal-image-container">
                                            <div className="image-upload">
                                                <input type="file" name="" id="logo" onChange={(value) => { fileValue(value.target) }} />
                                                <label htmlFor="logo" className="upload-field" id="file-label">
                                                    <div className="file-thumbnail">
                                                        <img id="image-preview" src="https://www.btklsby.go.id/images/placeholder/basic.png" alt="" />
                                                        <h3 id="filename">
                                                            Drag and Drop
                                                        </h3>
                                                        <p >Supports JPG, PNG, SVG</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 edit-portifolio-input-parent-container">
                                        <div className="edit-portifolio-label">
                                            Work Title
                                        </div>
                                        <div className="edit-portifolio-label-input-container">
                                            <input type="text" value={previouswork.workTitle} />
                                        </div>

                                    </div>
                                    <div className="col-12 edit-portifolio-input-parent-container">
                                        <div className="edit-portifolio-label">
                                            Work Link
                                        </div>
                                        <div className="edit-portifolio-label-input-container">
                                            <input type="text" value={previouswork.workLink} />
                                        </div>

                                    </div>
                                    <div className="col-12 edit-portifolio-input-parent-container">
                                        <div className="edit-portifolio-label">
                                            Work Skill
                                        </div>
                                        <div className="edit-portifolio-label-input-container">
                                            <input type="text" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="edit-portifolio-buttons ">
                                        <button className="see-public">Close </button>
                                        <button className="setting">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default EditPortifolio