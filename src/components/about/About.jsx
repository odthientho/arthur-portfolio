/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './about.css';
import ME from '../../assets/me-image.jpeg';

const About = () => {
    return (
        <>
            <section id='about'>
                <div className='intro'>
                    <h1>Tho (Arthur) Ong</h1>
                    <h5>Software Engineering | Fullstack Developer</h5>
                </div>
                <div className='flex-container about_me'>
                    <div className='about_card about_image'>
                        <div className='about_img_background'>
                            <img src={ME} alt='About Me' />
                        </div>
                    </div>
                    <div className='about_card about_info'>
                        <h5>Higher Education</h5>
                        <ul className='about_education_ul'>
                            <li>
                                <a href="" className='education_degree'>Coding Bootcamp</a><br></br>
                                <a href="https://bootcamp.pe.gatech.edu/" target="_blank">GaTech</a> ♡ 
                                July ' 22 - Dec ' 22 
                            </li>
                            <li>
                                <a href="" className='education_degree'>Master of Divinity</a><br></br>
                                <a href="https://www.haven.edu" target="_blank">CalGrad</a> ♡
                                Aug ' 15 - May ' 20
                            </li>
                            <li>
                                <a href="" className='education_degree'>Bachelor of CS</a><br></br>
                                <a href="https://hcmut.edu.vn/en/" target="_blank">HCMc Tech</a> ♡
                                Aug ' 10 - Jan ' 15
                            </li>
                        </ul>
                    </div>
                    <div className='about_card about_info'>
                        <h5>Working Experience</h5>
                        <ul className='about_working_ul'>
                            <li>
                                <span className='education_degree'>Campus Staff Minister</span><br></br>
                                <a href="https://intervarsity.org/" target="_blank">InterVarsity</a> ♡ 
                                Jun ' 20 -Jun ' 22 
                            </li>
                            <li>
                                <span className='education_degree'>Software Engineer</span><br></br>
                                <a href="https://kms-technology.com/" target="_blank">KMS Tech</a> ♡
                                Mar ' 15 - Jun ' 15
                            </li>
                            <li>
                                <span className='education_degree'>Software Engineer Intern</span><br></br>
                                <a href="https://vng.com.vn/" target="_blank">VNG Corp</a> ♡
                                Jun ' 13 - Aug ' 13
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;