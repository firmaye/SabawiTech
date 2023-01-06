import React, { useEffect, useState } from 'react'
import "./css/opportunitypage.css"
import Navbar from './components/Navbar'
import OpportunityFilter from './components/OpportunityFilter'
import Opportunity from './components/Opportunity'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './components/Loading';

import FadeIn from "react-fade-in";



const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [opportunitylist, setopportunitylist] = useState([])
    let getFetchUsers = () => {
        // setloading(
        //     true
        // )
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        fetch("http://localhost:8080/api/internships", { headers: { 'x-access-token': user.accessToken } }).then(res => res.json()).then(result => {
            console.log(result)
            setloading(false)

            // console.log(result.opportunities)
            setopportunitylist(result)
        }).catch((error) => { console.log(error) });
        ;
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user')) == null) {
            window.location.href = "http://localhost:8081/signin"
        } else {

            getFetchUsers()
        }
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
        return (
            <Loading />)
    } else {

        return (
            <FadeIn>
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
            </FadeIn>

        )
    }
}

export default OpportunityPage