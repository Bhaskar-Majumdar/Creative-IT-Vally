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
        height: '100vh'
    };
    return (
        <div>
            <div className="about-us-section" style={styles}>
                <h1 className="text-center about-heading p-5">About Us</h1>
            </div>

            <div className="container">
                <div className="row py-5 my-5">
                    <h1 className="text-center mb-5 ">WELCOME TO CREATIVE ICT VALLY</h1>
                    <div className="col-lg-6">
                        <h3>About Us</h3>
                        <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.</p>
                        <p>And the reason is, we don’t give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.</p>
                    </div>
                    <div className="col-lg-6">
                        <h3>Our Vision</h3>
                        <p>To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.</p>
                        <br />
                        <h3>Our Mission</h3>
                        <p>To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;