/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './resume.css'
import RESUME from '../../assets/resume.pdf'
import { DiHtml5, DiCss3, DiJavascript, DiBootstrap, DiReact, DiJqueryLogo, DiNodejsSmall, DiMongodb } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'

const Resume = () => {
    return (
        <>
            <section id='resume'>
                <div className='intro'>
                    <h5>How experienced am I ?</h5>
                    <h1>Skills & Resumé</h1>
                </div>
                <div className='flex-container resume'>
                    <div className='resume_view'>
                        <div className='resume_viewBtn'>
                            <a href={RESUME} target="_blank">
                                View Resumé
                            </a>
                        </div>
                        <div className='resume_downBtn'>
                            <a href={RESUME} download="Arthur_Resume">
                                Download ?
                            </a>
                        </div>
                    </div>
                    <div className='resume_card resume_dev'>
                        <h5>Frontend Development</h5>
                        <div className='dev_technologies'>
                            <article className='tech_details'>
                                <DiHtml5 className='tech_icon'/>
                                <div>
                                    <h4>HTML</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiCss3 className='tech_icon' />
                                <div>
                                    <h4>CSS</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiJavascript className='tech_icon' />
                                <div>
                                    <h4>Javascript</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiBootstrap className='tech_icon' />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small>Intermediate</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiReact className='tech_icon' />
                                <div>
                                    <h4>React</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className='resume_card resume_dev'>
                        <h5>Backend Development</h5>
                        <div className='dev_technologies'>
                            <article className='tech_details'>
                                <DiJqueryLogo className='tech_icon' />
                                <div>
                                    <h4>jQuery</h4>
                                    <small>Intermediate</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiNodejsSmall className='tech_icon' />
                                <div>
                                    <h4>Node JS</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <DiMongodb className='tech_icon' />
                                <div>
                                    <h4>MongoDB</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                            <article className='tech_details'>
                                <SiMysql className='tech_icon' />
                                <div>
                                    <h4>MySQL</h4>
                                    <small>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;