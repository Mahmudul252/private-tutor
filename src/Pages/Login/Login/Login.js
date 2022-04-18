import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleUserEmail = event => {
        setEmail(event.target.value);
    }
    const handleUserPassword = event => {
        setPassword(event.target.value);
    }

    const handleUserLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-3'>Please Login</h2>
            <Form onSubmit={handleUserLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleUserPassword} type="password" placeholder="Password" required />
                </Form.Group>
                {loading && <p className="text-danger">Loading...</p>}
                {error && <p className="text-danger">{error.message}</p>}

                <Button className='w-25 d-block mx-auto' variant="secondary" type="submit">
                    Login
                </Button>
                <p className='my-3'>Don't have an account? <Link className='ms-2 text-decoration-none' to='/signup'>Sign Up now</Link></p>
            </Form>
            <SocialSignIn></SocialSignIn>
        </div>
    );
};

export default Login;