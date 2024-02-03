import styled from "styled-components"
import CardCompetence from "./Card"

export default function Competences(){
    return(
        <CompetenceStyle >
            <CardCompetence lvl={80}>Html</CardCompetence>
            <CardCompetence lvl={80}>Css</CardCompetence>
            <CardCompetence lvl={65}>React</CardCompetence>
            <CardCompetence lvl={55}>JavaScript</CardCompetence>
            <CardCompetence lvl={60}>Gsap</CardCompetence>
            <CardCompetence lvl={70}>C</CardCompetence>
            <CardCompetence lvl={50}>C++</CardCompetence>
            <CardCompetence lvl={40}>Docker</CardCompetence>
            <CardCompetence lvl={100}>Français</CardCompetence>
            <CardCompetence lvl={75}>Anglais</CardCompetence>
            <CardCompetence lvl={50}>Créativité</CardCompetence>
            <CardCompetence lvl={80}>Adaptation</CardCompetence>
            <CardCompetence lvl={80}>Autonomie</CardCompetence>
        </CompetenceStyle>
    )
}

const CompetenceStyle = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 175px);
    gap: 10px;
    width: calc(100% - 2.5vh);
    .grid-item{
        height: 17vh;

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

        .grid-item{
        height: 150px;

    }
    }
    @media (max-width:390px){
        grid-template-columns: repeat(auto-fill, 150px);
    }
`