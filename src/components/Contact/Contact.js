import React from 'react';
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./Contact.css"
const Contact = () => {
    return (

        <div className="container contact-container">
            <div className="box">
                <h1 className="mb-3">How Can We Help?</h1>
                <p className=" mb-5">Talk to one of our consultants today and learn how to start leveraging your Study.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card text-center p-5 contact-card" >
                            <div className="p-2">
                                <h4 className="card-title mb-3">01774134060</h4>
                                <h6 className="">Customer Survice time 10:00 Am to 5:00 Pm Without Holydays.</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center contact-card p-5" >
                            <div className="p-2">
                                <h4 className="card-title mb-3">learning@gmail.com</h4>
                                <h6 className="">We will respond to your email within 8 hours.</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card text-center contact-card p-5" >
                            <div className="p-2">
                                <h4 className="card-title mb-3">Mirpur 10, H-63/3</h4>

                                <h6 className="">Visit Our Office from 10:00 am to 4:00 pm. Withput Holydays.</h6>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div style={{ margin: "68px 0" }}>
                <h2 className="text-center">Feedback/Queries</h2>
                <div>
                    <Container>
                        <Form>
                            <Row>
                                <Col sm>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Name: </Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                </Col>
                                <Col sm>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email: </Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Control
                                className="my-3"
                                type="text"
                                placeholder="Write Your Subject..."
                            />
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Your Feedback or Queries </Form.Label>
                                <Form.Control
                                    placeholder="Write you message..."
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button className="mb-5" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default Contact;