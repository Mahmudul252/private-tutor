import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialSignIn = ({ from }) => {
    // const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
    const handleSocialSignIn = (method) => {
        if (method === 'google') {
            signInWithGoogle()
                .then(() => {
                    navigate(from, { replace: true });
                })
        }
        if (method === 'github') {
            signInWithGithub()
                .then(() => {
                    navigate(from, { replace: true });
                })
        }
    }
    return (
        <div>
            <div className="d-flex align-items-center mb-4">
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <div className='mx-2'>or</div>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className="d-flex justify-content-center my-3">
                <button onClick={() => handleSocialSignIn('google')} className="btn btn-secondary social-login-button fs-5">Sign In with Google   <FontAwesomeIcon className='ms-1' icon={faGoogle} /></button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={() => handleSocialSignIn('github')} className="btn btn-secondary social-login-button fs-5">Sign In with Github   <FontAwesomeIcon className='ms-1' icon={faGithub} /></button>
            </div>
        </div>
    );
};

export default SocialSignIn;