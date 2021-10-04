import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container">
                <Service></Service>
            </div>
            <Banner></Banner>

        </div>
    );
};

export default Home;