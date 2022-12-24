import React from 'react'
import { useState } from 'react'
import "../css/namemodal.css"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const NameModal = () => {
    let modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    }
    const [country, setcountry] = useState("")
    const [modalstyle, setmodalstyle] = useState({
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    })

    let closeNameModal = () => {
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
                        <button onClick={closeNameModal} type="button" className="name-modal-close" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>                        </button>
                    </div>
                    <div className="modal-body">
                        <div class="name-modal-page-wrapper ">
                            <div class="">
                                <div class="">
                                    <div class="">
                                        <h2 class="name-modal-title"></h2>
                                        <form method="">
                                            <div class="name-modal-input-group">
                                                <input class="" type="text" placeholder="NAME" name="" />
                                            </div>
                                            <div class="row ">
                                                <div class="col-12 name-modal-dropdown">
                                                    <div class="">
                                                        <label>Location</label>
                                                        <div>
                                                            <CountryDropdown
                                                                value={country}
                                                                onChange={(val) => setcountry(val)} />
                                                            {/* <ReactCountryDropdown /> */}
                                                        </div>
                                                    </div>

                                                    {/* <div class="dropdown__options">
                                                        <div class="dropdown__option dropdown__option--selected"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-kingdom_1f1ec-1f1e7.png" alt="United Kingdom" /><span>United Kingdom</span></div>

                                                        <div class="dropdown__option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-states_1f1fa-1f1f8.png" alt="U.S." /><span>U.S.</span></div>

                                                        <div class="dropdown__option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-france_1f1eb-1f1f7.png" alt="France" /><span>France</span></div>

                                                        <div class="dropdown__option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-spain_1f1ea-1f1f8.png" alt="Spain" /><span>Spain</span></div>

                                                        <div class="dropdown__option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-germany_1f1e9-1f1ea.png" alt="Germany" /><span>Germany</span></div>
                                                    </div> */}
                                                </div>
                                                <div class="col-12 name-modal-col-12">
                                                    <div class="name-modal-input-group">
                                                        <input class="" type="text" placeholder="State" name="" />
                                                    </div>
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
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NameModal