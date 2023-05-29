import React from 'react'
import '../css/footer.css'
const Footer = () => {
    return (
        <footer className="bg-light text-center footercont">
            <div className="container p-4">

                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Intrant</h5>
                            <p className="footertext">support@sabawidevs.com</p>
                            <section className="">
                                <h5 className="text-uppercase">Visit us on</h5>
                                <p className="footertext">Telegram : @sabawitech </p>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Categories</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">Web Development</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Graphics & Design</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Sales</a>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>


            </div>

            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">SabawiDevs</a>
            </div>
        </footer>
    )
}

export default Footer
