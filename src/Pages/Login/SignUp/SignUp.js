import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        console.log(user)
        return (
            <div>
                <p>Registered User: {user?.user?.email}</p>
            </div>
        );
    }
    const handleUserName = event => {
        setName(event.target.value);
    }
    const handleUserEmail = event => {
        setEmail(event.target.value);
    }
    const handleUserPassword = event => {
        setPassword(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-3'>Please Sign Up</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleUserName} type="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleUserPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;