import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);
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
    const handleUserRetypePassword = event => {
        ;
        if (password !== event.target.value) {
            setPasswordMatched(false);
            setErrorMessage("Password don't match");
        }
        else {
            setPasswordMatched(true);
        }
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
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleUserPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control onChange={handleUserRetypePassword} type="password" placeholder="Retype your Password" required />
                </Form.Group>
                {!passwordMatched && <p className="text-danger">{errorMessage}</p>}
                {loading && <p className="text-danger">Loading...</p>}
                {error && <p className="text-danger">{error.message}</p>}

                <Button disabled={!passwordMatched} className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Sign Up
                </Button>
                <p className='my-3'>Already have an account? <Link className='ms-2 text-decoration-none' to='/login'>Please Login here</Link></p>
            </Form>
            <SocialSignIn></SocialSignIn>
        </div>
    );
};

export default SignUp;