import React from 'react';
import './navbar.css';
import logo from '../../assets/favicon.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'; 

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spyThrottle={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spyThrottle={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='works' spyThrottle={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='works' spyThrottle={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Achievements</Link>
            </div>
            
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me 
            </button>
        </nav>
    )
}

export default Navbar