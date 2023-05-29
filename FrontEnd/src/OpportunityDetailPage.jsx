import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import "./css/opportunitydetail.css"
import Loading from './components/Loading';
import FadeIn from "react-fade-in";
import Footer from './components/footer'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from './redux/profilemodal'
import SuccessModal from './components/SuccessModal'
import ErrorModal from './components/ErrorModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFlag, faIdCard } from '@fortawesome/free-solid-svg-icons'
import InappropriateModal from './components/Inappropriate'
// code used to create show more functionality once proposal is sent

let showMoreUtils = (element, excerpt) => {

    const linkText = element.textContent.toLowerCase();
    console.log(linkText)
    if (linkText == "show more") {
        element.textContent = "Show less";
        excerpt.classList.remove("excerpt-hidden");
        excerpt.classList.add("excerpt-visible");
    } else {
        element.textContent = "Show more";
        excerpt.classList.remove("excerpt-visible");
        excerpt.classList.add("excerpt-hidden");
    }

}



let showMoreExcerptWidget = (showMoreLinksTarget, excerptTarget) => {
    const showMoreLinks = document.querySelectorAll(showMoreLinksTarget);
    showMoreLinks.forEach(function (link) {
        const excerpt = link.previousElementSibling.querySelector(excerptTarget);
        showMoreUtils(link, excerpt);
    });
}
//end of code used to create show more functionality once proposal is sent


const OpportunityDetailPage = () => {
    let openInappropriateModal = () => {
        dispatch(setModal("inappropriate"))

    }
    const [opportunity, setopportunity] = useState({})
    const [error, seterror] = useState()
    const [requiredSkill, setrequiredskill] = useState([])
    const [sent, setsent] = useState()
    const [sentproposal, setsentproposal] = useState()
    const [submittedproposal, setsubmittedproposal] = useState({
    })
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    const changepropsaltext = (value) => {
        let updatedValue = { "letterDescription": value }
        setsubmittedproposal(previousState => ({
            ...previousState,
            ...updatedValue
        }

        )
        );
    }
    const sendpropsal = () => {

        if (submittedproposal.letterDescription == "") {
            seterror("Proposal Cannot be blank")
        } else {

        }
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/coverLetters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submittedproposal),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setModal("success"))
            })
            .catch((error) => {
                dispatch(setModal("error"))
                console.error('Error:', error);
            });
    }
    const params = useParams()

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('user')) == null) {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
        } else {
            let paramsid = params.id
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
                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/internships/${paramsid}`).then(res => res.json()).then(result => {
                        const found = result
                        let skillsarray = found.requiredSkill.split(",")
                        setopportunity(found)
                        setsubmittedproposal({

                            "sender": userid,
                            "receiverCompany": found.companyName,
                            "letterDescription": "",
                            "intPostId": found._id,
                            "status": ""

                        })
                        setrequiredskill(skillsarray)
                        setloading(false)

                        // opportunity.requiredSkill.map((element) => {
                        // })
                    }).catch((error) => { });
                    let body = {
                        sender: userid,
                        intPostId: paramsid
                    }
                    body = JSON.stringify(body)
                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/check/proposal`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: body
                    }).then(res => res.json()).then(result => {
                        setsent(result.sent)
                        setsentproposal(result.content.letterDescription)
                        setloading(false)
                    }).catch((error) => { });
                }
            }).catch((error) => { });
        }


    }, [])
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    if (loading) {
        return (
            <Loading />)
    }
    return (
        <FadeIn>
            {currentModal == "success" ? <SuccessModal />
                : currentModal == "error" ? <ErrorModal /> : currentModal == "inappropriate" ? <InappropriateModal postId={params.id} postName={opportunity.intTitle} /> : <></>}
            <main style={{ marginBottom: "40px" }}>
                <Navbar />
                <Header title={"Project Detail"} />
                <section className="single-opportunity-container pt-120 pb-95">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 single-opportunity-detail">
                                {sent ?
                                    <div className="row" style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
                                        <div className="col-xl-8" >
                                            <div className="single-opportunity-requirement"  >
                                                <div className="my-auto">
                                                    <FontAwesomeIcon icon={faCheck} size="2x" style={{ paddingRight: "10px" }} />
                                                </div>
                                                <div className="my-auto">
                                                    <span style={{ fontSize: "25px" }}>Applied Successfully</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div> : <></>}




                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="single-opportunity-requirement">
                                            <div className="my-auto">
                                                <FontAwesomeIcon icon={faIdCard} size="2x" style={{ paddingRight: "10px" }} />
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
                                                <FontAwesomeIcon icon={faIdCard} size="2x" style={{ paddingRight: "10px" }} />
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
                                                <FontAwesomeIcon icon={faIdCard} size="2x" style={{ paddingRight: "10px" }} />
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
                                                <FontAwesomeIcon icon={faIdCard} size="2x" style={{ paddingRight: "10px" }} />
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
                                                <FontAwesomeIcon icon={faIdCard} size="2x" style={{ paddingRight: "10px" }} />
                                            </div>
                                            <div className="my-auto">
                                                <span>Duration</span>
                                                <h6>{opportunity.intDuration}</h6>
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
                                            // opportunity.requiredSkill
                                            requiredSkill.map((element) => {
                                                return (<div className="skills">
                                                    {element}
                                                </div>)
                                            })

                                        }
                                    </div>
                                </div>
                                <div className='inappropriate-button'
                                    onClick={() => {
                                        openInappropriateModal()
                                    }} >
                                    <FontAwesomeIcon icon={faFlag} size="1x" style={{ paddingRight: "10px" }} />
                                    <div className='inappropriate-button-text'  >Flag As Inappropriate</div></div>
                                {opportunity.intStatus == "closed" ? <div className="single-opportunity-proposal-form">
                                    <h2 className="mb-4">Send Proposal</h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className='ml-5' style={{ color: "#6366f1" }}>Internship Opportunity is Closed</h3>
                                        </div>
                                    </div>
                                </div> : sent == true ? <div className="single-opportunity-proposal-form">
                                    <h2 className="mb-4" style={{ color: "#6366f1" }} >Proposal</h2>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sentproposal">
                                                <div className="container">
                                                    <div className="block">
                                                        <div className="content">
                                                            <p className="js-excerpt excerpt-hidden">
                                                                {sentproposal}</p>
                                                        </div>
                                                        <a onClick={(event) => { event.preventDefault(); showMoreExcerptWidget('.js-show-more', '.js-excerpt'); }} role="button" href="#" className="js-show-more">Show more</a>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* <input type="number" className="form-control">  */}
                                        </div>
                                        <div style={{ color: "red", textAlign: "center" }}>
                                            {error}
                                        </div>
                                    </div>
                                </div> :
                                    <div className="single-opportunity-proposal-form">
                                        <h2 className="mb-4">Send Proposal</h2>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <textarea onChange={(data) => { changepropsaltext(data.target.value) }} className="form-control" name="" id="" cols="30" rows="10"></textarea>
                                                {/* <input type="number" className="form-control">  */}
                                            </div>
                                            <div style={{ color: "red", textAlign: "center" }}>
                                                {error}
                                            </div>
                                            <div className="col d-flex justify-content-center">

                                                <button onClick={() => { sendpropsal() }} className=" single-opportunity-submit-proposal">
                                                    Submit a Proposal
                                                </button>
                                            </div>
                                        </div>
                                    </div>}

                            </div>
                            <div className="col-lg-4 d-none d-lg-block position-relative single-opportunity-description">
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
                                        <div classnames="">
                                            <a href={"/opportunitydetail"} classnames="opportunity-button">
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
                                        <div classnames="">
                                            <a href={"/opportunitydetail"} classnames="opportunity-button">
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
                                        <div classnames="">
                                            <a href={"/opportunitydetail"} classnames="opportunity-button">
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
                                        <div classnames="">
                                            <a href={"/opportunitydetail"} classnames="opportunity-button">
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
                                        <div classnames="">
                                            <a href={"/opportunitydetail"} classnames="opportunity-button">
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
            <Footer />
        </FadeIn>
    )
}

export default OpportunityDetailPage