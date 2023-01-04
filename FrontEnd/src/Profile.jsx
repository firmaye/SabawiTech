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
import CertificationModal from './components/CertificationAddModal';
import CertificationEditModal from './components/CertificationEditModal';
import EducationModal from './components/EducationAddModal';
import LanguageModal from './components/LanguageAddModal';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from './redux/profilemodal';
import EmailAndPhoneModal from './components/EditEmailAndPhoneModal';
import DeletePortifolioModal from './components/DeletePortifolioModal';
import EmploymentEditModal from './components/EmploymentEditModal';
import EducationEditModal from './components/EducationEditModal';
import ImageModal from './components/EditImageModal';
import SuccessModal from './components/SuccessModal';
import Loading from './components/Loading';
import FadeIn from "react-fade-in";
import ErrorModal from './components/ErrorModal';
import DeleteEducationModal from './components/DeleteEducationModal';
import DeleteEmploymentModal from './components/DeleteEmploymentModal';
import DeleteCertificationModal from './components/DeleteCertificationModal';
const Profile = () => {
    const [selectedemployment, setselectedemployment] = useState({})
    const [tobedeletededucation, settobedeletededucation] = useState({})
    const [selectededucation, setselectededucation] = useState({})
    const [selectedcertificate, setselectedcertificate] = useState({})
    const [tobedeletedemployment, settobedeletedemployment] = useState({})
    const [tobedeletedportifolio, settobedeletedportifolio] = useState({})
    const [tobedeletedcertification, settobedeletedcertification] = useState({})
    const [profileinfo, setprofileinfo] = useState({})
    const [language, setlanguage] = useState([])
    const [previouswork, setpreviouswork] = useState([])
    const [skilllist, setskilllist] = useState([])
    const [employmenthistory, setemploymenthistory] = useState([])
    const [certification, setcertification] = useState([])
    const [education, seteducation] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:8080/api/users/63b13cfd127ade2c12562493").then(res => res.json()).then(result => {
            console.log(result.certification)
            setprofileinfo(result)
            setlanguage(result.language)
            setskilllist(result.skill)
            setpreviouswork(result.previousWork)
            setemploymenthistory(result.employmentHistory)
            setcertification(result.certification)
            seteducation(result.education)
            setloading(false)
        }).catch((error) => { console.log(error) });
    }, [])
    function fileValue(value) {
        var path = value.value;
        var extenstion = path.split('.').pop();
        console.log(value.files[0])
        if (extenstion === "jpg" || extenstion === "svg" || extenstion === "jpeg" || extenstion === "png" || extenstion === "gif") {
            document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
            var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            document.getElementById("filename").innerHTML = filename;
        } else {
            alert("File not supported. Kindly Upload the Image of below given extension ")
        }
    }
    const currentModal = useSelector((state) => state.profileModal.openedmodal)
    const dispatch = useDispatch()
    if (loading) {
        return (
            <Loading />)
    }
    return (
        <FadeIn>
            <main>
                {
                    currentModal == "" ? <></> : currentModal == "name" ? <NameModal profileinfo={{ firstName: profileinfo.firstName, lastName: profileinfo.lastName, Username: profileinfo.Username, profilePhoto: profileinfo.profilePhoto, country: profileinfo.country, state: profileinfo.state }} />
                        : currentModal == "title" ? <TitleModal profileinfo={{ title: profileinfo.title, description: profileinfo.titleOverview }} />
                            : currentModal == "skill" ? <SkillModal skilllist={skilllist} />
                                : currentModal == "employmentadd" ? <EmploymentModal />
                                    : currentModal == "certificationadd" ? <CertificationModal />
                                        : currentModal == "educationadd" ? <EducationModal />
                                            : currentModal == "languagesadd" ? <LanguageModal language={language} />
                                                : currentModal == "emailandphone" ? <EmailAndPhoneModal emailandphone={{ email: profileinfo.email, phone: profileinfo.phoneNo }} />
                                                    : currentModal == "profileimage" ? <ImageModal image={profileinfo.profilePhoto} />
                                                        : currentModal == "deleteportifolio" ? <DeletePortifolioModal tobedeleted={tobedeletedportifolio} />
                                                            : currentModal == "deletecertification" ? <DeleteCertificationModal tobedeleted={tobedeletedcertification} />
                                                                : currentModal == "employmentedit" ? <EmploymentEditModal selected={selectedemployment} />
                                                                    : currentModal == "certificationedit" ? <CertificationEditModal selected={selectedcertificate} />
                                                                        : currentModal == "educationedit" ? <EducationEditModal selected={selectededucation} />
                                                                            : currentModal == "educationdelete" ? <DeleteEducationModal tobedeleted={tobedeletededucation} />
                                                                                : currentModal == "employmentdelete" ? <DeleteEmploymentModal tobedeleted={tobedeletedemployment} />
                                                                                    : currentModal == "success" ? <SuccessModal />
                                                                                        : currentModal == "error" ? <ErrorModal />
                                                                                            : <></>
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
                                                        <img src={`http://localhost:8080/${profileinfo.profilePhoto}`} alt="" />
                                                        <button onClick={() => { dispatch(setModal("profileimage")) }} className="profile-edit-btn">
                                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="profile-identity-detail ">
                                                    <div className=" d-flex align-items-center">
                                                        <h1>{profileinfo.firstName + " " + profileinfo.lastName}</h1>
                                                    </div>
                                                    <div className="profile-location">
                                                        <div className="profile-location-city">{profileinfo.state}</div>,
                                                        <div className="profile-location-Country">{profileinfo.country}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile-buttons">
                                                {/* <button className="see-public">Edit </button> */}
                                                <button onClick={() => { dispatch(setModal("name")) }} className="setting">Edit Profile Name And Location</button>
                                            </div>
                                            <div className="profile-buttons-mobile">
                                                <div className="col col-auto">
                                                    <button onClick={() => { dispatch(setModal("name")) }} className="profile-edit-btn">
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
                                            <button onClick={() => { dispatch(setModal(("languagesadd"))) }} >
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
                                            <button onClick={() => { dispatch(setModal(("educationadd"))) }} >
                                                <i className="fa fa-plus" aria-hidden="true"></i>

                                            </button>
                                        </div>
                                        <div className="profile-edit-description ">
                                            {education.map((element) => {
                                                return (<div className='flex-column mb-4'>
                                                    <div className="profile-edit-description-name-container">

                                                        <div className="profile-edit-description-name-container-child">

                                                            {element.schoolName}
                                                        </div>
                                                        <div className="profile-edit-profile-education">

                                                            <button onClick={() => { settobedeletededucation(element); dispatch(setModal(("educationdelete"))) }} >
                                                                <i className="fa fa-trash" aria-hidden="true"></i>

                                                            </button>
                                                        </div>
                                                        <div className="profile-edit-profile-education">

                                                            <button onClick={() => { setselectededucation(element); dispatch(setModal(("educationedit"))) }} >
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>

                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {element.dateAttended}
                                                    </div>
                                                </div>)
                                            })}
                                        </div>
                                    </div>

                                </div>
                                <div className="profile-sidebar-container">
                                    <div className="profile-edit-profile-container">

                                        <div className="profile-edit-profile">
                                            <div>
                                                Email And Phone Number
                                            </div>
                                            <button onClick={() => { dispatch(setModal(("emailandphone"))) }}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i>

                                            </button>
                                        </div>
                                        <div className="profile-edit-description">
                                            {profileinfo.email}
                                        </div>
                                        <div className="profile-edit-description">
                                            {profileinfo.phoneNo}
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
                                            <button onClick={() => { dispatch(setModal(("title"))) }} className="profile-edit-btn">
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
                                                            <img className="col-12" src={"http://localhost:8080/uploads/image/" + element.workThumbnail} alt="" />
                                                            <div className="portifolio-image-container-icons">
                                                                <a href={`editportifolio/${element._id}`} className="profile-edit-btn">
                                                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                                                </a>
                                                                <a onClick={() => { settobedeletedportifolio(element); dispatch(setModal(("deleteportifolio"))) }} className="profile-edit-btn">
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
                                            <button onClick={() => { dispatch(setModal(("skill"))) }} className="profile-edit-btn">
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
                                    <button onClick={() => { dispatch(setModal(("employmentadd"))) }} className="profile-edit-btn">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>

                            </div>
                            {employmenthistory.map((element) => {

                                return (<div className="profile-employment-history-details">
                                    <div className="profile-employment-history-detail">
                                        <div className=" profile-employment-history-detail-title">
                                            <div className="">
                                                {element.empRole} | {element.empCountry} , {element.empState}
                                            </div>
                                            <div className="">
                                                <button onClick={() => { setselectedemployment(element); dispatch(setModal(("employmentedit"))) }} className="profile-edit-btn">
                                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                                </button>
                                                <button onClick={() => { settobedeletedemployment(element); dispatch(setModal(("employmentdelete"))) }} className="profile-edit-btn">
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row profile-employment-history-detail-description">

                                            <div className="profile-employment-history-detail-date">
                                                {element.empAt}
                                            </div>
                                            <div className="profile-employment-history-detail-date">
                                                {element.empFrom} - {element.empTo}
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
                                    <button onClick={() => { dispatch(setModal(("certificationadd"))) }} className="profile-edit-btn">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            {certification.map((element) => {

                                return (
                                    <div className="profile-employment-history-details">
                                        <div className="profile-employment-history-detail">
                                            <div className=" profile-employment-history-detail-title">
                                                <div className="">
                                                    {element.certTitle} | {element.certProvider}
                                                </div>
                                                <div className="">
                                                    <button onClick={() => { setselectedcertificate(element); dispatch(setModal(("certificationedit"))) }} className="profile-edit-btn">
                                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                                    </button>
                                                    <button onClick={() => { settobedeletedcertification(element); dispatch(setModal(("deletecertification"))) }} className="profile-edit-btn">
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="row profile-employment-history-detail-description">

                                                <div className="profile-employment-history-detail-date">
                                                    {element.dateIssued}
                                                </div>
                                                <div className="profile-employment-history-detail-content">
                                                    {element.certLink}
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>

                </div>
            </main>
        </FadeIn>
    )
}

export default Profile