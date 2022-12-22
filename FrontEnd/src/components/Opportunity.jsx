import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Profile from "../assets/profile.jpg"
import OpportunityDetailPage from '../OpportunityDetailPage'

const Opportunity = ({ data }) => {
    console.log(data)
    const navigate = useNavigate();
    const opendetails = (id) => {
        navigate({ pathname: "opportunitydetail", search: createSearchParams({ id: "id" }) })
    }
    return (
        <div className="opportunities">
            {data.intStatus == "active" ?
                <div className="opportunity-featured">
                    Active
                    <i className="fa fa-bolt"></i>
                </div> : <div className="opportunity-featured opportunity-featured-inactive">
                    InActive
                    <i className="fa fa-bolt"></i>
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
                        <li className="opportunity-title-detail1"><i className="fa fa-clock-o"></i>
                            <div>{data.intDuration}</div>
                        </li>
                        <li className="opportunity-title-detail2"><i className="fa fa-signal"></i>
                            {/* <div>Expensive</div> */}
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 my-auto text-center opportunity-price">
                    <h2>{data.intLocation.toUpperCase()}</h2>
                    {data.intType.toUpperCase()}
                </div>
                <div className="col-md-3 my-auto">
                    <button onClick={() => { opendetails() }} href={"/opportunitydetail/" + data.id} className="opportunity-button">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Opportunity