import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
import Card from "./Card"
import styled from "styled-components";
import { NoProjectInterface1, NoProjectInterface2, RageInterface, VvaInterface } from "./ClassProject";
gsap.registerPlugin(ScrollTrigger)


function Project(){

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

    
    const [ActiveIndex, setIsAtiveIndex] = useState(-1)

    return(
        <ProjectStyle id="projects" >
            <div id="projects-content">
               <div className="tittleSpan">
                    <div className="tittle">
                        <span className="h1">
                            MY PROJECT
                        </span>
                    </div>
                </div>
                <div id="projectContainer">
                    <Card onShow={()=> ActiveIndex === VvaInterface.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(VvaInterface.num)} activeIndex={ActiveIndex} Interface={VvaInterface}/>
                    <Card onShow={()=> ActiveIndex === RageInterface.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(RageInterface.num)} activeIndex={ActiveIndex} Interface={RageInterface}/>
                    <Card onShow={()=> ActiveIndex === NoProjectInterface1.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(NoProjectInterface1.num)} activeIndex={ActiveIndex} Interface={NoProjectInterface1}/>
                    <Card onShow={()=> ActiveIndex === NoProjectInterface2.num ? setIsAtiveIndex(-1) : setIsAtiveIndex(NoProjectInterface2.num)} activeIndex={ActiveIndex} Interface={NoProjectInterface2}/>
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
    background-color: #22223b;


    #projects-content{
        position: relative;
        width: 100%;
        top: 50px;
        display: flex;

        flex-direction: column;
    }
    .h1{
        color: white;
        font-family: evafiya;
        font-weight: 400;
        font-size: 80px;
    }

    .tittleSpan{
        position: relative;
        left: 0px;
        width: 100%;
    }

    .tittle{
        display: flex;
        justify-content: center;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    #projectContainer{
        display: flex;
        justify-content: center;
        position: relative;
        top: 50px;
        height: 450px;

        width: 100%;
            height: auto;
            flex-direction: column;

    }






`