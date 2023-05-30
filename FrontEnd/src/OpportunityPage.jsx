import React, { useEffect, useState } from 'react'
import "./css/opportunitypage.css"
import Navbar from './components/Navbar'
import OpportunityFilter from './components/OpportunityFilter'
import Opportunity from './components/Opportunity'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './components/Loading';
import { v4 } from 'uuid'
import FadeIn from "react-fade-in";
import NotAllowed from './components/NotAllowedModal'
import Footer from './components/footer'


import { MDBCol, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'



const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [search, setsearch] = useState("")
    const [hideFilter, sethideFilter] = useState(false)
    const [opportunitylist, setopportunitylist] = useState([])
    const [startPage, setStartPage] = useState(1);
    let getFetchUsers = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/internships`).then(res => res.json()).then(result => {
            if (result.message == "Unauthorized!") {
                window.sessionStorage.removeItem('user')
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
            } else {
                setloading(false)
                setopportunitylist(result)
            }
        }).catch((error) => { });
    }
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('user')) != null) {
            let userid = JSON.parse(sessionStorage.getItem('user')).id
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
    const currentFilter = useSelector((state) => state.filter.filterState)
    let sublist = opportunitylist.filter((elt) => {
        if (currentFilter.location.length == 0) {
            return elt
        } else {
            if (currentFilter.location.includes("remote")) {
                if (elt.intLocation.toLowerCase().trim() == "remote") {
                    return elt
                }
            }
            if (currentFilter.location.includes("office")) {
                if (elt.intLocation.toLowerCase().trim() == "office") {
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
                if (elt.intStatus.toLowerCase().trim() == "open") {
                    return elt
                }
            }
            if (currentFilter.status.includes("closed")) {
                if (elt.intStatus.toLowerCase().trim() == "closed") {
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
                if (elt.intType.toLowerCase().trim() == "paid") {
                    return elt
                }
            }
            if (currentFilter.type.includes("unpaid")) {
                if (elt.intType.toLowerCase().trim() == "unpaid") {
                    return elt
                }
            }
        }
    })
    sublist = sublist.filter((elt) => {

        if (search == "") {
            return elt
        } else {
            if (elt.intTitle.toLowerCase().trim().includes(search)) {
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
    let counter = 0
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
                    <Header title={"Internship"} />
                    <div className="main-content-container container">
                        <div className="main-content-container-child row">
                            {hideFilter ? <></> : <OpportunityFilter styleatscreen="d-none d-xl-block" />}


                            {sublist.length == 0 ? <div className="opportunities-container  col-xl-8 noresultscont">
                                <MDBCol >
                                    <form className="form-inline mt-4 mb-4" id="searchform">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input onChange={(event) => { setsearch(event.target.value) }} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                    </form>
                                </MDBCol>
                                {hideFilter ? <></> : <OpportunityFilter styleatscreen="d-block d-xl-none" />}
                                <img src="./Images/searchnotfound.png" alt="" />
                                <h3>No results found on the section</h3>
                                <p>Try again</p>
                            </div> : <div className="opportunities-container  col-xl-8">
                                <MDBCol >
                                    <form className="form-inline mt-4 mb-4" id="searchform">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input onChange={(event) => { setsearch(event.target.value) }} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                        <div className='m-2 d-block d-xl-none' >
                                            <FontAwesomeIcon icon={faFilter} onClick={() => {
                                                sethideFilter(!hideFilter)

                                            }} />
                                        </div>
                                    </form>
                                </MDBCol>
                                {hideFilter ? <></> : <OpportunityFilter styleatscreen="d-block d-xl-none" />}
                                {selectedopportunitylist.map((opportunity) => {
                                    return <Opportunity key={v4()} data={opportunity} />
                                })}

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