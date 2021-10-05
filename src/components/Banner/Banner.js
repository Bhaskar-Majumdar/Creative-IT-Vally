import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from "../img/banner.jpg"
import './Banner.css'

const Banner = () => {
    return (
        <div className="container ">
            <div className="row banner-container">
                <div className="col-lg-6">
                    <img src={banner} alt="" className="banner-pic" />
                </div>
                {/* <div className="col-lg-1"></div> */}
                <div className="col-lg-6">
                    <h1 className="banner-heading">Discuss About Creative ICT</h1>
                    <p className="banner-text mb-5">Our all service is related for IT students. IT Support relates to IT & SoftwareBusiness. Courses to get you started most popular IT Crash Course for Beginners.</p>
                    <NavLink to="/contact">
                        <button className="btn btn-primary btn-lg me-5 mb-3">CONTACT US</button>
                    </NavLink>
                    <NavLink to="/allservice">
                        <button className="btn btn-primary btn-lg mb-3">READ MORE</button>
                    </NavLink>
                </div>
                <div className="col-lg-"></div>
            </div>

        </div>
    );
};

export default Banner;