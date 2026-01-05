import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Project = () => {
    return (
        <>
            <section id="projects" className="animate-on-scroll mt-5">
                <h2 className="section-heading">Featured <span className="text-accent">Projects</span></h2>

                <div className="row g-4" id="projects-container">
                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>1. Inventory Management</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>Express.js, React.js</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>This system is for small businesses to track purchases,
                                        sales, returns, and generate monthly reports.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Category, Sub-Category, Brand, Product, Purchase, Sales, Return, Report.</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://inventory-management-delta-green.vercel.app/' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <a className="btn btn-secondary btn-sm">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>2. E-Commerce Platform</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>ASP.NET Core Web API, React.js, MS SQL Server</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>A full-featured platform for selling products online with
                                        comprehensive stock management.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Category, Product, Add to Cart, Stock Management.</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://essmart.vercel.app/' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <a className="btn btn-secondary btn-sm">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>3. Point of Sale (POS)</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>ASP.NET Core Web API, Blazor, MS SQL Server</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>A fast and reliable electronic point-of-sale system,
                                        ideal for retail and service industries.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Quick Transactions, Inventory Sync, User Role Management, Reporting.</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <button target="_blank" className="btn btn-secondary btn-sm">Live Demo</button>
                                <button className="btn btn-secondary btn-sm">View Code</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>4. Admission Consultancy Website</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>ASP.NET Core Web API, jQuery, MS SQL Server</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>An education consultancy platform providing information
                                        and services for UK university admissions.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Course Catalog, Admission-Info, Contact & Inquiry Forms.</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://aheduglobal.com/' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <button className="btn btn-secondary btn-sm">View Code</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>5. Driving School Website</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>ASP.NET Core Web API, jQuery, MS SQL Server</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>A service booking platform designed for a driving instruction business,
                                        handling courses and scheduling.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Service/Course Booking, Scheduling, Contact Management.</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://eendrivingschool.co.uk/' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <a className="btn btn-secondary btn-sm">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>6. Blog Website Design</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>HTML, CSS, JS</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>A modern blog website template with responsive design,
                                        suitable for personal or professional blogging.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Read Blogs</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://essmart-blog.vercel.app/' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <a className="btn btn-secondary btn-sm">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="glass-card project-card" data-category="fullstack">
                            <div>
                                <h4>7. Restaurant Website Design</h4>
                                <div className="mb-4">
                                    <strong>Tech Stack :</strong> <span>HTML, CSS, JS</span>
                                </div>

                                <div className="mb-4 description">
                                    <p>A modern food and restaurant website template with responsive design,
                                        suitable for food and restaurant businesses.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <strong>Key Features :</strong> <span>Show Foods</span>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 justify-content-between mt-3">
                                <a href='https://essmart-restaurant.vercel.app' target="_blank" className="btn btn-secondary btn-sm">Live Demo</a>
                                <a className="btn btn-secondary btn-sm">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;