import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <section id="contact" className="animate-on-scroll mt-5">
                <h2 className="section-heading">Get in <span className="text-accent">Touch</span></h2>
                <div className="row d-flex align-items-stretch g-4">
                    <div className="glass-card col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.890406569547!2d90.3810416743904!3d23.715607390113004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d7fbbf5321%3A0x14aaed0ab68be6e4!2sLalbagh%20Govt.%20Model%20School%20And%20College!5e0!3m2!1sen!2sbd!4v1765027809364!5m2!1sen!2sbd" width="100%" height="500px" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="col-md-6 d-flex">
                        <form className="glass-card w-100" id="contact-form">
                            <h4 className="text-center fw-bolder mb-5">Send a Message</h4>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingName" placeholder="Name"></input>
                                <label htmlFor="floatingName">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="Email"></input>
                                <label htmlFor="floatingEmail">Email</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Message" id="floatingTextarea" style={{ height: '100px', resize: 'none' }}></textarea>
                                <label htmlFor="floatingTextarea">Message</label>
                            </div>

                            <button className="btn btn-secondary mt-5" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;