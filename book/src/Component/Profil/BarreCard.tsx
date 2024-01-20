import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
export function BarreCard(p:any){

    useEffect(() =>{
        gsap.to(".startBarre" + p.p ,{scrollTrigger:{
            trigger:'.startBarre',
            start:"top bottom",},
            width: `${p.p}%`,
            delay: 1,
            duration: Math.random() + 0.5,
            })
        })


    return(
        <BarreCardStyle>
            <div style={{borderTopRightRadius: p.p == 100 ? 5 : 0, borderBottomRightRadius: p.p == 100 ? 5 : 0}} className={`startBarre startBarre` + p.p}/>
        </BarreCardStyle>
    )
}

const BarreCardStyle = styled.div`
    position: relative;
    width: 80%;

    height: 10px;
    background-color: #8a8a8a;
    border-radius: 5px;

    .startBarre{
        position: absolute;
        height: 100%;
        width: 0px;
        background-color: black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`