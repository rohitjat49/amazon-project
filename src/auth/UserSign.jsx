import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import NavbarForm from '../component/NavbarForm';

const UserSign = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://ecommerce-vyte.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const responseData = await response.json();

            console.log('Response Data:', responseData);

            if (!response.ok) {
                console.error('Response Error Data:', responseData);
                throw new Error(responseData.error || 'Signup failed');
            }

            // Here, you don't need to handle the token anymore
            
            setMessage('Signup successful!');
            // navigate('/User-Details'); // Navigate to User-Details on successful signup
            navigate('/user-details');
        } catch (error) {
            console.error('Error:', error.message);
            setMessage(error.message || 'Signup failed. Please try again.');
        }
    };

    return (
        <>
       <NavbarForm/>
        <Container className="sign-in-container">
            <Row className="justify-content-center">
                <Col md="6">
                    <h2 className="sign-in-title text-center mt-3">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <Button  className='btn-buy-now' type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    {message && <p className="mt-3 text-center">{message}</p>}
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default UserSign;



