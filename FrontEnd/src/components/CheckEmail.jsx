import React from 'react'
import "../css/checkemail.css"

const CheckEmail = () => {
    return (
        <div className="checkemailbody" width="100%" style={{ margin: "0", padding: "0 !", }}>
            <div
                style={{ display: "none", fontSize: "1px", maxHeight: "0px", maxWidth: "0px", opacity: "0", overflow: "hidden" }}>
            </div>
            <div style={{ margin: "0 auto" }} className="email-container">

                <table role="presentation" cellSpacing="0" cellPadding="0" width="100%" style={{ margin: "auto" }}>

                    <tr>
                        <td valign="middle" className="hero bg_white" style={{ padding: "3em 0 2em 0" }}>
                            <img src="/email.png" alt=""
                                style={{ width: "300px", height: "auto", margin: "auto", display: "block" }} />
                        </td>
                    </tr>
                    <tr style={{ width: "100%" }}>
                        <td valign="middle" className="hero bg_white" style={{ padding: "2em 0 4em 0" }}>
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <td>
                                        <div className="text" style={{ padding: "0 2.5em", textAlign: "center" }}>
                                            <h2 style={{ color: "#6787FE" }} >Please verify your email</h2>
                                            <h3>You Must First Verify Your Email For Your Account To Be Activated.</h3>
                                            <p><a href="/signin" className="btn btn-redirect">Redirect to Login</a></p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

            </div>

        </div>
    )
}

export default CheckEmail