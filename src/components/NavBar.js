import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.png'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#habilidades" className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projetos" className={activeLink === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/augusto-laursen/" target="_blank"><img src={navIcon1} alt=""></img></a>
                            <a href="https://www.instagram.com/augustoalbertoni/" target="_blank"><img src={navIcon2} alt=""></img></a>
                            <a href="https://github.com/AugustoLa" target="_blank"><img src={navIcon3} alt=""></img></a>
                        </div>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>
                            <button>
                                <span>Vamos nos conectar!</span>
                            </button>
                        </Nav.Link>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

