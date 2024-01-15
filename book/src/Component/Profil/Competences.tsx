import styled from "styled-components"
import CardCompetence from "./Card"

export default function Competences(){
    return(
        <CompetenceStyle >
            <CardCompetence lvl={70}>Html</CardCompetence>
            <CardCompetence lvl={50}>Css</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>JavaScript</CardCompetence>
            <CardCompetence lvl={50}>Gsap</CardCompetence>
            <CardCompetence lvl={50}>C</CardCompetence>
            <CardCompetence lvl={50}>C++</CardCompetence>
            <CardCompetence lvl={50}>Docker</CardCompetence>
            <CardCompetence lvl={50}>Français</CardCompetence>
            <CardCompetence lvl={50}>Anglais</CardCompetence>
            <CardCompetence lvl={50}>Créativité</CardCompetence>
            <CardCompetence lvl={50}>Adaptation</CardCompetence>
            <CardCompetence lvl={50}>Autonomie</CardCompetence>
        </CompetenceStyle>
    )
}

const CompetenceStyle = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 175px);
    gap: 30px;
    width: calc(100% - 2.5vh);
    
    .grid-item{
        height: 175px;
    }
`