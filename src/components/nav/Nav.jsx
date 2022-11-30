import React, { useState } from 'react'
import './nav.css'
import { BiUserCircle } from 'react-icons/bi'
import { IoLibraryOutline } from 'react-icons/io5'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiFillFilePdf } from 'react-icons/ai'


const Nav = ({ navActive, setNavActive }) => {
    const [navHover, setNavHover] = useState('');
    return (
        <div className='navbar'>
            <nav className='flex-container'>
                <div onMouseOver={() => setNavHover('Get To Know Me')}
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('ABOUT ME')}
                    className={navActive === 'ABOUT ME' ? 'nav-active' : ''} 
                    ><BiUserCircle/></div>
                <div onMouseOver={() => setNavHover('My Recent Works')} 
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('PORTFOLIO')}
                    className={navActive === 'PORTFOLIO' ? 'nav-active' : ''} 
                    ><IoLibraryOutline/></div>
                <div onMouseOver={() => setNavHover('Get In Touch With Me')}
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('CONTACT')}
                    className={navActive === 'CONTACT' ? 'nav-active' : ''} 
                    ><AiOutlineMessage/></div>
                <div onMouseOver={() => setNavHover('My Skills & Resumé')} 
                    onMouseOut={() => setNavHover('')}
                    onClick={() => setNavActive('RESUME')}
                    className={navActive === 'RESUME' ? 'nav-active' : ''} 
                    ><AiFillFilePdf/></div>
            </nav>
            <div className='nav-title'>{navHover?navHover:navActive}</div>
        </div>
    )
}

export default Nav;