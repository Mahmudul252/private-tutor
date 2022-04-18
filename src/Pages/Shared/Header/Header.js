import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setUserName(user?.displayName);
    }, [])

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Private Tutor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user ? <div className='d-flex'>
                                    <span className='text-white mt-2 me-2'>{userName}</span>
                                    <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                </div>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                        <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                                    </div>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;