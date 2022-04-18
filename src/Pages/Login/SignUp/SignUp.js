import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = ({ handleSignUp }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const handleUserName = event => {
        setDisplayName(event.target.value);
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
    useEffect(() => {
        updateProfile({ displayName });
    }, [user]);




    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-3'>Please Sign Up</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleUserName} type="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleUserPassword} type="password" placeholder="Password" required />
                </Form.Group>
                {loading && <p className="text-danger">Loading...</p>}
                {error && <p className="text-danger">{error.message}</p>}

                <Button className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default SignUp;