import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mt-5 mx-auto blogs'>
            <div className="border border-2 border-warning rounded-3 p-3 mb-3">
                <h2 className='text-center'>Difference between authorization and authentication</h2>
                <p className="fs-5 text-justify">Authorization is having extra power to modify the system. An admin is an authorized person who have extra power to add or remove or modify the whole system or in the case of website.</p>
                <p className="fs-5 text-justify">Authentication is the process of checking whether the person is an user or not. That user don't have any power to add something in the system or remove from the system. </p>
            </div>
            <div className="border border-2 border-warning rounded-3 p-3 mb-3">
                <h2 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className="fs-5 text-justify">I'm using firebase because firebase is a awesome platform from google to implement authentication apps to the website. I can host my website to firebase. This is really time saving using firebase</p>
                <p className="fs-5 text-justify">Though firebase is nice to implement authentication, there are plenty of alternatives to the firebase like Auth0, MongoDB, Okta, JSON Web Token, Amazon Cognito etc. </p>
            </div>
            <div className="border border-2 border-warning rounded-3 p-3">
                <h2 className='text-center'>What other services does firebase provide other than authentication?</h2>
                <p className="fs-5 text-justify">Firebase is a great platform for authentication. But it has many more services like
                    <ul className='ms-5'>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;