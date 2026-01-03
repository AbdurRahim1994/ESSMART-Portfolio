import React from 'react';
import image from '../assets/images/Profile.JPG';
import Header from './Header';
import Footer from './Footer';

const Feedback = () => {
    return (
        <>
            <section id="feedback" className="animate-on-scroll mt-5">
                <h2 className="section-heading">Client <span className="text-accent">Feedback</span></h2>
                <div className="container my-5">
                    <div id="infoCarousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000">
                                <div className="carousel-item-content bg-light rounded shadow-sm">
                                    <img src={image} className="d-block carousel-image mx-auto" alt="Profile Image 1"></img>

                                    <h4 className="mt-3 fw-bold">Jane Doe</h4>

                                    <p className="text-muted mb-2 designation">Senior Software Engineer</p>

                                    <p className="lead">Jane leads the development of our core API services
                                        and is a passionate advocate for clean code and efficient testing
                                        practices across all projects.
                                    </p>
                                </div>
                            </div>

                            <div className="carousel-item" data-bs-interval="5000">
                                <div className="carousel-item-content bg-light rounded shadow-sm">
                                    <img src={image} className="d-block carousel-image mx-auto" alt="Profile Image 2"></img>

                                    <h4 className="mt-3 fw-bold">John Smith</h4>

                                    <p className="text-muted mb-2 designation">Product Manager</p>

                                    <p className="lead">John is responsible for defining the product roadmap
                                        and ensuring that user needs are met with innovative and
                                        market-leading solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="carousel-item" data-bs-interval="5000">
                                <div className="carousel-item-content bg-light rounded shadow-sm">
                                    <img src={image} className="d-block carousel-image mx-auto" alt="Profile Image 3"></img>

                                    <h4 className="mt-3 fw-bold">Alice Brown</h4>

                                    <p className="text-muted mb-2 designation">UX/UI Designer</p>

                                    <p className="lead">Alice crafts intuitive and engaging user experiences.
                                        Her focus is on making complex features simple and visually
                                        appealing for all users.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#infoCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#infoCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feedback;