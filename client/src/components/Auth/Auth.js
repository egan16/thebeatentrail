import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const Auth = () => {
    const isSignup = false;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
                <Card className="mt-2">
                    <Card.Body>
                        <Card.Title>{isSignup ? 'Sign Up' : 'Sign In'}</Card.Title>
                        {/* start of Form */}
                        {/* onSubmit handler attached to form to execute handleSubmit function when button clicked  */}
                        <Form onSubmit={handleSubmit}>
                            {   
                                // if isSignup show this aswell
                                isSignup && (
                                    <>
                                        {/* start of firstName */}
                                        <Form.Group controlId="firstName" xs={12} md={6}>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                required
                                                name="firstName"
                                                type="text"
                                                placeholder="Enter first name"
                                                value=""
                                                handleChange={handleChange}
                                                autoFocus
                                                fullWidth
                                            />
                                        </Form.Group>
                                        {/* start of lastName */}
                                        <Form.Group controlId="lastName" xs={12} md={6}>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                required
                                                name="lastName"
                                                type="lastName"
                                                placeholder="Enter last name"
                                                value=""
                                                handleChange={handleChange}
                                                fullWidth
                                            />
                                        </Form.Group>
                                    </>
                                )
                            }
                            {/* start of email */}
                            <Form.Group controlId="email" xs={12} md={6}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value=""
                                    handleChange={handleChange}
                                    fullWidth
                                />
                            </Form.Group>
                            {/* start of password */}
                            <Form.Group controlId="password" xs={12} md={6}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    value=""
                                    handleChange={handleChange}
                                    fullWidth
                                />
                            </Form.Group>
                            {
                                isSignup && 
                                    <Form.Group controlId="confirmPassword" xs={12} md={6}>
                                        <Form.Label>confirmPassword</Form.Label>
                                        <Form.Control
                                            required
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Re-enter password"
                                            value=""
                                            handleChange={handleChange}
                                            fullWidth
                                        />
                                    </Form.Group>
                            }
                            <Button variant="primary" type="submit" fullWidth>
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </Button>
                            {/* <Button className="ml-2" variant="info" onClick={clear}>
                                Clear
                            </Button> */}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Auth