import React from 'react';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Experience from '../components/Experience.jsx';
import Feedback from '../components/Feedback.jsx';
import Header from '../components/Header.jsx';
import Project from '../components/Project.jsx';
import Skill from '../components/Skill.jsx';
import image from '../assets/images/Profile.JPG';

const Home = () => {
    return (
        <>
            <Header></Header>
            <section id="home" className="animate-on-scroll">
                <div className="row g-4">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="hero-text">
                            <p className="hero-subtitle">Hi, I'm Abdur Rahim</p>
                            <h1 className="hero-title">
                                Building <span className="text-accent">Scalable</span> Web Apps, One API at a Time.
                            </h1>
                            <p className="hero-subtitle">
                                Full Stack Web Developer based in Dhaka, Bangladesh,
                                with 2+ years of professional experience specializing in ASP.NET Core,
                                React.js and Express.js.
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href="#contact" className="btn btn-secondary me-3">Hire Me</a>
                                <a href="abdur_rahim_cv.pdf" download className="btn btn-secondary">Download Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="hero-image-container">
                            <div className="hero-image-placeholder">
                                <img src={image} alt="Abdur Rahim - Full Stack Web Developer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Experience></Experience>
            <Feedback></Feedback>
            <Contact></Contact>
        </>
    );
};

export default Home;