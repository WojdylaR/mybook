import { useEffect } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Profil from "../Profil/About";
import Vva from "./Vva";
import {gsap} from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
import Ragetatt from "./RageTatt";
gsap.registerPlugin(ScrollTrigger)


function Project(){

   

    useEffect(()=> {
        const txtSplit = SplitType.create('h1', {types: 'chars'})
        console.log(txtSplit)
        gsap.fromTo(txtSplit.chars, 
            {y:100, opacity: 0}, 
            {scrollTrigger:{
                trigger:"h1",
                start: "top bottom",
                markers: true,
                toggleActions:'restart none none reset',
            },y:0, opacity: 1, stagger:0.04, delay: 0.4,duration: 1, ease:'power4.out'})},[]
    )

    

    return(
        <ProjectStyle id="projects" >
            <div id="projects-content">
               <div className="tittle"><h1 id="titre">MY PROJECT</h1></div> 
            </div>
        </ProjectStyle>
    )
}

export default Project