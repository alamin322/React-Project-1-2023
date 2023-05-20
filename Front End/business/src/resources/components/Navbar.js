import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <NavLink className="navbar-brand" to="/">AI Dojo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/pricing">Pricing</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/faq">FAQ</NavLink></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><NavLink className="dropdown-item" to="/blogHome">Blog Home</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/blogPost">Blog Post</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                <li><NavLink className="dropdown-item" to="/portfolio_items">Portfolio Items</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/portfolio_overview">Portfolio Overview</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
