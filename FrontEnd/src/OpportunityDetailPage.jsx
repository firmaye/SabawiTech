import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import "./css/opportunitydetail.css"
import Loading from './components/Loading';

import FadeIn from "react-fade-in";

const OpportunityDetailPage = () => {
    const [opportunity, setopportunity] = useState({})
    const [requiredSkill, setrequiredskill] = useState([])
    const params = useParams()
    const [submittedproposal, setsubmittedproposal] = useState({
    })
    const [loading, setloading] = useState(true)
    const changepropsaltext = (value) => {
        let updatedValue = { "letterDescription": value }
        setsubmittedproposal(previousState => ({
            ...previousState,
            ...updatedValue
        }
        )
        );
        console.log(submittedproposal)
    }
    const sendpropsal = () => {
        console.log(submittedproposal)
        fetch('http://localhost:8080/api/coverLetters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submittedproposal),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {

        let paramsid = params.id

        fetch(`http://localhost:8080/api/internships/${paramsid}`).then(res => res.json()).then(result => {


            const found = result
            console.log(found.requiredSkill)
            let skillsarray = found.requiredSkill.split(",")
            setopportunity(found)
            setsubmittedproposal({

                "sender": "currentperson",
                "receiverCompany": found.companyName,
                "letterDescription": "",
                "intPostId": found._id,
                "status": ""

            })
            console.log(skillsarray)
            setrequiredskill(skillsarray)
            setloading(false)

            // opportunity.requiredSkill.map((element) => {
            //     console.log(element)
            // })
        }).catch((error) => { console.log(error) });

    }, [])
    if (loading) {
        return (
            <Loading />)
    }
    return (
        <FadeIn>
            <main>
                <Navbar />
                <Header title={"Project Detail"} />
                <section className="single-opportunity-container pt-120 pb-95">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 single-opportunity-detail">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Status</span>
                                                <h6>{opportunity.intStatus}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Company Name</span>
                                                <h6>{opportunity.companyName}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Location</span>
                                                <h6>{opportunity.intLocation}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Type</span>
                                                <h6>{opportunity.intType}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Duration</span>
                                                <h6>{opportunity.intDuration}</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <i className="fa fa-id-card"></i>
                                            </div>
                                            <div className="my-auto">
                                                <span>Seller type</span>
                                                <h6>Student</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-opportunity-content">
                                    <h4>{opportunity.intTitle}</h4>
                                    <p>{opportunity.intDescription}</p>
                                </div>
                                <div className="single-opportunity-skills-required">
                                    <h2 className="mb-4">Skills Required</h2>
                                    <div>
                                        {
                                            // console.log(opportunity.requiredSkill)
                                            // console.log(requiredSkill)
                                            // opportunity.requiredSkill
                                            requiredSkill.map((element) => {
                                                return (<div className="skills">
                                                    {element}
                                                </div>)
                                            })

                                        }


                                    </div>
                                </div>
                                {opportunity.intStatus == "open" ?
                                    <div className="single-opportunity-proposal-form">
                                        <h2 className="mb-4">Send Proposal</h2>
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                        <input type="number" className="form-control" />
                                    </div> */}
                                            {/* <div className="col-md-6">
                                        <select className="form-control">
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                        </select>
                                    </div> */}
                                            <div className="col-md-12">
                                                <textarea onChange={(data) => { changepropsaltext(data.target.value) }} className="form-control" name="" id="" cols="30" rows="10"></textarea>
                                                {/* <input type="number" className="form-control">  */}
                                            </div>
                                            <div className="col d-flex justify-content-center">

                                                <button onClick={() => { sendpropsal() }} className=" single-opportunity-submit-proposal">
                                                    Submit a Proposal
                                                </button>
                                            </div>
                                        </div>
                                    </div> : <></>}

                            </div>
                            <div className="col-lg-4 position-relative single-opportunity-description">
                                <div className="single-opportunity-sidebar">
                                    <div className="single-opportunity-sidebar-part">
                                        <div className="text-center">
                                            {/* <h5>Budget</h5>
                                        <h1>$340</h1>
                                        <span>Project type:Fixed</span> */}
                                            <div className="single-opportunity-sidebar-buttons">

                                                {/* <button className="single-opportunity-wishlist-proposal">
                                                Wishlist Project
                                            </button> */}
                                            </div>
                                        </div>
                                        <ul className="single-opportunity-sidebar-requirements mt-5 mb-3">
                                            <li className="text-left">
                                                Status :
                                                <b className="float-end">{opportunity.intStatus}</b>
                                            </li>
                                            {/* <li className="text-left">
                                            Company Name:
                                            <b className="float-end">{opportunity.companyName}</b>
                                        </li> */}
                                            <li className="text-left">
                                                Location:
                                                <b className="float-end">{opportunity.intLocation}</b>
                                            </li>
                                            <li className="text-left">
                                                Type:
                                                <b className="float-end">{opportunity.intType}</b>
                                            </li>
                                            <li className="text-left">
                                                Duration:
                                                <b className="float-end">{opportunity.intDuration}</b>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="single-opportunity-sidebar-part">
                                    <div className="text-center">
                                        <h5>Budget</h5>
                                        <h1>$340</h1>
                                        <span>Project type:Fixed</span>
                                        <div className="single-opportunity-sidebar-buttons">
                                            <button className="single-opportunity-submit-proposal">
                                                Submit a Proposal
                                            </button>
                                            <button className="single-opportunity-wishlist-proposal">
                                                Wishlist Project
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="single-opportunity-sidebar-requirements mt-5 mb-3">
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                        <li className="text-left">
                                            Seller Type :
                                            <b className="float-end">Student</b>
                                        </li>
                                    </ul>
                                </div> */}
                                    {/* <div className="single-opportunity-sidebar-part"></div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="pt-120">
                        <h2 className="mb-5">Suggested projects</h2>
                        <div className="suggested-projects-content">
                            <div className="suggested-projects-featured">
                                Featured
                            </div>
                            <div className="suggested-projects-profile text-center">
                                <div>

                                    <img src="./profile.jpg" className="suggested-projects-profile-img" alt="" />
                                    <h5 className="suggested-projects-profile-name">Bayley Robertson</h5>
                                </div>
                                <div className="suggested-projects-profile-title">
                                    Swift / Swift Developer for B2B IOS apps
                                </div>
                                <ul className="mb-0">
                                    <li>
                                        <i className="fa fa-bar-chart"></i>
                                        <div>Hourly</div>
                                    </li>
                                    <li>
                                        <i className="fa fa-bar-chart"></i>
                                        <div>Hourly</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                        {/* <div className="suggested-projects-parent-container">

                        <div className="row" >

                            <div className="col-md-4 " >
                                <div className="suggested-project-item ">
                                    <div className="suggested-project-featured-post">Featured</div>
                                    <div className="text-center">
                                        <a className="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a className="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul className="list-inline suggested-project-profile-detail">
                                            <li className="list-inline-item"> Fixed</li>
                                            <li className="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <div className="suggested-project-item ">
                                    <div className="suggested-project-featured-post">Featured</div>
                                    <div className="text-center">
                                        <a className="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a className="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul className="list-inline suggested-project-profile-detail">
                                            <li className="list-inline-item"> Fixed</li>
                                            <li className="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <div className="suggested-project-item ">
                                    <div className="suggested-project-featured-post">Featured</div>
                                    <div className="text-center">
                                        <a className="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a className="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul className="list-inline suggested-project-profile-detail">
                                            <li className="list-inline-item"> Fixed</li>
                                            <li className="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <div className="suggested-project-item ">
                                    <div className="suggested-project-featured-post">Featured</div>
                                    <div className="text-center">
                                        <a className="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a className="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul className="list-inline suggested-project-profile-detail">
                                            <li className="list-inline-item"> Fixed</li>
                                            <li className="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <div className="suggested-project-item ">
                                    <div className="suggested-project-featured-post">Featured</div>
                                    <div className="text-center">
                                        <a className="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a className="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul className="list-inline suggested-project-profile-detail">
                                            <li className="list-inline-item"> Fixed</li>
                                            <li className="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>





                </section >

            </main >
        </FadeIn>
    )
}

export default OpportunityDetailPage