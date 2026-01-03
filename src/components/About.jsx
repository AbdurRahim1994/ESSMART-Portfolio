import React from 'react';
import image from '../assets/images/Profile.JPG';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <section id="about" className="animate-on-scroll mt-5">
                <h2 className="section-heading">About <span className="text-accent">Me</span></h2>
                <div className="row g-4">
                    <div className="col-md-6 text-center">
                        <div className="about-photo glass-card">
                            <div className="hero-image-placeholder">
                                <img src={image} alt="Abdur Rahim - Full Stack Web Developer"></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-text">
                            <p>
                                I am <span className="highlighted-span">Abdur Rahim</span>
                                , a dedicated <span className="highlighted-span">Full Stack Web Developer</span>
                                with a passion for building robust, high-performance, and scalable web applications.
                                Based in Dhaka, Bangladesh, I bring over <span className="highlighted-span">2 years</span> of hands-on professional experience
                                to the table.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                My expertise lies in the Microsoft stack, leveraging
                                <span className="highlighted-span">ASP.NET Core Web API</span> for the backend,
                                and modern JavaScript frameworks like  <span className="highlighted-span">React JS</span>
                                and <span className="highlighted-span">Blazor</span> for dynamic frontends.
                                I thrive in environments that prioritize clean code, efficient database design
                                (MS SQL Server, MongoDB), and a results-driven approach.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                I am currently available for international <span className="highlighted-span">freelance clients</span>
                                (Upwork, Fiverr, Toptal) and <span className="highlighted-span">remote job opportunities</span>
                                from global tech companies. Let's build something exceptional together!
                            </p>
                            <a href="#contact" className="btn btn-secondary" style={{ marginTop: '30px' }}>Let's Talk</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;