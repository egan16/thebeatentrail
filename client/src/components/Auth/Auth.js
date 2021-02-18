import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const Auth = () => {
    const isSignup = true;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {

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
                                        <Row>
                                            <Col xs={12} md={6}>
                                                {/* start of firstName */}
                                                <Form.Group controlId="firstName">
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
                                            </Col>
                                            <Col xs={12} md={6}>
                                                {/* start of lastName */}
                                                <Form.Group controlId="lastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        name="lastName"
                                                        type="text"
                                                        placeholder="Enter last name"
                                                        value=""
                                                        handleChange={handleChange}
                                                        fullWidth
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
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
                                        <Form.Label>Confirm Password</Form.Label>
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
                            <Row>
                                <Col xs={12} md={4}>
                                    <Button variant="primary" type="submit" fullWidth>
                                        {isSignup ? 'Sign Up' : 'Sign In'}
                                    </Button>
                                </Col>
                                <Col xs={12} md={8}>
                                    <Button variant="light" onClick={switchMode}>
                                        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Auth