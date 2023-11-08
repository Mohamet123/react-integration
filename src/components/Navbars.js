import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import NavbarToggle from 'react-bootstrap/NavbarToggle'

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

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container >
        <div >
          <Navbar.Brand href="#home">
            <h1 className="text-white">Sunnyside</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggle-icon'></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-5 justify-content-end vv ">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link text-white fs-5 ms-1"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : "navbar-link text-white fs-5 ms-4"} onClick={() => onUpdateActiveLink('service')}>Services</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : "navbar-link text-white fs-5 ms-4 mx-4"} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            <button className='vvd btn btn-light' onClick={() => console.log('connect')}><span>Contact</span></button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar ;