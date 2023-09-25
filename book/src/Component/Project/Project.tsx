import { useEffect } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Profil from "../Profil/About";
import Vva from "./Vva";
import {gsap} from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
import Ragetatt from "./RageTatt";
import ProfilStyle from "../../Style/ProfilStyle";
gsap.registerPlugin(ScrollTrigger)


function Project(){

   

    useEffect(()=> {
        const txtSplit = SplitType.create('.h1', {types: 'chars'})
        console.log(txtSplit)
        gsap.fromTo(txtSplit.chars, 
            {y:100, opacity: 0}, 
            {scrollTrigger:{
                trigger:".h1",
                start: "top bottom",
                toggleActions:'restart none none reset',
            },y:0, opacity: 1, stagger:0.08, delay: 0.8,duration: 1, ease:'power4.out'}
            )
            gsap.to('.underline', {scrollTrigger:{
                trigger:".underline",
                start: "top bottom",
                toggleActions:'restart none none reset',
            },delay: 0.4,duration: 1, width:'520px',})    
        },[]
    )

    

    return(
        <ProjectStyle id="projects" >
            <div id="projects-content">
               <div className="tittle"><span className="h1">MY PROJECT</span></div> <span className="underline"/>
            </div>
        </ProjectStyle>
    )
}

export default Project