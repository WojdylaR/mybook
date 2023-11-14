import { useEffect } from "react";
import ProfilStyle from "../../Style/ProfilStyle";
import {BarreCard, CercleCard} from "./Card";
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
            gsap.fromTo('.img_profil', {left: "500px"}, {scrollTrigger:{
                trigger:'.h22',
                start: "top bottom",
                toggleActions:'restart none none reset',},left: "0px", delay: 0.5,duration: 1.5})
    })
    return(
        <ProfilStyle id="profil-page">
            <div id="profil-content">
                <div id="competence">
                    <h2 className="h22">FRONT-END</h2>
                    <BarreCard name="html" lvl="80"/>
                    <BarreCard name="css" lvl="80"/>
                    <BarreCard name="react" lvl="70"/>
                    <BarreCard name="gsap" lvl="50"/>
                    <h2 className="h21">OTHER</h2>
                    <BarreCard name="c" lvl="60"/>
                    <BarreCard name="cpp" lvl="55"/>
                    <div className="langue"><CercleCard /></div>
                </div>
                <div id="profil">
                    <div id="photo">
                        <div id="photo_container">
                            <img className="img_profil" alt="Ronan Wojdyla" src={require("../../Assets/profil/img_profil.png")} />
                        </div>
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