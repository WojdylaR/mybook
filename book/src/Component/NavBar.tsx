import { useEffect } from 'react'
import NavBarStyle from '../Style/NavBarStyle'
import { gsap } from 'gsap'

function NavBar() {

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
                <label id='home' style={{top: '25px'}}>HOME</label>
                <a href="#home"><img alt="home" onMouseOut={() => handleMouseOut('home')} onMouseOver={() => handleMouseOver('home')} className='logo' src={require('../Assets/home.png')}/></a>
            </div>
            <div>
                <label id='profil' style={{top: '40px'}}>PROFIL</label>
                <img alt="profil" onMouseOut={() => handleMouseOut('profil')} onMouseOver={() => handleMouseOver('profil')} className='logo' src={require('../Assets/profil.png')}/>
            </div>
            <div>
                <label id='projects' style={{top: '60px'}}>PROJECTS</label>
                <img alt="projects" onMouseOut={() => handleMouseOut('projects')} onMouseOver={() => handleMouseOver('projects')} className='logo' src={require('../Assets/work.png')}/>
            </div>
            <div>
                <label id='contact' style={{top: '50px'}}>CONTACT</label>
                <img alt="contact" onMouseOut={() => handleMouseOut('contact')} onMouseOver={() => handleMouseOver('contact')} className='logo' src={require('../Assets/contact.png')}/>
            </div>
        </NavBarStyle>
    )
}

export default NavBar