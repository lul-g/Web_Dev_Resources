import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/imgs/logo.svg";

function NavBar({func}) {
    function setColor() {
        document.querySelectorAll('.nav__link').forEach(link => {
            link.style.color = link.dataset.clr
            link.style.borderColor = link.dataset.clr
        })
    }
    useEffect(() => {
        setColor()
    }, [])

    return ( 
        <div className="header__cont">
            <div className="header__top">
                <div className="logo"><Logo /> </div>
                <a href='https://resume-lul.netlify.app/' target="_blank" data-clr='#E60866' onLoad={(navData) => {return navData.isActive = true}} className="nav__link"> 
                    <i className="fa-solid fa-rocket"></i> /resume
                </a>
                <NavLink id='advice' onClick={func} to='/advice' data-clr='#0a66c2' onLoad={(navData) => {return navData.isActive = true}} className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}> 
                    <i className="fa-solid fa-rocket"></i> /advice
                </NavLink>
            </div>
            <header className="header">
                <div className="title title__big">WEB - DEV Resources</div>
                <p className="para">Resources to make your coding life easier</p>
            </header>
            <nav className="nav">
                <ul className="nav__links">
                    <NavLink onClick={func} to='/' data-clr='#7c3aed' onLoad={(navData) => {return navData.isActive = true}} className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}> 
                        <i className="fa-solid fa-house"></i> /home
                    </NavLink>
                    <NavLink onClick={func} to='/learning' data-clr='#0a66c2' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                        <i className="fa-brands fa-leanpub"></i>/Learning
                    </NavLink>
                    <NavLink onClick={func} to='/content' data-clr='#333' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                            <i className="fa-solid fa-compact-disc"></i>/Content_res
                    </NavLink>
                    <NavLink onClick={func} to='/css_simp' data-clr='#E60866' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i>/Css_simplifiers
                    </NavLink>
                    <NavLink onClick={func} to='/extensions' data-clr='#7c3aed' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                            <i className="fa-solid fa-compact-disc"></i>/Extensions
                    </NavLink>
                    <NavLink onClick={func} to='/docs' data-clr='#0a66c2' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                            <i className="fa-solid fa-compact-disc"></i>/documentation
                    </NavLink>
                    <NavLink onClick={func} to='/tools' data-clr='#333' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                            <i className="fa-solid fa-compact-disc"></i>/tools
                    </NavLink>
                    <NavLink onClick={func} to='/others' data-clr='#E60866' className={(navData) => (navData.isActive ? 'selected nav__link' : 'nav__link')}>
                            <i className="fa-solid fa-compact-disc"></i>/others
                    </NavLink>
                </ul>
            </nav>
        </div>
     );
}

export default NavBar;