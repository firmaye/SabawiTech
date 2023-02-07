import React from 'react'
import { useState } from 'react'
import "../css/namemodal.css"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';

const NameModal = ({ image }) => {
    const dispatch = useDispatch()
    const [imageerror, setimageerror] = useState("")
    const [buttonloading, setbuttonloading] = useState(false)
    const [selectedImage, setSelectedImage] = useState("Please Change Image");
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeNameModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
    }

    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            setSelectedImage("")
            document.getElementById("filename").innerHTML = "Please Select an image";
            document.getElementById('image-preview').src = ""
            alert("File Not Selected Or Selected Format Not Supported")
        }
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
    let setImagePath = (e) => {
        setSelectedImage(e.target.files[0])

    }
    let checkPhotoExistence = () => {
        if (selectedImage == "" || selectedImage == undefined || selectedImage == "Please Change Image") {
            if (selectedImage == "Please Change Image") {
                setimageerror("Please Change Image")
            } else {
                setimageerror("Please Select An Image")
            }
            return false
        } else {
            setimageerror("")
            return true
        }
    }
    let handleSubmit = (event) => {

        const formData = new FormData();
        // Update the formData object
        formData.append(
            'profilePhoto',
            selectedImage
        );
        // let body = JSON.stringify({ profilePhoto: selectedImage })
        // event.preventDefault()
        setbuttonloading(true)
        let userid = JSON.parse(sessionStorage.getItem('user')).id
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/upload/${userid}`, {
            method: 'POST',

            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                successModal()
            })
            .catch((error) => {
                errorModal()
                console.error('Error:', error);
            });
    }
    // 
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Profile Image</h5>
                        <button onClick={closeNameModal} type="button" className="name-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="name-modal-page-wrapper ">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h2 className="name-modal-title"></h2>
                                        <form method="">
                                            <div className="name-modal-image-container">
                                                <div className="image-upload">
                                                    <input type="file" name="" id="logo" onChange={(value) => {
                                                        fileValue(value.target);
                                                        setImagePath(value);
                                                    }} />
                                                    <label htmlFor="logo" className="upload-field" id="file-label">
                                                        <div className="file-thumbnail">
                                                            <img id="image-preview" src={`${import.meta.env.VITE_BACKEND_URL}/uploads/images/${image}`} alt="" />
                                                            <h3 id="filename">
                                                                Click or Drag and Drop Image on the Space Provided
                                                            </h3>
                                                            <p >Supports JPG, PNG, SVG</p>
                                                        </div>
                                                        <div className='input-error-display extra-detail-error-profile-photo' style={{ marginLeft: "40px" }} >{imageerror}</div>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" onClick={closeNameModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        {buttonloading ? <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button> : <button type="button" onClick={(event) => { checkPhotoExistence() ? handleSubmit() : () => { } }} className="btn btn-primary">Edit Image</button>}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameModal