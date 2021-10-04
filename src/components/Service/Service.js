import React, { useEffect, useState } from 'react';
import "./Service.css"

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./Courses.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // conditonal rendaring for display service in home page
    const displayService = services.filter(service => service.display === true)
    return (
        <div className="row my-5">

            <h2 className="text-center service-heading mt-5 mb-3">Our Main Services</h2>
            <p className="text-center service-paragraph mt-1 mb-5">We have already teach amazing things for our students.</p>
            {
                displayService.map(item =>
                    <div key={item.phone} className="col-lg-4">
                        <div className="card service-card text-center p-4 mb-5">

                            <div className="">
                                <h5 className="service-title mb-4">{item.name}</h5>
                                <p className=" m-0 price-text">{item.price}$ per week</p>
                                <p className="service-text mb-3">{item.about}</p>
                            </div>
                            <img src={item.img} className="card-pic" alt="..." />
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Service;