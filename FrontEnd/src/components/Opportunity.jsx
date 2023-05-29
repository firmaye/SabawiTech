import React from 'react'
import { useDispatch } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Profile from "../assets/profile.jpg"
import OpportunityDetailPage from '../OpportunityDetailPage'
import { setModal } from '../redux/profilemodal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faSignal } from '@fortawesome/free-solid-svg-icons'

const Opportunity = ({ data }) => {
    let dispatch = useDispatch()
    let buttonClick = () => {
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            dispatch(setModal("notallowed"))
        } else {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/opportunitydetail/` + data._id
        }

    }
    return (
        <div className="opportunities">
            {data.intStatus.toLowerCase() == "open" ?
                <div className="opportunity-featured">
                    Open
                    {/* <i className="fa fa-bolt"></i> */}
                </div> : <div className="opportunity-featured opportunity-featured-inactive">
                    Closed
                    {/* <i className="fa fa-bolt"></i> */}
                </div>}

            <div className="opportunity-detail row">
                {/* <div className="col-md-1 my-auto opportunity-image-container-parent">
                    <div className="opportunity-image-container">
                        <img src={Profile} alt="" />
                        <i className="fa fa-check-circle verified"></i>
                    </div>

                </div> */}
                <div className="col-md-7 my-auto">
                    <div className="opportunity-title">
                        {data.intTitle}
                    </div>
                    <ul className="opportunity-title-detail">
                        <li className="opportunity-title-detail1"><FontAwesomeIcon icon={faClock} />
                            <div>{data.intDuration}</div>
                        </li>
                        <li className="opportunity-title-detail2"><FontAwesomeIcon icon={faSignal} />
                            {/* <div>Expensive</div> */}
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 my-auto text-center opportunity-price">
                    <h2>{data.intLocation.toUpperCase()}</h2>
                    {data.intType.toUpperCase()}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }} className="col-md-3 my-auto">
                    <button onClick={buttonClick} className="opportunity-button">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Opportunity