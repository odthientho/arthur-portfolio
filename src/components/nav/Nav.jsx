/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import { BiUserCircle } from 'react-icons/bi'
import { IoLibraryOutline } from 'react-icons/io5'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiFillFilePdf } from 'react-icons/ai'


const Nav = () => {
    const [navActive, setNavActive] = useState('ABOUT ME');
    const [navHover, setNavHover] = useState('');
    return (
        <div className='navbar'>
            <nav className='flex-container'>
                <a onMouseOver={() => setNavHover('Get To Know Me')}
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('ABOUT ME')}
                    className={navActive === 'ABOUT ME' ? 'nav-active' : ''} 
                    href=''><BiUserCircle/></a>
                <a onMouseOver={() => setNavHover('My Recent Works')} 
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('PORTFOLIO')}
                    className={navActive === 'PORTFOLIO' ? 'nav-active' : ''} 
                    href='' ><IoLibraryOutline/></a>
                <a onMouseOver={() => setNavHover('Get In Touch With Me')}
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('CONTACT')}
                    className={navActive === 'CONTACT' ? 'nav-active' : ''} 
                    href='' ><AiOutlineMessage/></a>
                <a onMouseOver={() => setNavHover('My Skills & Resumé')} 
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('RESUME')}
                    className={navActive === 'RESUME' ? 'nav-active' : ''} 
                    href='' ><AiFillFilePdf/></a>
            </nav>
            <div className='nav-title'>{navHover?navHover:navActive}</div>
        </div>
    )
}

export default Nav;