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
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Project</Link>
                <Link className="desktopMenuListItem">Achievements</Link>
            </div>
            
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me 
            </button>
        </nav>
    )
}

export default Navbar