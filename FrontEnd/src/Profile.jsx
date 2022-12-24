import React from 'react'
import ProfileImg from "./assets/profile.jpg"
import 'font-awesome/css/font-awesome.min.css';
import "./css/profile.css"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import NameModal from './components/NameModal';
import TitleModal from './components/TitleModal';
const Profile = () => {

    return (
        <main>
            {/* <NameModal /> */}
            <TitleModal />
            <Navbar />
            <Header title={"Profile"} />
            <div className="">
                <div className="profile-container">
                    <div className="profile-card profile-identity-container-parent  d-lg-block">
                        <div className="profile-header profile-card py-30">
                            <div className="row">
                                <div className="col">
                                    <div className="profile-identity-container">
                                        <div className="profile-identity">
                                            <div className="profile-img-container mr-10 mr-lg-30 position-relative">
                                                <div className="profile-photo">
                                                    <img src={ProfileImg} alt="" />
                                                </div>
                                            </div>
                                            <div className="profile-identity-detail ">
                                                <div className=" d-flex align-items-center">
                                                    <h1>Profile Name</h1>
                                                </div>
                                                <div className="profile-location">
                                                    <div className="profile-location-city">Addis Ababa</div>,
                                                    <div className="profile-location-Country">Ethiopia</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-buttons">
                                            <button className="see-public">Edit </button>
                                            <button className="setting">Edit Profile Name And Location</button>
                                        </div>
                                        <div className="profile-buttons-mobile">
                                            <div className="col col-auto">
                                                <button className="profile-edit-btn">
                                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-auto min-width-300 text-right">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-personal-description-container-parent row" >
                        <div className=" col-lg-4">
                            <div className="profile-sidebar-container">
                                <div className="profile-edit-profile">
                                    <div>
                                        Languages
                                    </div>
                                    <button>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="profile-edit-profile">
                                    <div>
                                        Education
                                    </div>
                                    <button>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="profile-edit-profile">
                                    <div>
                                        Edit Profile
                                    </div>
                                    <button>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>

                                    </button>
                                </div>
                                <div className="profile-edit-profile">
                                    <div>
                                        Edit Profile
                                    </div>
                                    <button>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>

                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className=" profile-personal-description-container col min-width-0">
                            <div className="profile-personal-description">
                                <div className=" profile-personal-description-title row">
                                    <div className="col">
                                        <h2>React/PHP Full Stack Web Developer</h2>
                                    </div>
                                    <div className="col col-auto">
                                        <button className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row profile-personal-description-details">
                                    <div className="col">

                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, optio! Aliquid
                                        consequatur
                                        libero cumque temporibus, enim perferendis praesentium ipsa nihil beatae id maiores
                                        consectetur asperiores? Perferendis eos sit illum temporibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae dolores
                                        corrupti,
                                        corporis enim totam vero beatae soluta quam facere praesentium minus reprehenderit
                                        nostrum? Veritatis dolor accusantium veniam distinctio harum!
                                    </div>
                                </div>
                            </div>
                            {/* <div className="profile-personal-description">
                                <div className=" profile-personal-description-title row">
                                    <div className="col">
                                        <h2>Work History</h2>
                                    </div>
                                    <div className="col col-auto">
                                        <button className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row profile-personal-description-details">
                                    <div className="col">
                                        No work yet.Once start getting hired on Upwork. your work with clients will show up
                                        here .

                                    </div>
                                </div>
                            </div> */}
                            <div className="profile-portifolio-description">
                                <div className=" profile-portifolio-description-title row">
                                    <div className="col">
                                        <h2>Portifolio</h2>
                                    </div>
                                    <div className="col col-auto">
                                        <button className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row profile-portifolio-description-details">
                                    <div className="col-6 col-md-4">
                                        <div className="portifolio-image-container">
                                            <img className="col-12" src={ProfileImg} alt="" />
                                        </div>
                                        <div className="poritfolio-title">
                                            Landing Page
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <div className="portifolio-image-container">
                                            <img className="col-12" src={ProfileImg} alt="" />
                                        </div>
                                        <div className="poritfolio-title">
                                            Landing Page
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <div className="portifolio-image-container">
                                            <img className="col-12" src={ProfileImg} alt="" />
                                        </div>
                                        <div className="poritfolio-title">
                                            Landing Page
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-skill-list">
                                <div className="profile-skill-list-title row">
                                    <div className="col">
                                        <h2>Skills </h2>

                                    </div>
                                    <div className="col col-auto">
                                        <button className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="skill-list">

                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                    <div className="skills">
                                        QA Specialist
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" profile-employment-history-container">
                    <div className=" profile-employment-history">
                        <div className="profile-employment-title">
                            <div className="">
                                <h2>Employment History</h2>
                            </div>
                            <div className="">
                                <button className="profile-edit-btn">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className="profile-employment-history-details">
                            <div className="profile-employment-history-detail">
                                <div className=" profile-employment-history-detail-title">
                                    <div className="">
                                        Intern | Intern Location
                                    </div>
                                    <div className="">
                                        <button className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row profile-employment-history-detail-description">

                                    <div className="profile-employment-history-detail-date">
                                        Jun 5 - jun 10
                                    </div>
                                    <div className="profile-employment-history-detail-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum fuga quod rerum
                                        inventore doloribus reiciendis iusto dicta dolorum distinctio, perferendis assumenda
                                        mollitia, repudiandae quos pariatur optio voluptatum voluptas. Animi!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deleniti harum?
                                        Qui
                                        laboriosam magni ratione atque quia exercitationem eos, officia doloremque assumenda
                                        rerum ipsam quam at, perferendis unde? Repudiandae, molestiae.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Profile