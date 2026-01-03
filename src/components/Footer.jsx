import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 about-widget">
                            <h4>About US</h4>
                            <p>Full Stack Web Developer specializing in scalable,
                                high-performance applications with ASP.NET Core and React/Node.js.
                            </p>
                        </div>

                        <div className="col-md-3 policy-widget">
                            <h4>Our Policy</h4>
                            <ul className="info">
                                <a href="#">Privacy Policy</a>
                                <br></br>
                                <a href="#">Terms & Conditions</a>
                            </ul>
                        </div>

                        <div className="col-md-3 customer-care">
                            <h4>Contact US</h4>
                            <ul className="info">
                                <p>01935394335</p>
                                <p>devrahim2022@gmail.com</p>
                            </ul>
                        </div>

                        <div className="col-md-3 subscription-widget">
                            <h4>Subscribe Us</h4>
                            <p>Thank's for subscribing us</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"></input>
                                <button className="btn btn-success" type="button" id="button-addon2">
                                    <i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                            <p>10/3/A R.N.D Road Lalbagh Dhaka - 1211</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 follow-us">
                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/abdur.rahim.771362" target="_blank">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="https://twitter.com/YOUR_TWITTER" target="_blank">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/abdur-rahim-729780256/" target="_blank">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@ESSMARTIT-u5z" target="_blank">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/AbdurRahim1994?tab=repositories" target="_blank">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="https://www.linkedin.com/in/abdur-rahim-729780256/" target="_blank">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="sub-footer">
                        <div className="row">
                            <div>
                                <p className="text-center fs-6 fw-bolder">Copyright © <span>2025</span> <span>MD. Abdur Rahim</span> All rights reserved.</p>
                            </div>
                            <div>
                                <a href="#home" className="scroll-to-top">
                                    Go to Top
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;