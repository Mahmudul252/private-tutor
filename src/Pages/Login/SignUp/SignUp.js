import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

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
        if (password !== event.target.value) {
            setPasswordMatched(false);
            setErrorMessage("Password don't match");
        }
        else {
            setPasswordMatched(true);
        }
    }
    const from = location?.state?.from?.pathname || '/';
    const handleCreateUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
            .then(async () => {
                toast("Email Verification Sent")
                await updateProfile({ displayName });
                await sendEmailVerification();
            })
            .then(() => navigate(from, { replace: true }));

    }

    return (
        <div className='login-form mx-auto mt-5'>
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
                    <Form.Control onChange={handleUserPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <input onChange={handleUserRetypePassword} placeholder="Retype your Password" required type="password" id="formBasicRetypePassword" className="form-control"></input>
                </Form.Group>
                {!passwordMatched && <p className="text-danger">{errorMessage}</p>}
                {loading && <p className="text-danger">Loading...</p>}
                {error && <p className="text-danger">{error.message}</p>}

                <Button disabled={!passwordMatched} className='login-button d-block mx-auto' variant="secondary" type="submit">
                    Sign Up
                </Button>
                <p className='my-3'>Already have an account? <Link className='ms-2 text-decoration-none' to='/login'>Please Login here</Link></p>
            </Form>
            <SocialSignIn from={from}></SocialSignIn>
            <ToastContainer />
        </div>
    );
};

export default SignUp;