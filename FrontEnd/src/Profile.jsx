import React from 'react'
import ProfileImg from "./assets/profile.jpg"
import 'font-awesome/css/font-awesome.min.css';
import "./css/profile.css"
import Header from './components/Header';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import NameModal from './components/NameModal';
import TitleModal from './components/TitleModal';
import { useState } from 'react';
import SkillModal from './components/SkillModal';
import { useEffect } from 'react';
import EmploymentModal from './components/EmploymentAddModal';
import EducationModal from './components/EducationAddModal';
import LanguageModal from './components/LanguageAddModal';
const Profile = () => {
    const [selectedmodal, setselectedmodal] = useState("")
    const [profileinfo, setprofileinfo] = useState({})
    const [language, setlanguage] = useState([])
    const [previouswork, setpreviouswork] = useState([])
    const [skilllist, setskilllist] = useState([])
    const [employmenthistory, setemploymenthistory] = useState([])
    console.log(selectedmodal)
    useEffect(() => {
        fetch("user.json").then(res => res.json()).then(result => {
            setprofileinfo(result)
            setlanguage(result.language)
            setskilllist(result.skill)
            setpreviouswork(result.previousWork)
            setemploymenthistory(result.employmentHistory)
        }).catch((error) => { console.log(error) });
    }, [])

    return (
        <main>
            {
                selectedmodal == "" ? <></> : selectedmodal == "name" ? <NameModal /> : selectedmodal == "title" ? <TitleModal /> : selectedmodal == "skill" ? <SkillModal skilllist={skilllist} /> : selectedmodal == "employmentadd" ? <EmploymentModal /> : selectedmodal == "educationadd" ? <EducationModal /> : selectedmodal == "languagesadd" ? <LanguageModal /> : <></>
            }
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
                                                    <h1>{profileinfo.firstName + " " + profileinfo.lastName}</h1>
                                                </div>
                                                <div className="profile-location">
                                                    <div className="profile-location-city">Addis Ababa</div>,
                                                    <div className="profile-location-Country">Ethiopia</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-buttons">
                                            {/* <button className="see-public">Edit </button> */}
                                            <button onClick={() => { setselectedmodal("name") }} className="setting">Edit Profile Name And Location</button>
                                        </div>
                                        <div className="profile-buttons-mobile">
                                            <div className="col col-auto">
                                                <button onClick={() => { setselectedmodal("name") }} className="profile-edit-btn">
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
                                <div className="profile-edit-profile-container">

                                    <div className="profile-edit-profile">
                                        <div>
                                            Languages
                                        </div>
                                        <button onClick={() => { setselectedmodal("languagesadd") }} >
                                            <i className="fa fa-pencil" aria-hidden="true"></i>

                                        </button>
                                    </div>
                                    <div className="profile-edit-description">
                                        {language.map((element) => {
                                            return (<div>
                                                {element.languageName}
                                            </div>)
                                        })}
                                    </div>
                                </div>

                            </div>
                            <div className="profile-sidebar-container">
                                <div className="profile-edit-profile-container">

                                    <div className="profile-edit-profile">
                                        <div>
                                            Education
                                        </div>
                                        <button onClick={() => { setselectedmodal("educationadd") }} >
                                            <i className="fa fa-pencil" aria-hidden="true"></i>

                                        </button>
                                    </div>
                                    <div className="profile-edit-description">
                                        {language.map((element) => {
                                            return (<div>
                                                {element.languageName}
                                            </div>)
                                        })}
                                    </div>
                                </div>

                            </div>
                            <div className="profile-sidebar-container">
                                <div className="profile-edit-profile-container">

                                    <div className="profile-edit-profile">
                                        <div>
                                            Email
                                        </div>
                                        <button>
                                            <i className="fa fa-pencil" aria-hidden="true"></i>

                                        </button>
                                    </div>
                                    <div className="profile-edit-description">
                                        {language.map((element) => {
                                            return (<div>
                                                {element.languageName}
                                            </div>)
                                        })}
                                    </div>
                                </div>

                            </div>
                            <div className="profile-sidebar-container">
                                <div className="profile-edit-profile-container">

                                    <div className="profile-edit-profile">
                                        <div>
                                            Phone Number
                                        </div>
                                        <button>
                                            <i className="fa fa-pencil" aria-hidden="true"></i>

                                        </button>
                                    </div>
                                    <div className="profile-edit-description">
                                        {language.map((element) => {
                                            return (<div>
                                                {element.languageName}
                                            </div>)
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" profile-personal-description-container col min-width-0">
                            <div className="profile-personal-description">
                                <div className=" profile-personal-description-title row">
                                    <div className="col">
                                        <h2>{profileinfo.title}</h2>
                                    </div>
                                    <div className="col col-auto">
                                        <button onClick={() => { setselectedmodal("title") }} className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row profile-personal-description-details">
                                    <div className="col">
                                        {profileinfo.titleOverview}
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
                                        <a href='/addportifolio' className="profile-edit-btn">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="row profile-portifolio-description-details">
                                    {
                                        previouswork.map((element) => {
                                            return (
                                                <div className="col-6 col-md-4">
                                                    <div className="portifolio-image-container">
                                                        <img className="col-12" src={ProfileImg} alt="" />
                                                        <div className="portifolio-image-container-icons">
                                                            <a href={`editportifolio/${element.id}`} className="profile-edit-btn">
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                                            </a>
                                                            <a className="profile-edit-btn">
                                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="poritfolio-title">
                                                        {element.workTitle}
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                            </div>
                            <div className="profile-skill-list">
                                <div className="profile-skill-list-title row">
                                    <div className="col">
                                        <h2>Skills </h2>

                                    </div>
                                    <div className="col col-auto">
                                        <button onClick={() => { setselectedmodal("skill") }} className="profile-edit-btn">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="skill-list">
                                    {
                                        skilllist.map((element) => {
                                            return (<div className="skills">
                                                {element.skillName}
                                            </div>)
                                        })
                                    }
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
                                <button onClick={() => { setselectedmodal("employmentadd") }} className="profile-edit-btn">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>

                        </div>
                        {employmenthistory.map((element) => {

                            return (<div className="profile-employment-history-details">
                                <div className="profile-employment-history-detail">
                                    <div className=" profile-employment-history-detail-title">
                                        <div className="">
                                            {element.empRole} | {element.empLocation}
                                        </div>
                                        <div className="">
                                            <button className="profile-edit-btn">
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row profile-employment-history-detail-description">

                                        <div className="profile-employment-history-detail-date">
                                            {element.empPeriod}
                                        </div>
                                        <div className="profile-employment-history-detail-content">
                                            {element.empDescription}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className=" profile-employment-history-container">
                    <div className=" profile-employment-history">
                        <div className="profile-employment-title">
                            <div className="">
                                <h2>Certification</h2>
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