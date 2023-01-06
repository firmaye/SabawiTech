import React from 'react'
import { useState } from 'react'
import "../css/employmentaddmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import DatePicker from "react-datepicker"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const EmploymentModal = () => {
    const dispatch = useDispatch()
    const [country, setcountry] = useState()
    const [description, setdescription] = useState()
    const [companyName, setcompanyName] = useState()
    const [city, setcity] = useState()
    const [title, settitle] = useState()
    const [periodfrom, setperiodfrom] = useState(new Date())
    const [periodto, setperiodto] = useState(new Date())

    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEmploymentModal = () => {
        dispatch(setModal(""))
        setmodalstyle({
            display: "none"
        })
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
    let handleSubmit = (event) => {
        let body = {
            empAt: companyName,
            empCountry: country,
            empState: city,
            empRole: title,
            empFrom: periodfrom,
            empTo: periodto,
            empDescription: description
        }

        body = JSON.stringify(body)
        console.log(body)
        event.preventDefault()
        let userid = JSON.parse(localStorage.getItem('user')).id
        fetch(`http://localhost:8080/api/users/employmentHistory/${userid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                successModal()
            })
            .catch((error) => {
                errorModal()
                // console.log(error)
                console.error('Error:', error);
            });
    }
    return (
        <div style={modalstyle} className="modal show fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Employment</h5>
                        <button onClick={closeEmploymentModal} type="button" className="employment-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="employment-modal-page-wrapper ">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h2 className="employment-modal-employment"></h2>
                                        <form method="">
                                            <div className="employment-modal-input-group">
                                                <input onChange={(data) => { setcompanyName(data.target.value) }} className="" type="text" placeholder="Company Name" name="" />
                                            </div>

                                            <div className="employment-modal-location-container">
                                                <div className="employment-modal-input-group col-6 employment-modal-location-country">

                                                    <CountryDropdown
                                                        value={country}
                                                        onChange={(val) => setcountry(val)} />
                                                </div>
                                                <div className="employment-modal-input-group">
                                                    <input onChange={(data) => { setcity(data.target.value) }} className="" type="text" placeholder="City" name="" />
                                                </div>
                                            </div>
                                            <div className="employment-modal-input-group">
                                                <input onChange={(data) => { settitle(data.target.value) }} className="" type="text" placeholder="Title" name="" />
                                            </div>
                                            <div className="employment-modal-period-container">

                                                <div className="employment-modal-input-group">
                                                    <label>Period From</label>
                                                    <DatePicker selected={periodfrom} onChange={(date) => setperiodfrom(date)} />
                                                </div>
                                                <div className="employment-modal-input-group">
                                                    <label>Period To</label>
                                                    <DatePicker selected={periodto} onChange={(date) => setperiodto(date)} />                                                </div>
                                            </div>
                                            <div className="employment-modal-period-container employment-textarea-container">

                                                <div className="employment-modal-input-group employment-textarea-container-child">
                                                    <label>Description</label>
                                                    <textarea onChange={(data) => { setdescription(data.target.value) }} name="" id="" cols="30" rows="10"></textarea>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeEmploymentModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default EmploymentModal