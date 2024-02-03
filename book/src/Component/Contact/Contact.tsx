import styled from "styled-components";
import ImageContainer from "./ImageContainer";
import { useEffect } from "react";
import { gsap } from "gsap/all";
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)



function Contact(){

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


    return (
        <ContactStyle id="contact">
            <div className="tittleSpan">
                    <div className="tittle">
                        <span className="h1">
                            Me Contacter
                        </span>
                    </div>
                </div>
            <div id="contact-content">
                <ImageContainer />
            </div>
        </ContactStyle>
    )
}

export default Contact



const ContactStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color:  #4a4e69;
    #contact-content{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
    }

    .h1{
        color: white;
        font-family: evafiya;
        font-weight: 400;
        font-size: 80px;
    }

    .tittleSpan{
        position: absolute;
        left: 0px;
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tittle{
        display: flex;
        justify-content: center;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`