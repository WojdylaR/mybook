import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import styled from "styled-components";

gsap.registerPlugin(ScrollToPlugin)



function NavBar() {

    function scrollOnClick (name: string){

        console.log(name)

        gsap.to(window, {duration: 1, scrollTo: `#${name}`});
    }

    useEffect(() => {
        gsap.to('.nav_bar', {opacity: 1, duration: 0.5, delay: 7.5})
    })

    function handleMouseOver(name: string) {
        gsap.to(`#${name}`, { opacity: 1, delay: 0.1 });
      }
      
      function handleMouseOut(name: string) {
        gsap.to(`#${name}`, { opacity: 0, delay: 0.1 });
      }

    return( 
        <NavBarStyle className='nav_bar'>
            <div className='logo_container'>
                <label id='homeNav' style={{top: '25px'}}>HOME</label>
                <a href="#home"><img alt="home" onClick={() =>scrollOnClick('home')} onMouseOut={() => handleMouseOut('homeNav')} onMouseOver={() => handleMouseOver('homeNav')} className='logo' src={require('../../Assets/home.png')}/></a>
            </div>
            <div>
                <label id='profilNav' style={{top: '40px'}}>PROFIL</label>
                <img alt="profil" onClick={() =>scrollOnClick('profil-page')}    onMouseOut={()  => handleMouseOut('profilNav')} onMouseOver={() => handleMouseOver('profilNav')} className='logo' src={require('../../Assets/profil.png')}/>
            </div><div>
                <label id='projectsNav' style={{top: '60px'}}>PROJECTS</label>
                <img alt="projects" onClick={() =>scrollOnClick('projects')} onMouseOut={() => handleMouseOut('projectsNav')} onMouseOver={() => handleMouseOver('projectsNav')} className='logo' src={require('../../Assets/work.png')}/>
            </div><div>
                <label id='contactNav' style={{top: '50px'}}>CONTACT</label>
                <img alt="contact" onClick={() =>scrollOnClick('contact-content')} onMouseOut={() => handleMouseOut('contactNav')} onMouseOver={() => handleMouseOver('contactNav')} className='logo' src={require('../../Assets/contact.png')}/>
            </div>
        </NavBarStyle>
    )
}

export default NavBar



const NavBarStyle = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 50px;
    right: 10px;
    align-items: center;
    height: 60%;
    top: 20%;
    justify-content: space-around;
    border-left: solid 1px white;
    color: white;
    
    z-index: 2;
    opacity: 0;

    .logo{
        position: relative;
        width: 30px;
        left: -5px;
        transition: 0.1s;
    }

    .logo:hover{
        scale: 1.2;
        cursor: pointer;
    }

    label{
        position: relative;
        writing-mode: vertical-rl;
        text-orientation: upright;
        right: 35px;
        font-family: Bebas Neue;
        letter-spacing: -1px;
        opacity: 0;
    }
`