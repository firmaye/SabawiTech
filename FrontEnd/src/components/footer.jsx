import React from 'react'
import '../css/footer.css'
const Footer = () => {
    return (
        <footer className="bg-light text-center footercont">
            <div className="container p-4">

                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">ProLancer</h5>
                            <p className="footertext">328 Queensberry Street, North Mellbourne VIC 3051, Australia. support@sabawidevs.com</p>
                            <section className="">
                                <form action="">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-5 col-12">
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form5Example2" className="form-control" placeholder='Email address' />
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-4">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Categories</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">video & Animation</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Graphics & Design</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Business</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">video & Animation</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Graphics & Design</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Business</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Visit us on</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-dark">video & Animation</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Graphics & Design</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Business</a>
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
