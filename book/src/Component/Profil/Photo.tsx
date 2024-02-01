import styled from "styled-components";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function Photo(){

    useEffect(()=>{
        gsap.to('.profilImg', {scrollTrigger:{
            trigger:'.profilImg',
            start:'center bottom'},
            x:-500,
            duration: 1,
            delay: 1
        })})

    return(
        <PhotoStyle>
            <div className="cache" />
            <span ><img alt="RonanWojdyla" className='profilImg' src={require('../../Assets/profil/img_profil.png')} /></span>
        </PhotoStyle>
    )
}
 
const PhotoStyle = styled.div`
    position: relative;
    height: 35vh;
    background: #8B95B0;
    width: calc(100% - 2.5vw);
    left: 2.5vw;
    display: flex;
    justify-content: center;
    border-radius: 15px;

    .cache{
        position: absolute;
        height: 35vh;
        width: 35vh;
        border-radius: 50%;
        background-color: #B2B9CA;

    }

    span{
        position: relative;
        height: 35vh;
        width: 35vh;
        clip-path: circle(50%);
    }

    .profilImg{
        position: relative;
        height: 100%;
        left: 500px;
        clip-path: circle(50%);
    }

    @media (max-width: 1250px){
        left: 0%;
        height: 35vw;
        width: 35vw;

        .profilImg{
            position: relative;
        }

        span{
            height: 35vw;
            width: 35vw;
        }

        .cache{
            height: 35vw;
            width: 35vw;
        }
    }

    @media (max-width: 650px){
            display: none;
        }

`