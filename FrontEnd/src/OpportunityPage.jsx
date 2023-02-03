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


import { MDBCol, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [search, setsearch] = useState("")
    const [opportunitylist, setopportunitylist] = useState([])
    const [startPage, setStartPage] = useState(1);
    let getFetchUsers = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/internships`).then(res => res.json()).then(result => {
            console.log(`${import.meta.env.VITE_BACKEND_URL}/api/internships`)
            if (result.message == "Unauthorized!") {
                window.localStorage.removeItem('user')
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL} / signin`
            } else {
                setloading(false)
                setopportunitylist(result)
            }
        }).catch((error) => { });
    }
    useEffect(() => {
        // if (JSON.parse(localStorage.getItem('user')) == null) {
        //     window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/signin"
        // } else {

        // }
        if (JSON.parse(localStorage.getItem('user')) != null) {
            let userid = JSON.parse(localStorage.getItem('user')).id
            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userid}`).then(res => res.json()).then(result => {
                if (result.profilePhoto == undefined || result.profilePhoto == "") {
                    if (result.verified) {
                        let direction = 0
                        if (result.source == "google") {
                            direction = 1
                        } else {
                            direction = 0
                        }
                        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail/${direction}`
                    } else {
                        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
                    }
                } else {
                    getFetchUsers()

                }
            }).catch((error) => { });
        } else {
            getFetchUsers()

        }
    }, [])


    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter.filterState)
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
    sublist = sublist.filter((elt) => {

        if (search == "") {
            return elt
        } else {
            if (elt.intTitle.includes(search)) {
                return elt
            }
        }
    })
    const opportunityPerPage = 5
    const pagination = Math.ceil(sublist.length / opportunityPerPage);
    const pageNumbers = []
    for (var i = 1; i <= pagination; i++) {
        pageNumbers.push(i)
    }
    var start = (startPage * opportunityPerPage) - opportunityPerPage
    var end = startPage * opportunityPerPage
    const selectedopportunitylist = sublist.slice(start, end);

    console.log("startpage" + startPage)
    console.log("pageNumber" + pageNumbers[pageNumbers.length - 1])
    console.log(startPage != pageNumbers[pageNumbers.length - 1])
    console.log(startPage == 1)
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
                                <MDBCol >
                                    <form className="form-inline mt-4 mb-4">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input onChange={(event) => { setsearch(event.target.value) }} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                    </form>
                                </MDBCol>                                <img src="./Images/searchnotfound.png" alt="" />
                                <h3>No results found on the section</h3>
                                <p>Try again</p>
                            </div> : <div className="opportunities-container  col-xl-8">
                                <MDBCol >
                                    <form className="form-inline mt-4 mb-4">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input onChange={(event) => { setsearch(event.target.value) }} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                    </form>
                                </MDBCol>                                {selectedopportunitylist.map((opportunity) => {
                                    return <Opportunity data={opportunity} />
                                })}
                            </div>}

                        </div>

                    </div>
                    <div className="opportunity-pagination nav-links">
                        {startPage != 1 ?
                            <a className="back opportunity-page-numbers"
                                onClick={() => {
                                    setStartPage(startPage - 1)

                                }}> Back </a>
                            :
                            ""
                        }
                        {pageNumbers.map((page) => {
                            return (
                                <div>
                                    <a className="opportunity-page-numbers" style={page == startPage ? { background: "#6787FE", color: "white" } : {}} onClick={() => { setStartPage(page) }}>{page}</a>
                                </div>
                            )
                        })
                        }
                        {startPage < pageNumbers[pageNumbers.length - 1] ?
                            <a className="next opportunity-page-numbers"
                                onClick={() => {
                                    if (startPage < pagination) {
                                        setStartPage(startPage + 1)
                                    } else {
                                        setStartPage(startPage)
                                    }
                                }}>Next </a>
                            :
                            ""
                        }
                    </div>
                </main>
                <Footer />
            </FadeIn>

        )
    }
}

export default OpportunityPage