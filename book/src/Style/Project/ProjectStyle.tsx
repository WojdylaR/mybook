import styled from "styled-components";

const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #9F496E;


    #projects-content{
        position: relative;
        width: 100%;
        height: calc(100% - 200px);
        top: 100px;
        display: flex;
        flex-direction: column;
    }

    .h1{
        color: white;
        font-family:  sans-serif;
        font-weight: 400;
        font-size: 80px;
        text-shadow: rgb(50, 67, 89) 0.1em 0.1em 0.2em
    }

    .tittleSpan{
        position: relative;
        left: 120px;
    }

    .tittle{

        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .underline{
        position: relative;
        top: 5px;
        display: block;
        width: 0px;
        
        border-top: solid 3px white;
    }

    .projectContainer{
        display: flex;
        justify-content: center;
        position: relative;
        top: 125px;
        height: 450px;
        border-top: 3px solid white;
        border-bottom: 3px solid white;
    }








`

export default ProjectStyle