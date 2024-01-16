import { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Competences from "./Competences";
import Photo from "./Photo";
import Description from "./Description";

function Profil(){
    useEffect(() =>{
        
    })
    return(
        <ProfilStyle id="profil-page">
            <div id="profil-content">
                <div className="leftSide">
                    <Competences />
                </div>
                <div className="rightSide">
                    <Photo />
                    <Description />
                </div>
            </div>
        </ProfilStyle>
    )
}

export default Profil


const ProfilStyle = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #647295;

    #profil-content{
        position: relative;
        display: flex;
        width: calc(100vw - 10vw);
        height: calc(100vh - 10vh);
        left: 5vw;
        top: 5vh;
    }

    .leftSide{
        position: relative;
        width: 65%;
        height: 100%;
    }

    .rightSide{
        position: relative;
        width: 35%;
        height: 100%;
    }
    `