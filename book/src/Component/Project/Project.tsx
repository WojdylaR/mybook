import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
import ScndCard from "./scndCard"
import styled from "styled-components";
import { RageInterface, VvaInterface } from "./ClassProject";
import Ragetatt from "./RageTatt";
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
            },y:0, opacity: 1, stagger:0.08, delay: 0.8,duration: 1, ease:'power4.out'}
            )    
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
                </div>
                <div ref={d2} className="projectContainer">
                    <ScndCard onShow={()=> ActiveIndex === VvaInterface.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(VvaInterface.num)} activeIndex={ActiveIndex} Interface={VvaInterface}/>
                    <ScndCard onShow={()=> ActiveIndex === RageInterface.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(RageInterface.num)} activeIndex={ActiveIndex} Interface={RageInterface}/>
               </div>
            </div>
        </ProjectStyle>
    )
}

export default Project



const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #9F496E;


    #projects-content{
        position: relative;
        width: 100%;
        height: calc(100% - 200px);
        top: 100px;
        display: flex;
        flex-direction: column;
    }

    .h1{
        color: white;
        font-family:  sans-serif;
        font-weight: 400;
        font-size: 80px;
        text-shadow: rgb(50, 67, 89) 0.1em 0.1em 0.2em
    }

    .tittleSpan{
        position: relative;
        left: 120px;
        width: 50%;
    }

    .tittle{
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .underline{
        position: relative;
        top: 5px;
        display: block;
        width: 0px;
        
        border-top: solid 3px white;
    }

    .projectContainer{
        display: flex;
        justify-content: center;
        position: relative;
        top: 125px;
        height: 450px;
        border-top: 3px solid white;
        border-bottom: 3px solid white;

    }








`