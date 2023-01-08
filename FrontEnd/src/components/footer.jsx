import React from 'react';
import '../css/footer.css'
const Footer = () => {
    return (
        <footer class="bg-light text-center footercont">
            <div class="container p-4">

                <section class="">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{width:"35%"}}>
                        <h5 class="text-uppercase">ProLancer</h5>
                        <p className="footertext">328 Queensberry Street, North Mellbourne VIC 3051, Australia. support@sabawidevs.com</p>
                        <section class="">
                            <form action="">
                                <div class="row d-flex justify-content-center">
                                <div class="col-md-5 col-12">
                                    <div class="form-outline mb-4">
                                        <input type="email" id="form5Example2" class="form-control" placeholder='Email address'/>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary mb-4">
                                    Subscribe
                                    </button>
                                </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0" style={{width:"20%"}}>
                        <h5 class="text-uppercase">Categories</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-dark">video & Animation</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Digital Marketing</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Graphics & Design</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Business</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-dark">video & Animation</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Digital Marketing</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Graphics & Design</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Business</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Visit us on</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-dark">video & Animation</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Digital Marketing</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Graphics & Design</a>
                            </li>
                            <li>
                            <a href="#!" class="text-dark">Business</a>
                            </li>
                        </ul>
                    </div>

                </div>

                </section>


            </div>

            <div class="text-center p-3">
                © 2023 Copyright:
                <a class="text-dark" href="https://mdbootstrap.com/">SabawiDevs</a>
            </div>
        </footer>
    );
}

export default Footer;
