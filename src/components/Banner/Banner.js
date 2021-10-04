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
                    <p className="banner-text mb-5">Our work is recognized by all our IT students. We guarantee an excellent quality teaching in every way.</p>
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