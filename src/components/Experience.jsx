import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Experience = () => {
    return (
        <>
            <section id="experience" className="animate-on-scroll mt-5">
                <h2 className="section-heading">Work <span className="text-accent">Experience</span></h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="glass-card timeline-content">
                            <h5>Ezzha Limited</h5>
                            <div className="mb-1">
                                <strong>Position : </strong> <span>ASP.NET Developer (Full Stack)</span>
                            </div>

                            <div className="mb-1">
                                <strong>Duration :</strong> <span>April 2025 - Present</span>
                            </div>

                            <div className="mb-4">
                                <strong>Address :</strong> <span>31 Elephant Road, Dhaka</span>
                            </div>

                            <div className="mb-4">
                                <strong>Tech Stack :</strong> <span>ASP.NET Core Web API, Blazor, jQuery</span>
                            </div>

                            <div className="responsibilities">
                                <strong>Responsibilities: </strong>
                                <ul>
                                    <li>Making API as per client requirements,
                                        implementing Blazor components for the frontend.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="glass-card timeline-content">
                            <h5>DataHead Private Limited</h5>
                            <div className="mb-1">
                                <strong>Position : </strong> <span>ASP.NET Developer (Full Stack)</span>
                            </div>

                            <div className="mb-1">
                                <strong>Duration :</strong> <span>March 2024 - March 2025</span>
                            </div>

                            <div className="mb-4">
                                <strong>Address :</strong> <span>43 Eskaton Garden Road, Dhaka</span>
                            </div>

                            <div className="mb-4">
                                <strong>Tech Stack :</strong> <span>ASP.NET Core MVC, ASP.NET MVC, Web API, jQuery</span>
                            </div>

                            <div className="responsibilities">
                                <strong>Responsibilities: </strong>
                                <ul>
                                    <li>Developing and maintaining APIs,
                                        contributing to both MVC and Web API projects.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="glass-card timeline-content">
                            <h5>iBOS Limited</h5>
                            <div className="mb-1">
                                <strong>Position : </strong> <span>Jr. Backend Developer</span>
                            </div>

                            <div className="mb-1">
                                <strong>Duration :</strong> <span>January 2022 - December 2022</span>
                            </div>

                            <div className="mb-4">
                                <strong>Address :</strong> <span>Mohammadpur, Dhaka</span>
                            </div>

                            <div className="mb-4">
                                <strong>Tech Stack :</strong> <span>ASP.NET Core Web API</span>
                            </div>

                            <div className="responsibilities">
                                <strong>Responsibilities: </strong>
                                <ul>
                                    <li>Core focus on backend development,
                                        creating RESTful APIs for various internal services.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;