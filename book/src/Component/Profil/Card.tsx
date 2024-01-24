import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";
import { BarreCard } from "./BarreCard";
gsap.registerPlugin(ScrollTrigger)



export default function CardCompetence(props: any){


    return(
        <CompetenceCardStyle className="grid-item">
            <img alt={props.children} src={require(`../../Assets/profil/logo/${props.children}.png`)}/>
            <h3>{props.children}</h3>
            <div className="barre"><BarreCard p={props.lvl} /></div>
        </CompetenceCardStyle>
    )
}



const CompetenceCardStyle = styled.div`
    background-color: #D8DCE5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border: solid 2px rgb(72, 72, 72);
    border-radius: 4px;

    img{
        position: relative;
        height: 45%;
    }

    h3{
        font-family: lustria;
        font-size: 150%;
        color: black;
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
    }

    .barre{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        
    }
`