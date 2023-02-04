import React from 'react'
import { useState } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../css/checkemail.css"
import ErrorModal from './ErrorModal'
import Loading from './Loading'
import SuccessModal from './SuccessModal'
import { setModal } from '../redux/profilemodal';
import { useEffect } from 'react'

const CheckEmail = () => {
    const [verified, setverified] = useState("")
    const [verificationerror, setverificationerror] = useState(true)
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    const params = useParams()
    const currentModal = useSelector((state) => state.profileModal.openedmodal)

    const resendEmail = (event) => {
        event.preventDefault()
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${params.id}`).then(res => res.json()).then(result => {
            if (result.email != undefined) {
                let body = {
                    email: result.email
                }
                body = JSON.stringify(body)
                fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/resendlink`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body
                }).then(res => res.json()).then(result => {
                    if (result.success) {
                        dispatch(setModal("success"))
                    } else {
                        dispatch(setModal("error"))
                    }
                }).catch((error) => { setverified(false) });
            }
        }).catch((error) => { setverified(false) });
    }
    useEffect(() => {

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/verify/${params.id}/${params.token}`).then(res => res.json()).then(result => {
            setloading(false)
            setverified(result.success)
            if (!result.success) {
                if (result.message) {

                    setverificationerror("verified")
                } else {
                    setverificationerror("notverified")

                }
            }
        }).catch((error) => { setverified(false) });


    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            {currentModal == "success" ? <SuccessModal />
                : currentModal == "error" ? <ErrorModal />
                    : <></>}
            <div className="checkemailbody" width="100%" style={{ margin: "0", padding: "0 !", }}>
                <div
                    style={{ display: "none", fontSize: "1px", maxHeight: "0px", maxWidth: "0px", opacity: "0", overflow: "hidden" }}>
                </div>
                <div style={{ margin: "0 auto" }} className="email-container">

                    <table role="presentation" cellSpacing="0" cellPadding="0" width="100%" style={{ margin: "auto" }}>

                        <tr>
                            <td valign="middle" className="hero bg_white" style={{ padding: "3em 0 2em 0" }}>
                                {verified ? <img src="/Success.png" alt=""
                                    style={{ width: "300px", height: "auto", margin: "auto", display: "block" }} /> : <img src="/Error.png" alt=""
                                        style={{ width: "300px", height: "auto", margin: "auto", display: "block" }} />}

                            </td>
                        </tr>
                        <tr style={{ width: "100%" }}>
                            <td valign="middle" className="hero bg_white" style={{ padding: "2em 0 4em 0" }}>
                                <table style={{ width: "100%" }}>
                                    <tr>
                                        <td>
                                            <div className="text" style={{ padding: "0 2.5em", textAlign: "center" }}>

                                                {verified ? <h2 style={{ color: "#6787FE" }} >Email Verified Successfully</h2> :
                                                    <h2 style={{ color: "#6787FE" }} >Email Verification failed Please Try Again</h2>}
                                                {verified ? <h3>Please Continue To The Next Page</h3> : verificationerror == "Invalid link" ? <h3>Invalid Link Please Try Again</h3> :
                                                    <h3>You Must First Verify Your Email For Your Account To Be Activated.</h3>}
                                                {verified ? <p><a href="/signin" className="btn btn-redirect">Continue To Login</a></p> :
                                                    <p><a href="/signin" onClick={resendEmail} className="btn btn-redirect">Resend Email</a></p>}


                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                </div>

            </div>
        </div>
    )

}

export default CheckEmail