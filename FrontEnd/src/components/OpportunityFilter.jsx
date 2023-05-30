import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFilterLocation, removeFilterType, removeFilterStatus, setFilterLocation, setFilterType, setFilterStatus } from '../redux/filter'

const OpportunityFilter = ({ styleatscreen }) => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter.filterState)

    return (
        <div className={"filter-container col-xl-4 " + styleatscreen}>
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
                                    id="remote" />
                                <label className="form-check-label" htmlFor="remote">Remote</label>
                            </div>

                        </div>
                        <div className="category-option">
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterLocation("office")) : dispatch(removeFilterLocation("office")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="office" />
                                <label className="form-check-label" htmlFor="office">Office</label>
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
                                    id="open" />
                                <label className="form-check-label" htmlFor="open">Open</label>
                            </div>
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterStatus("closed")) : dispatch(removeFilterStatus("closed")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="closed" />
                                <label className="form-check-label" htmlFor="closed">Closed</label>
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
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterType("paid")) : dispatch(removeFilterType("paid")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="paid" />
                                <label className="form-check-label" htmlFor="paid">Paid</label>
                            </div>
                            <div className="form-check form-switch">
                                <input onClick={(data) => { data.target.checked ? dispatch(setFilterType("unpaid")) : dispatch(removeFilterType("unpaid")) }} className="form-check-input" type="checkbox" role="switch"
                                    id="unpaid" />
                                <label className="form-check-label" htmlFor="unpaid">Unpaid</label>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="price-container">
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
                </div> */}
            </div>
        </div>
    )
}

export default OpportunityFilter