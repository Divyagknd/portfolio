import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebookicon.png';
import TwitterIcon from '../../assets/twittericon.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagramicon.png';

const Contact = () => {
    return(
        <section id='contactPage'>
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunityes.</span>
                <form className='contactForm'>
                    <input type="text" className='name' placeholder='Your Name'/>
                    <input type="email" className='email' placeholder='Your Email'/>
                    <textarea className="msg" name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className='link'/>
                        <img src={TwitterIcon} alt="Twitter" className='link'/>
                        <img src={YouTubeIcon} alt="Youtube" className='link'/>
                        <img src={InstagramIcon} alt="Instagram" className='link'/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;