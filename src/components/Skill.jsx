import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Skill = () => {
    return (
        <>
            <section id="skills" className="animate-on-scroll mt-5">
                <h2 className="section-heading">Technical <span className="text-accent">Skills</span></h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="skill-category glass-card h-100 d-flex flex-column">
                            <h4>Backend Development</h4>
                            <ul className="skill-list">
                                <li>ASP.NET Core (Web API, MVC)</li>
                                <li>Node.js (Express.js)</li>
                                <li>RESTful API Design</li>
                                <li>Authentication & Authorization</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill-category glass-card h-100 d-flex flex-column">
                            <h4>Frontend Development</h4>
                            <ul className="skill-list">
                                <li>React.js (Hooks, Context, Query)</li>
                                <li>Blazor (WebAssembly/Server)</li>
                                <li>JavaScript (ES6+)</li>
                                <li>jQuery</li>
                                <li>Responsive Design (Mobile-first)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="skill-category glass-card h-100 d-flex flex-column">
                            <h4>Database & Tools</h4>
                            <ul className="skill-list">
                                <li>MS SQL Server (T-SQL, Stored Procedures)</li>
                                <li>MongoDB (Aggregation, Indexing)</li>
                                <li>Git/GitHub</li>
                                <li>RESTful APIs</li>
                                <li>Agile/Scrum methodology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;