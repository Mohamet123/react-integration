import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import {FaFacebook , FaTwitter ,FaInstagram , FaPinterest } from "react-icons/fa";
import NavbarToggle from 'react-bootstrap/NavbarToggle'

export const Footer = () => {

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
    
    return(
        <section className="section-footer">
            <div>
                <h1 className="mb-5">sunnyside</h1>
                <div>
               
          <Nav className="ml-5 justify-content-center  ">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link text-secondary fs-5 ms-1"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : "navbar-link text-secondary fs-5 ms-4"} onClick={() => onUpdateActiveLink('service')}>Services</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : "navbar-link text-secondary fs-5 ms-4 mx-4"} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>  
          </Nav>
                </div>
                <div className="div2">
                    <FaFacebook className="icons facebook"/>
                    <FaTwitter className="icons twitter"/>
                    <FaInstagram className="icons instagram"/>
                    <FaPinterest className="icons pinterest"/>

                </div>
            </div>
        </section>
    )
}