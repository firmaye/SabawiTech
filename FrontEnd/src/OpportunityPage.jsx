import React, { useEffect, useState } from 'react'
import "./css/opportunitypage.css"
import Navbar from './components/Navbar'
import OpportunityFilter from './components/OpportunityFilter'
import Opportunity from './components/Opportunity'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './components/Loading';

import FadeIn from "react-fade-in";
import NotAllowed from './components/NotAllowedModal'
import Footer from './components/footer'



const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [opportunitylist, setopportunitylist] = useState([])
    let getFetchUsers = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/internships`).then(res => res.json()).then(result => {
            if (result.message == "Unauthorized!") {
                window.localStorage.removeItem('user')
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL} / signin`
            } else {
                setloading(false)
                setopportunitylist(result)
            }
        }).catch((error) => { console.log(error) });
    }
    useEffect(() => {
        // if (JSON.parse(localStorage.getItem('user')) == null) {
        //     window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/signin"
        // } else {

        // }
        getFetchUsers()
    }, [])
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter.filterState)
    console.log(opportunitylist)
    let sublist = opportunitylist.filter((elt) => {
        if (currentFilter.location.length == 0) {
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
    sublist = sublist.filter((elt) => {

        if (currentFilter.type.length == 0) {
            return elt
        } else {
            if (currentFilter.type.includes("paid")) {
                if (elt.intType == "paid") {
                    return elt
                }
            }
            if (currentFilter.type.includes("unpaid")) {
                if (elt.intType == "unpaid") {
                    return elt
                }
            }
        }
    })
    console.log(sublist.length)
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    if (loading) {
        return (
            <Loading />)
    } else {
        return (
            <FadeIn>
                <main style={{ marginBottom: "40px" }}>

                    {currentModal == "notallowed" ? <NotAllowed />
                        : <></>}

                    <Navbar />
                    <Header title={"Projects"} />
                    <div className="main-content-container container">
                        <div className="main-content-container-child row">
                            <OpportunityFilter />
                            {sublist.length == 0 ? <div className="opportunities-container  col-xl-8 noresultscont">
                                <img src="./Images/searchnotfound.png" alt="" />
                                <h3>No results found on the section</h3>
                                <p>Try again</p>
                            </div> : <div className="opportunities-container  col-xl-8">
                                {sublist.map((opportunity) => {
                                    return <Opportunity data={opportunity} />
                                })}
                            </div>}

                        </div>

                    </div>
                </main>
                <Footer />
            </FadeIn>

        )
    }
}

export default OpportunityPage