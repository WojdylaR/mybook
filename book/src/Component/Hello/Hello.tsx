import { useEffect } from "react"
import HelloStyle from "../../Style/HelloStyle"
import {gsap} from "gsap"

function Hello(){
    const tl = gsap.timeline();

    useEffect(() => {
        tl.fromTo(".letter", {opacity: 0, x: 200 }, {opacity: 1, x: 0, stagger: 0.25})
        tl.to(".letter", {fontSize: 150,delay: 0.5, letterSpacing: 100, x: 0,})
        tl.to(".letter",{x: -200,delay: 0.5, duration: 1, stagger: 0.2, opacity: 0})
        tl.to(".welcome", {opacity: 1, duration: 1})
        tl.to(".welcome", {y:-175,fontSize: 125, duration: 1})
        tl.to(".scroll", {opacity: 1,delay: 1, duration: 0.75, yoyo: true,repeat: Infinity})
    })

    return(
        <HelloStyle>

                <span className="letter">H</span>
                <span className="letter">E</span>
                <span className="letter">L</span>
                <span className="letter">L</span>
                <span className="letter">O</span>
            <div className="welcome">
                Welcome to my Website
            </div>
            <div className="scroll">
                <span>Scroll to Continue</span>
                <span><img alt="arrow" className="arrow" src={require('../../Assets/arrow.png')}/></span>
            </div>
        </HelloStyle>
    )
}

export default Hello