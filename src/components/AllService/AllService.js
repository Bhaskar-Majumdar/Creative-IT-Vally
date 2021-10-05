import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    // display all services in services page
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./Courses.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-3">
            <div className="row">
                <h1 className="text-center service-heading mt-5 mb-2">Our All Services</h1>
                <h5> Here is our all popular services. If you learn more, you can enroll now.</h5>
                {
                    services.map(service => <div key={service.id} className="col-lg-4 my-3">
                        <div className="card service-card text-center p-4 mt-2">

                            <div className="">
                                <h4 className="service-title mb-2">{service.name}</h4>
                                <h6 className="service-text mb-3">{service.about}</h6>
                                <h5 className=" mb-2 price-text">Course Cost: {service.price} BDT</h5>
                                <h5 className=" mb-2 duration-text">Course Duration: {service.duration} Hours</h5>
                            </div>
                            <img src={service.img} className="card-pic" alt="..." />

                            <button className="btn btn-danger btn-lg">Enroll Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllProducts;