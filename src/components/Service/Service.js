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

            <h2 className="text-center service-heading mt-4 mb-3">Our Main Services</h2>
            {
                displayService.map(item =>
                    <div key={item.phone} className="col-lg-4">
                        <div className="card service-card text-center p-4 mb-5">

                            <div className="">
                                <h4 className="service-title mb-2">{item.name}</h4>
                                <h6 className="service-text mb-3">{item.about}</h6>
                                <h5 className=" mb-2 price-text">Course Cost: {item.price} BDT</h5>
                                <h5 className=" mb-2 duration-text">Course Duration: {item.duration} Hours</h5>
                            </div>
                            <img src={item.img} className="card-pic" alt="..." />
                            <button className="btn btn-danger btn-lg">Enroll Now</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Service;