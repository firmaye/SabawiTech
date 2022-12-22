import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import "./css/opportunitydetail.css"

const OpportunityDetailPage = () => {
    const id = useParams()
    console.log(id)
    return (
        <main>
            <Navbar />
            <Header title={"Project Detail"} />
            <section class="single-opportunity-container pt-120 pb-95">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 single-opportunity-detail">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="single-opportunity-requirement">
                                        <div class="my-auto">
                                            <i class="fa fa-id-card"></i>
                                        </div>
                                        <div class="my-auto">
                                            <span>Seller type</span>
                                            <h6>Student</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-opportunity-content">
                                <h4>The Ultimate Guide to Start</h4>
                                <p>This is the content that will be described below Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Omnis, eos nemo aspernatur quasi quidem, atque sed quibusdam maiores natus nesciunt commodi
                                    incidunt voluptatem? Ipsa quo provident quis nemo quod eligendi. Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. A qui amet autem officiis deleniti tenetur, atque excepturi exercitationem nesciunt
                                    dolor nisi maxime, odio laudantium inventore? Qui ratione sequi voluptates fugit.</p>
                            </div>
                            <div class="single-opportunity-skills-required">
                                <h2 class="mb-4">Skills Required</h2>
                                <div>

                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                    <div class="skills">
                                        QA Specialist
                                    </div>
                                </div>
                            </div>
                            <div class="single-opportunity-proposal-form">
                                <h2 class="mb-5">Send Proposal</h2>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <select class="form-control">
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                            <option value="">Options to select</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">
                                        <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                        {/* <input type="number" class="form-control">  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 position-relative single-opportunity-description">
                            <div class="single-opportunity-sidebar">
                                <div class="single-opportunity-sidebar-part">
                                    <div class="text-center">
                                        <h5>Budget</h5>
                                        <h1>$340</h1>
                                        <span>Project type:Fixed</span>
                                        <div class="single-opportunity-sidebar-buttons">
                                            <button class="single-opportunity-submit-proposal">
                                                Submit a Proposal
                                            </button>
                                            <button class="single-opportunity-wishlist-proposal">
                                                Wishlist Project
                                            </button>
                                        </div>
                                    </div>
                                    <ul class="single-opportunity-sidebar-requirements mt-5 mb-3">
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                    </ul>
                                </div>
                                <div class="single-opportunity-sidebar-part">
                                    <div class="text-center">
                                        <h5>Budget</h5>
                                        <h1>$340</h1>
                                        <span>Project type:Fixed</span>
                                        <div class="single-opportunity-sidebar-buttons">
                                            <button class="single-opportunity-submit-proposal">
                                                Submit a Proposal
                                            </button>
                                            <button class="single-opportunity-wishlist-proposal">
                                                Wishlist Project
                                            </button>
                                        </div>
                                    </div>
                                    <ul class="single-opportunity-sidebar-requirements mt-5 mb-3">
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                        <li class="text-left">
                                            Seller Type :
                                            <b class="float-end">Student</b>
                                        </li>
                                    </ul>
                                </div>
                                <div class="single-opportunity-sidebar-part"></div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-120">
                        <h2 class="mb-5">Suggested projects</h2>
                        <div class="suggested-projects-content">
                            {/* <div class="suggested-projects-featured">
                                Featured
                            </div>
                            <div class="suggested-projects-profile text-center">
                                <div>

                                    <img src="./profile.jpg" class="suggested-projects-profile-img" alt="" />
                                    <h5 class="suggested-projects-profile-name">Bayley Robertson</h5>
                                </div>
                                <div class="suggested-projects-profile-title">
                                    Swift / Swift Developer for B2B IOS apps
                                </div>
                                <ul class="mb-0">
                                    <li>
                                        <i class="fa fa-bar-chart"></i>
                                        <div>Hourly</div>
                                    </li>
                                    <li>
                                        <i class="fa fa-bar-chart"></i>
                                        <div>Hourly</div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="suggested-projects-parent-container">

                        <div class="row" >

                            <div class="col-md-4 " >
                                <div class="suggested-project-item ">
                                    <div class="suggested-project-featured-post">Featured</div>
                                    <div class="text-center">
                                        <a class="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a class="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul class="list-inline suggested-project-profile-detail">
                                            <li class="list-inline-item"> Fixed</li>
                                            <li class="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " >
                                <div class="suggested-project-item ">
                                    <div class="suggested-project-featured-post">Featured</div>
                                    <div class="text-center">
                                        <a class="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a class="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul class="list-inline suggested-project-profile-detail">
                                            <li class="list-inline-item"> Fixed</li>
                                            <li class="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " >
                                <div class="suggested-project-item ">
                                    <div class="suggested-project-featured-post">Featured</div>
                                    <div class="text-center">
                                        <a class="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a class="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul class="list-inline suggested-project-profile-detail">
                                            <li class="list-inline-item"> Fixed</li>
                                            <li class="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " >
                                <div class="suggested-project-item ">
                                    <div class="suggested-project-featured-post">Featured</div>
                                    <div class="text-center">
                                        <a class="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a class="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul class="list-inline suggested-project-profile-detail">
                                            <li class="list-inline-item"> Fixed</li>
                                            <li class="list-inline-item"> 1-5 Days</li>
                                        </ul>
                                        <div className="">
                                            <a href={"/opportunitydetail"} className="opportunity-button">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 " >
                                <div class="suggested-project-item ">
                                    <div class="suggested-project-featured-post">Featured</div>
                                    <div class="text-center">
                                        <a class="suggested-project-profile-image-container" href="https://themebing.com/wp/prolancer/buyers/david-parker/" tabindex="-1">
                                            <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-150x150.jpg" alt="" />
                                            <h5>David Parker</h5>
                                        </a>
                                        <a class="suggested-project-profile-title" href="https://themebing.com/wp/prolancer/projects/english-content-writer-for-fintech/" tabindex="-1"><h3>English content writer for Fintech</h3></a>
                                        <ul class="list-inline suggested-project-profile-detail">
                                            <li class="list-inline-item"> Fixed</li>
                                            <li class="list-inline-item"> 1-5 Days</li>
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
                    </div>
                </div>





            </section >

        </main >
    )
}

export default OpportunityDetailPage