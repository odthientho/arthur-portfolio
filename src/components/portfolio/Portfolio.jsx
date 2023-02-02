/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import PROJECT_POLISH from '../../assets/project_polish.png'
import PROJECT_RESUME from '../../assets/project_resume.png'
import PROJECT_MARVEL from '../../assets/project_marvel.png'

const Portfolio = () => {
    return (
        <>
            <section id='portfolio'>
                <div className='intro'>
                    <h5>My Recent Works</h5>
                    <h1>My Portfolio</h1>
                </div>
                <div className='flex-container portfolio_container'>
                    <article className='portfolio_item'>
                        <div className='portfolio_item-image'>
                            <img src={ PROJECT_RESUME } alt="Project Polish" />
                        </div>
                        <h3>Resumé Generator App</h3>
                        <a href='https://github.com/odthientho/ResuMade' target="_blank" className='github_btn'>GitHub</a>
                        <a href='http://resumade.herokuapp.com/' target="_blank" className='demo_btn'>Live Demo</a>
                    </article>
                    <article className='portfolio_item'>
                        <div className='portfolio_item-image'>
                            <img src={ PROJECT_POLISH } alt="Project Polish" />
                        </div>
                        <h3>Polished Salon Booking App</h3>
                        <a href='https://github.com/odthientho/Polished' target="_blank" className='github_btn'>GitHub</a>
                        <a href='https://polished-booking-app.herokuapp.com/' target="_blank" className='demo_btn'>Live Demo</a>
                    </article>
                    <article className='portfolio_item'>
                        <div className='portfolio_item-image'>
                            <img src={ PROJECT_MARVEL } alt="Project Polish" />
                        </div>
                        <h3>Have A MARVELous Time</h3>
                        <a href='https://github.com/odthientho/have-a-marvelous-time' target="_blank" className='github_btn'>GitHub</a>
                        <a href='https://makeithappenmike.github.io/have-a-marvelous-time/' target="_blank" className='demo_btn'>Live Demo</a>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Portfolio;