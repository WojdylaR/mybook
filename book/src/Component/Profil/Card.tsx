import { useEffect } from "react";
import {CompetenceCardStyle, CercleCardStyle } from "../../Style/CompetenceCardStyle"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Barre(p:any){
    return(
        <div className="barre">
            <div  className={`startBarre${p.name} startBarre`}/>
            <div  className={`endBarre endBarre${p.name}`}/>
        </div>
    )
}

export function BarreCard(props: any){

    useEffect(() =>{
        gsap.fromTo(`.startBarre${props.name}`, {width:0, color: 'black'}, {scrollTrigger:{
            trigger:`.startBarre${props.name}`,
            start: "top bottom",
            toggleActions:'restart none none reset',},width: `${props.lvl}%`, delay: 0.5,duration: 0.75})
        gsap.fromTo(`.endBarre${props.name}`, {width:0, color: 'black'}, {
            scrollTrigger:{
                trigger:`.startBarre${props.name}`,
                start: "top bottom",
                toggleActions:'restart none none reset',},
            width: `calc(100% - ${props.lvl}%)`, duration: 0.75, delay: 0.9})
        gsap.fromTo(`.logo${props.name}`, {opacity: 0}, {scrollTrigger:{
            trigger:`.startBarre${props.name}`,
            start: "top bottom",
            toggleActions:'restart none none reset',},opacity: 1, delay: 0.5, duration: 1})
    })
    return(
        <CompetenceCardStyle>
           <div className={`logo${props.name} logo`}><img className="img" alt={props.name} src={require(`../../Assets/profil/logo/${props.name}.png`)}/></ div> <Barre name={props.name} p={props.lvl} />
        </CompetenceCardStyle>
    )
}

export function CercleCard (){

    useEffect(()=>{
        gsap.fromTo(`.hideAll`, {opacity: 1}, {scrollTrigger:{
            trigger:`.hideAll`,
            start: "top bottom",
            toggleActions:'restart none none reset',},opacity: 1, delay: 0.5, duration: 1, left:'200px' })
    })

    return (
        <CercleCardStyle>
            <div className="circle">
                <div className="startCircle"/>
                <div className="hiddenCircle"/>
                <div className="hideAll" />
            </div>
            <h2>Francais</h2>
            
        </CercleCardStyle>
    )
}