import React, { useEffect, useState } from 'react'
import "./css/opportunitypage.css"
import Navbar from './components/Navbar'
import OpportunityFilter from './components/OpportunityFilter'
import Opportunity from './components/Opportunity'
import Header from './components/Header'
const OpportunityPage = () => {
    const [loading, setloading] = useState(true)
    const [opportunitylist, setopportunitylist] = useState([])
    let getFetchUsers = () => {
        // setloading(
        //     true
        // )
        fetch("opportunity.json").then(res => res.json()).then(result => {
            setloading(false)
            console.log(result.opportunities)
            setopportunitylist(result.opportunities)
        }).catch(console.log);
        ;
    }
    useEffect(() => {
        getFetchUsers()
    }, [])
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
                            {opportunitylist.map((opportunity) => {

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