import styled from "styled-components"
import CardCompetence from "./Card"

export default function Competences(){
    return(
        <CompetenceStyle >
            <CardCompetence lvl={70}>Html</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
            <CardCompetence lvl={50}>React</CardCompetence>
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