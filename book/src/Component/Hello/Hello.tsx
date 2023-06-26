import { useEffect } from "react"
import HelloStyle from "../../Style/HelloStyle"
import {gsap} from "gsap"

function Hello(){
    gsap.fromTo(".letter", {opacity: 0, x: 200, }, {opacity: 1, x: 0, stagger: 0.25})
    useEffect(() => {
        gsap.fromTo(".letter", {opacity: 0, x: 200 }, {opacity: 1, x: 0, stagger: 0.25})
        gsap.to(".letter", {fontSize: 150, letterSpacing: 100, x: 0,delay: 1.5})
        gsap.to(".letter",{x: -200, rotate: -90,delay: 2.5, duration: 1, stagger: 0.2, opacity: 0})
        gsap.to(".welcome", {opacity: 1, delay: 4})
    })

    return(
        <HelloStyle>

                <span className="letter">H</span>
                <span className="letter">E</span>
                <span className="letter">L</span>
                <span className="letter">L</span>
                <span className="letter">O</span>

            <p className="welcome">
                Welcome to my Website
            </p>
        </HelloStyle>
    )
}

export default Hello