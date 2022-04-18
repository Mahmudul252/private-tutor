import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = event => {
        setName(event.target.value);
    }
    const handleUserEmail = event => {
        setEmail(event.target.value);
    }
    const handleUserPassword = event => {
        setPassword(event.target.value);
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-3'>Please Sign Up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleUserName} type="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onClick={handleUserEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onClick={handleUserPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;