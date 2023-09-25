import { useEffect } from "react";
import ProfilStyle from "../../Style/ProfilStyle";
import Card from "./Card";
import gsap from "gsap";

function Profil(){
    useEffect(() =>{
        gsap.fromTo('.h21', {opacity: 0}, {scrollTrigger:{
            trigger:'.h21',
            start: "top bottom",
            toggleActions:'restart none none reset',},opacity: 1, delay: 0.5, duration: 1})
        gsap.fromTo('.h22', {opacity: 0}, {scrollTrigger:{
            trigger:'.h22',
            start: "top bottom",
            toggleActions:'restart none none reset',},opacity: 1, delay: 0.5, duration: 1})
    })
    return(
        <ProfilStyle id="profil-page">
            <div id="profil-content">
                <div id="competence">
                    <h2 className="h22">FRONT-END</h2>
                    <Card name="html" lvl="80"/>
                    <Card name="css" lvl="80"/>
                    <Card name="react" lvl="70"/>
                    <Card name="gsap" lvl="50"/>
                    <h2 className="h21">OTHER</h2>
                    <Card name="c" lvl="60"/>
                    <Card name="cpp" lvl="55"/>
                </div>
                <div id="profil">
                    <div id="photo">
                        Photo
                    </div>
                    <div id="txt">
                        Txt
                    </div>
                </div>
            </div>
        </ProfilStyle>
    )
}

export default Profil