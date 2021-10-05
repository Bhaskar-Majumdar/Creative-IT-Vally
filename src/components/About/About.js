import React from 'react';
import backgroundImage from "../img/about.jpg"
import "./About.css"

const About = () => {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '80vh'
    };
    return (
        <div>
            <div className="about-us-section" style={styles}>
                <h1 className="text-center about-heading p-3">About Us</h1>
            </div>

            <div className="container">
                <div className="row py-5">
                    <h1 className="text-center mb-4">WELCOME TO CREATIVE ICT VALLY</h1>
                    <div className="col-lg-6">
                        <h2>About Us</h2>
                        <p>Practice makes perfect.To become a better developer, you need to practice coding your program language. Many online programming courses offer free tutorials with videos and lectures. However, those can only take you so far. Coding challenges will give you a better experience since you apply your knowledge to the real thing.</p>
                        <p>And the reason is, we don’t give up. When a student commits to a course, we commit to the student. Students learn about the basic function and components of computers. Individuals are taught how to build and disassemble computers, install operating systems and perform hardware and software upgrades. This course also teaches participants how to troubleshoot common firmware and hardware problems. We will support our student with extra time and we arranged regularly supporting session for our student.</p>
                    </div>
                    <div className="col-lg-6">
                        <h2>Our Vision</h2>
                        <p>The main focus of our online course is to connect the young people of our country in the IT sector and turn them into skilled manpower. There is no alternative to improving the IT sector in the current world. If we do these course, we hope that your talent and work will develop.</p>
                        <br />
                        <h2>Our Mission</h2>
                        <p>Code powers our digital world. Every website, smartphone app, computer programme, calculator and even microwave relies on code in order to operate. This makes coders the architects and builders of the digital age. Our mission to involved huge number of student with IT sector and create their good skills. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;