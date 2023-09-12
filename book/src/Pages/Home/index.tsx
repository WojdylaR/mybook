import HelloStyle from '../../Style/HelloStyle'
import Hello from '../../Component/Hello/Hello'
import Project from '../../Component/Project/Project'
import Contact from '../../Component/Contact/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import Profil from '../../Component/Profil/About'
gsap.registerPlugin(ScrollTrigger)

function Home() {

    useEffect(() =>{
        ScrollTrigger.create({
            trigger: "#profil-page",
            start: "top top", 
            end: "bottom 0px",
            pin: "#profil-content"
        });
        ScrollTrigger.create({
            trigger: "#projects",
            start: "top top", 
            end: "bottom 0px",
            pin: "#projects-content"
          });
          
         
        })

    return (
        <div>
            <Hello />
            <Profil />
            <Project />
            <Contact />
        </div>
    )
}

export default Home