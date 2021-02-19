import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', };

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page from reloading when submit
            
        if(isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        // sets form data state
        setFormData({ ... formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup); //switches the isSignup state
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        //needs try catch because async
        try {
            //if login successful dispatch action
            dispatch({ type: 'AUTH', data: { result, token } });
            //once dispatched redirect to home
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in Unsuccessful. Try again later")
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
                                // if isSignup true show this aswell
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
                                                        // value=""
                                                        handleChange={handleChange}
                                                        autoFocus
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
                                                        // value=""
                                                        handleChange={handleChange}
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
                                    // value=""
                                    handleChange={handleChange}
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
                                    // value=""
                                    handleChange={handleChange}
                                />
                            </Form.Group>
                            {
                                // if isSignup true show this aswell
                                isSignup && 
                                    <Form.Group controlId="confirmPassword" xs={12} md={6}>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            required
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="Re-enter password"
                                            // value=""
                                            handleChange={handleChange}
                                        />
                                    </Form.Group>
                            }
                            <Button
                                className="mb-2"
                                block
                                variant="primary"
                                type="submit"
                            >
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </Button>
                            <Row>
                                <Col className="mb-2" xs={12} md={5}>
                                    {/* Button to log in through google account */}
                                    <GoogleLogin 
                                        clientId="907219582512-i9mopv55ds8gu25e3bmml37bt886hfub.apps.googleusercontent.com"
                                        //what button will look like
                                        render={(renderProps) => (
                                            <Button
                                                className="mb-2"
                                                block
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google mr-2 pb-1" viewBox="0 0 16 16">
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                                </svg>
                                                Google Sign In
                                            </Button>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy="single_host_origin"
                                    />
                                </Col>
                                <Col xs={12} md={7}>
                                    {/* button to switch isSignup state */}
                                    <Button
                                        block 
                                        variant="light" 
                                        onClick={switchMode}
                                    >
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