import React from 'react';
import '../css/footer.css'
const Footer = () => {
    return (
        <footer class="bg-light text-center footercont">
            <div class="container p-4">

                <section class="">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Navigation</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-dark">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-dark">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-dark">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Visit us on</h5>

                            <section class="mb-4 footersocial">
                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>

                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
                            </section>
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
