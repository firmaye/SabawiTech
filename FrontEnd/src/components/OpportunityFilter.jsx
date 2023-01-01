import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFilterLocation, removeFilterStatus, setFilterLocation, setFilterStatus } from '../redux/filter'

const OpportunityFilter = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter.filterState)

    console.log(currentFilter)
    return (
        <div className="filter-container col-xl-4">
            <div className="filter-box">
                <h4 className="filter-title">
                    Filter by Attribute
                </h4>
                <div className="category-container">
                    <div className="category-title">
                        Location
                    </div>
                    <div className="category-options">
                        <div className="category-option">
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterLocation("remote")) : dispatch(removeFilterLocation("remote")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Remote</label>
                            </div>

                        </div>
                        <div className="category-option">
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterLocation("office")) : dispatch(removeFilterLocation("office")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Office</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="seller-container">
                    <div className="seller-title">
                        Status
                    </div>
                    <div className="seller-options">

                        <div className="seller-option">
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterStatus("open")) : dispatch(removeFilterStatus("open")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Open</label>
                            </div>
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterStatus("closed")) : dispatch(removeFilterStatus("closed")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Closed</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="price-container">
                    <div className="price-title">
                        Price
                    </div>
                    <div className="price-options">

                        <div className="price-option">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Android</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-title">
                        Project type
                    </div>
                    <select id="" className="form-control project-options">
                        <option value="">result</option>
                        <option value="">result</option>
                        <option value="">result</option>
                        <option value="">result</option>
                        <option value="">result</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default OpportunityFilter