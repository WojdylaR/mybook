import { useEffect } from "react"
import {gsap} from "gsap"
import styled from "styled-components";

function Hello(){
    const tl = gsap.timeline();

    useEffect(() => {
        tl.fromTo(".letter", {opacity: 0, x: 200 }, {opacity: 1, x: 0, stagger: 0.25})
        tl.to(".letter", {fontSize: '8vw',delay: 0.5, letterSpacing: '4vw', x: 0,})
        tl.to(".letter",{x: -200,delay: 0.5, duration: 1, stagger: 0.2, opacity: 0})
        tl.to(".welcome", {opacity: 1, duration: 1})
        tl.to(".welcome", {y:-175,fontSize: '8vw', duration: 1})
        tl.to(".scroll", {opacity: 1,delay: 1, duration: 0.75, yoyo: true,repeat: Infinity})
    })

    return(
        <HelloStyle id="hello">
                <span className="letter">B</span>
                <span className="letter">O</span>
                <span className="letter">N</span>
                <span className="letter">J</span>
                <span className="letter">O</span>
                <span className="letter">U</span>
                <span className="letter">R</span>
            <div className="welcome">
                Bienvenue sur mon<br />Portfolio
            </div>
            <div className="scroll">
                <span>Scroll pour Continuer</span>
                <span><img alt="arrow" className="arrow" src={require('../../Assets/arrow.png')}/></span>
            </div>
        </HelloStyle>
    )
}

export default Hello


const HelloStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    letter-spacing: 5px;
    font-family: evafiya;

    .hello{
    }

    .letter{
        opacity: 0;
        font-family: evafiya;
        font-weight: 400;
        font-size: max(2vw, 2em);
    }

    .welcome{
        position: absolute;
        opacity: 0;
        font-size: 5vw;
        text-align: center;
    }

    .scroll{
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom:  20%;
        font-size: 200%;    
        opacity: 0;
    }


    .arrow{
        position: relative;
        width: 40px;
        top: 40px;
        
    }
;

`