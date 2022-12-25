import React from 'react'
import Sidebar from './components/Sidebar'
import "./css/addportifolio.css"
import ProfileImg from "./assets/profile.jpg"

const AddPortifolio = () => {
    return (
        <main>

            <div className="">
                <div className="add-portifolio-container">
                    <div className="add-portifolio-card add-portifolio-identity-container-parent  d-lg-block">

                    </div>
                    <div className="add-portifolio-personal-description-container-parent row" >
                        <div className=" col-lg-4">
                            <div className="add-portifolio-sidebar-container">
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Add Project
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                {/* <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Select Template
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Add details
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="add-portifolio-edit-add-portifolio">
                                    <div>
                                        Preview
                                    </div>
                                    <button>
                                        <i className="fa fa-check" aria-hidden="true"></i>

                                    </button>
                                </div> */}

                            </div>
                        </div>
                        <div className=" add-portifolio-personal-description-container col min-width-0">
                            <div className="add-portifolio-personal-description">
                                <div className=" add-portifolio-personal-description-title row">
                                    <div className="col">
                                        <h2>Add Portifolio Project</h2>
                                    </div>

                                </div>
                                <div className="row add-portifolio-personal-description-details">
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Image
                                        </div>
                                        <div className="add-portifolio-modal-image-container">
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
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Title
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input type="text" />
                                        </div>

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Link
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input type="text" />
                                        </div>

                                    </div>
                                    <div className="col-12 add-portifolio-input-parent-container">
                                        <div className="add-portifolio-label">
                                            Work Skill
                                        </div>
                                        <div className="add-portifolio-label-input-container">
                                            <input type="text" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="add-portifolio-buttons ">
                                        <button className="see-public">Close </button>
                                        <button className="setting">Add</button>
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

export default AddPortifolio