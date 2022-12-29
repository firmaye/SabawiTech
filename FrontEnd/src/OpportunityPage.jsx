import React, { useEffect, useState } from 'react'
import "./css/opportunitypage.css"
import Navbar from './components/Navbar'
import OpportunityFilter from './components/OpportunityFilter'
import Opportunity from './components/Opportunity'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [opportunitylist, setopportunitylist] = useState([])
    let getFetchUsers = () => {
        // setloading(
        //     true
        // )
        fetch("opportunity.json").then(res => res.json()).then(result => {
            setloading(false)
            // console.log(result.opportunities)
            setopportunitylist(result.opportunities)
        }).catch((error) => { console.log(error) });
        ;
    }
    useEffect(() => {
        getFetchUsers()
    }, [])
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter.filterState)

    console.log(currentFilter.location.length)

    let sublist = opportunitylist.filter((elt) => {

        if (currentFilter.location.length == 0) {
            console.log("nofilter")
            return elt
        } else {
            if (currentFilter.location.includes("remote")) {
                if (elt.intLocation == "remote") {
                    return elt
                }
            }
            if (currentFilter.location.includes("office")) {
                if (elt.intLocation == "office") {
                    return elt
                }
            }
        }
    })
    sublist = sublist.filter((elt) => {

        if (currentFilter.status.length == 0) {
            console.log("nofilter")
            return elt
        } else {
            if (currentFilter.status.includes("open")) {
                if (elt.intStatus == "open") {
                    return elt
                }
            }
            if (currentFilter.status.includes("closed")) {
                if (elt.intStatus == "closed") {
                    return elt
                }
            }
        }
    })
    if (loading) {
        return <div>Loading</div>
    } else {

        return (

            <main>
                <Navbar />
                <Header title={"Projects"} />
                <div className="main-content-container container">
                    <div className="main-content-container-child row">

                        <OpportunityFilter />

                        <div className="opportunities-container  col-xl-8">
                            {sublist.map((opportunity) => {

                                return <Opportunity data={opportunity} />
                            })}


                        </div>
                    </div>

                </div>
            </main>

        )
    }
}

export default OpportunityPage