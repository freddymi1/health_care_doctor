import { HashLink } from "react-router-hash-link";

import {FaRegUser} from 'react-icons/fa';
import {IoBriefcaseOutline} from 'react-icons/io5';
import {AiOutlineHome, AiOutlineSend, AiOutlineCloseCircle, AiOutlineAppstore} from 'react-icons/ai';
import {BsImage} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi'
import { useState } from "react";


export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const navMenu = document.getElementById('nav-menu');
    const navLink = document.querySelectorAll(".nav__link")

    const navLinkMenu = () => {
        // const navMenu = document.getElementById('nav-menu');
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    navLink.forEach(n=>n.addEventListener('click', navLinkMenu))

    const handleOpen = (e)=>{
        e.preventDefault()
        setIsOpen(true)
    }

    const handleClose = (e)=>{
        e.preventDefault()
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    if(isOpen){
        navMenu.classList.add('show__menu')
    }
    window.addEventListener("scroll", ()=>{
        const detectScroll = ()=>{
            const scrollUp = document.getElementById("header")
            if(window.scrollY >= 80){
                scrollUp.classList.add("headB")
            }else{
                scrollUp.classList.remove("headB")
            }
        }
    
        window.addEventListener('scroll', detectScroll)
    });

    
    

    return(
        <header className="header" id="header">
            <nav className="_nav _containerN">
                <HashLink to="#" className="nav__logo">
                    <img src={props.logo} alt="" />
                </HashLink>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list _grid">
                        <li className="nav__item">
                            <HashLink to="#home" className="nav__link">
                                <AiOutlineHome className="nav__icon"/> Home
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#work" className="nav__link">
                                <FaRegUser className="nav__icon"/> Work
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#about" className="nav__link">
                                <GiSkills className="nav__icon"/> About
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#schedule" className="nav__link">
                                <IoBriefcaseOutline className="nav__icon"/>Schedule
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#review" className="nav__link">
                                <BsImage className="nav__icon"/>Reviews
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#blog" className="nav__link">
                                <AiOutlineSend className="nav__icon"/>Blog
                            </HashLink>
                        </li>    
                    </ul>
                    <AiOutlineCloseCircle className="nav__close" id="nav-close" onClick={(e)=>handleClose(e)}/>
                </div>
                <div className="_shadowBlock"></div>
                <div className="nav__btns">
                    <button className="nav__btn">Let's talk</button>
                    <div className="nav__toggle" id="nav-toggle" onClick={(e)=>handleOpen(e)}>
                        <AiOutlineAppstore/>
                    </div>
                </div>
            </nav>
        </header>
    )
}