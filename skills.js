import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UIDesign.jpg';
import WebDesign from '../../assets/webdesign.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Motivated BCA graduate with strong problem-solving skills and a passion for technology. Eager to apply knowledge in software development and IT support to contribute to a dynamic team.</span>   
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h1>UI Design</h1>
                        <p>This is a demo the other text here are just sample text dont do anything for them text</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is a demo the other text here are just sample text dont do anything for them text</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Skills