import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Profil from "../Profil/About";
import Vva from "./Vva";
import {gsap} from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
import Ragetatt from "./RageTatt";
import ProfilStyle from "../../Style/ProfilStyle";
import ProjectCard from "./ProjectCard";
import Echap from "./Echape";
import ScndCard from "./scndCard"
gsap.registerPlugin(ScrollTrigger)


function Project(){

    const d1 = useRef<HTMLHeadingElement>(null);
    const d2 = useRef<HTMLHeadingElement>(null);

    const [d, setD] = useState(0)

    useEffect(()=> {
        const txtSplit = SplitType.create('.h1', {types: 'chars'})
        
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

    useLayoutEffect(() => {
        if (d1 && d1.current && d2 && d2.current) {
            
            setD(d1.current.offsetTop + d2.current.offsetTop)
          }
        }, []);
    
    const [ActiveIndex, setIsAtiveIndex] = useState(-1)

    return(
        <ProjectStyle id="projects" >
            <div ref={d1} id="projects-content">
               <div className="tittleSpan">
                    <div className="tittle">
                        <span className="h1">
                            MY PROJECT
                        </span>
                    </div>
                    <span className="underline"/>
                </div>
                <div ref={d2} className="projectContainer">
                    <ScndCard onShow={()=> ActiveIndex == 0 ? setIsAtiveIndex(-1) : setIsAtiveIndex(0)} activeIndex={ActiveIndex} num="0" title="VVA"></ScndCard>
                    <ScndCard onShow={()=> ActiveIndex == 1 ? setIsAtiveIndex(-1) : setIsAtiveIndex(1)} activeIndex={ActiveIndex} num="1" title="Rage"></ScndCard>
                    <ScndCard onShow={()=> ActiveIndex == 2 ? setIsAtiveIndex(-1) : setIsAtiveIndex(2)} activeIndex={ActiveIndex} num="2" title="IN PROCESS"></ScndCard>
               </div>
            </div>
        </ProjectStyle>
    )
}

export default Project