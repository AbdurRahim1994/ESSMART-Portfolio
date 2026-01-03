import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container nav-content">

                        <a className="navbar-brand logo" href="#home">
                            <span className="text-accent">Abdur</span> Rahim
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse nav-menu-container" id="mainNavbar">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Skill" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skill</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Project" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Project</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Experience</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;