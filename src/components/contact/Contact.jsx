/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'


const Contact = () => {
    return (
        <>
            <section id='contact'>
                <div className='intro'>
                    <h5>Get In Touch With Me</h5>
                    <h1>Contact Me</h1>
                </div>
                <div className='flex-container contact_container'>
                    <div className='contact_options'>
                        <article className='contact_option'>
                            <AiOutlineMail className='contact_icon'/>
                            <h4>Email</h4>
                            <h5>odthientho@gmail.com</h5>
                            <a href='mailto:odthientho@gmail.com' target="_blank">Send a message</a>
                        </article>
                        <article className='contact_option'>
                            <BsMessenger className='contact_icon'/>
                            <h4>Messenger</h4>
                            <h5>odthientho</h5>
                            <a href='https:/m.me/odthientho' target="_blank">Send a message</a>
                        </article>
                    </div>
                    <form action="" className='contact_form'>
                        <input type="text" name="name" placeholder='Your Full Name' required />
                        <input type="email" name="email" placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type="submit" className='contact_btn'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;