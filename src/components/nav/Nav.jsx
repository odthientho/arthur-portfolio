/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import { BiUserCircle } from 'react-icons/bi'
import { IoLibraryOutline } from 'react-icons/io5'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiFillFilePdf } from 'react-icons/ai'


const Nav = (props) => {
    const [navHover, setNavHover] = useState('');
    return (
        <div className='navbar'>
            <nav className='flex-container'>
                <a onMouseOver={() => setNavHover('Get To Know Me')}
                    onMouseOut={() => setNavHover('')}
                    className={props.section === 'ABOUT ME' ? 'nav-active' : ''} 
                    href='/'><BiUserCircle/></a>
                <a onMouseOver={() => setNavHover('My Recent Works')} 
                    onMouseOut={() => setNavHover('')}
                    className={props.section === 'PORTFOLIO' ? 'nav-active' : ''} 
                    href='/portfolio' ><IoLibraryOutline/></a>
                <a onMouseOver={() => setNavHover('Get In Touch With Me')}
                    onMouseOut={() => setNavHover('')}
                    className={props.section === 'CONTACT' ? 'nav-active' : ''} 
                    href='/contact' ><AiOutlineMessage/></a>
                <a onMouseOver={() => setNavHover('My Skills & Resumé')} 
                    onMouseOut={() => setNavHover('')}
                    className={props.section === 'RESUME' ? 'nav-active' : ''} 
                    href='/resume' ><AiFillFilePdf/></a>
            </nav>
            <div className='nav-title'>{navHover?navHover:props.section}</div>
        </div>
    )
}

export default Nav;