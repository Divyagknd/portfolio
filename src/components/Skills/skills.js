import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UIDesign.jpg';
import WebDesign from '../../assets/webdesign.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>My skills</span>
            <span className='skillDesc'>Motivated BCA graduate with strong problem-solving skills and a passion for technology. Eager to apply knowledge in software development and IT support to contribute to a dynamic team.</span>   
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h1>Responsive Design</h1>
                        <p>I specialize in creating responsive designs using <strong>HTML5 and CSS</strong>, ensuring seamless user experiences across all devices.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                    <h2>JavaScript & ReactJS</h2>
                    <p>I have expertise in <strong>JavaScript and ReactJS</strong>, building dynamic, interactive web applications with efficient and scalable code</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                    <h2>Git & GitHub</h2>
                    <p>I am proficient in using <strong>Git and GitHub</strong> for version control and collaborative software development, enabling efficient project management and code sharing.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h1>AWS</h1>
                        <p>I hold an <strong>AWS certification</strong>, demonstrating my proficiency in cloud services and architecture to optimize and manage scalable applications.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Skills