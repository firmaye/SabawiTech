import React from 'react'
import { useState } from 'react'
import "../css/namemodal.css"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';

const NameModal = ({ }) => {
    const dispatch = useDispatch()

    const [selectedImage, setSelectedImage] = useState(null);
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
        console.log(value.files[0])
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            alert("File not supported. Kindly Upload the Image of below given extension ")
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
    let handleSubmit = (event) => {

        console.log(selectedImage)
        const formData = new FormData();
        // Update the formData object
        formData.append(
            'profilePhoto',
            selectedImage
        );
        // console.log(file)
        // console.log({ profilePhoto: selectedImage })
        // let body = JSON.stringify({ profilePhoto: selectedImage })
        // console.log(body)
        // event.preventDefault()
        fetch('http://localhost:8080/api/users/upload/63b13cfd127ade2c12562493', {
            method: 'POST',

            body: formData
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
    // 
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Name And Location</h5>
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
                                                            <img id="image-preview" src={""} alt="" />
                                                            <h3 id="filename">
                                                                Drag and Drop
                                                            </h3>
                                                            <p >Supports JPG, PNG, SVG</p>
                                                        </div>
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
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Edit Image</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameModal