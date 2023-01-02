import React from 'react'
import { useState } from 'react'
import "../css/employmenteditmodal.css"
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/profilemodal';
import DatePicker from "react-datepicker"
import { CountryDropdown } from 'react-country-region-selector';

const EmploymentEditModal = ({ selected }) => {
    const dispatch = useDispatch()
    console.log(selected)
    const [country, setcountry] = useState(selected.empCountry)
    const [description, setdescription] = useState(selected.Description)
    const [companyName, setcompanyName] = useState(selected.empAt)
    const [city, setcity] = useState(selected.empState)
    const [title, settitle] = useState(selected.empRole)
    const [periodfrom, setperiodfrom] = useState(new Date(selected.empFrom))
    const [periodto, setperiodto] = useState(new Date(selected.empTo))
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeEmploymentEditModal = () => {
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
                        <h5 className="modal-title" id="exampleModalLabel">Edit Employment</h5>
                        <button onClick={closeEmploymentEditModal} type="button" className="employment-modal-close" >
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
                                                <input value={companyName} onChange={(data) => { setcompanyName(data.target.value) }} className="" type="text" placeholder="Company Name" name="" />
                                            </div>
                                            <div className="employment-modal-location-container">

                                                <div className="employment-modal-input-group col-6 employment-modal-location-country">

                                                    <CountryDropdown
                                                        value={country}
                                                        onChange={(val) => setcountry(val)} />
                                                </div>
                                                <div className="employment-modal-input-group">
                                                    <input value={city} onChange={(data) => { setcity(data.target.value) }} className="" type="text" placeholder="City" name="" />
                                                </div>
                                            </div>
                                            <div className="employment-modal-input-group">
                                                <input value={title} onChange={(data) => { settitle(data.target.value) }} className="" type="text" placeholder="Title" name="" />
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


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeEmploymentEditModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmploymentEditModal