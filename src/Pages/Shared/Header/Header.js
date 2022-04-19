import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    // tried a lot to show username at first render but it not happening. showing username in nav bar after reload the page. sorry... -_-

    //the problem is happening only when creating user with email and password. as the process don't use the name, that's why I set username after successful user creation. and this component only takes the first step of user creation rather than update userInfo

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <header>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Private Tutor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Student Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <div className='d-flex'>
                                    <span className='text-white mt-2 me-2'>{user?.displayName}</span>
                                    <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                </div>
                                    :
                                    <div className="d-flex flex-lg-row flex-column">
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