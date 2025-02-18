import React from 'react';
import './intro.css';
//import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from "../../assets/hire me.png"; 

const Intro = () => {
    return(
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Divya</span><br/>Website developer</span>
                <p className='introPara'>Motivated BCA graduate with strong problem-solving<br/> skills and a passion for technology. Eager to apply 
                knowledge in <br/>software development and IT support to contribute to a dynamic team.</p>
                <Link>
                    <button className='btn'>
                        <img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me
                    </button>
                </Link>
            </div>
            
        </section>
    )
}

export default Intro;