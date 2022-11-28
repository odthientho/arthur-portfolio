import React from 'react';
import Nav from '../nav/Nav';
import './about.css';
import ME from '../../assets/me-image.jpeg';

const About = () => {
    return (
        <>
            <section id='about'>
                <div className='intro'>
                    <h4>Hello, my name is</h4>
                    <h1>Tho (Arthur) Ong</h1>
                    <h5>Software Engineering | Fullstack Developer</h5>
                </div>
                <div className='flex-container about_me'>
                    <div className='about_image'>
                        <img src={ME} alt='About Me' />
                    </div>
                    <div className='about_info'>

                    </div>
                </div>
            </section>
            <Nav section={"ABOUT ME"}/>
        </>
    )
}

export default About;