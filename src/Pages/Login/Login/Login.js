import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetClicked, setResetClicked] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleUserEmail = event => {
        setEmail(event.target.value);
    }
    const handleUserPassword = event => {
        setPassword(event.target.value);
    }
    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        setResetClicked(false);
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
        setResetClicked(true);
    }

    return (
        <div className='mx-auto mt-5 login-form'>
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
                {error && <div>
                    <p className="text-danger">{error.message}</p>
                    <p style={{ display: resetClicked ? 'none' : 'block' }} className=''>Forget Password? <span className='text-primary cursor-pointer' onClick={handleResetPassword}>Reset Now</span></p>
                </div>}
                {resetClicked && <p>Password resetting email sent to your email.</p>}

                <Button className='login-button d-block mx-auto' variant="secondary" type="submit">
                    Login
                </Button>
                <p className='my-3'>Don't have an account? <Link className='ms-2 text-decoration-none' to='/signup'>Sign Up now</Link></p>
            </Form>
            <SocialSignIn from={from}></SocialSignIn>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;