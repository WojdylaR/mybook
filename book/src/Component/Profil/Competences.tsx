import styled from "styled-components"
import CardCompetence from "./Card"

export default function Competences(){
    return(
        <CompetenceStyle id="triggerCompetence">
            <CardCompetence lvl={90}>Html</CardCompetence>
            <CardCompetence lvl={90}>Css</CardCompetence>
            <CardCompetence lvl={75}>React</CardCompetence>
            <CardCompetence lvl={70}>JavaScript</CardCompetence>
            <CardCompetence lvl={75}>Gsap</CardCompetence>
            <CardCompetence lvl={80}>C</CardCompetence>
            <CardCompetence lvl={60}>C++</CardCompetence>
            <CardCompetence lvl={50}>Docker</CardCompetence>
            <CardCompetence lvl={100}>Français</CardCompetence>
            <CardCompetence lvl={75}>Anglais</CardCompetence>
            <CardCompetence lvl={70}>Créativité</CardCompetence>
            <CardCompetence lvl={100}>Adaptation</CardCompetence>
            <CardCompetence lvl={90}>Autonomie</CardCompetence>
        </CompetenceStyle>
    )
}

const CompetenceStyle = styled.div`
    display: flex;
    align-content: start;
    flex-wrap: wrap;
    gap: 1.75vh;
    width: calc(100% - 2.5vh);
    justify-content: inherit;
    
    height: 100%;
    .grid-item{
        height: 28%;
        max-width: 13vw;
        max-height: 200px;
        aspect-ratio: 170/200;
    }

    @media (max-width: 1250px) {
        gap: 10px;
        justify-content: space-around;
        position: relative;
        top: 25px;
        width: 80vw;
        margin-bottom: 150px;
        width: 100%;
        gap: 1px;
        grid-template-columns: repeat(auto-fill, 175px);
        gap: 10px;

        .grid-item{
        height: 180px;
        max-width: 50vw;

    }
    }
    @media (max-width:390px){
        grid-template-columns: repeat(auto-fill, 150px);
    }
`