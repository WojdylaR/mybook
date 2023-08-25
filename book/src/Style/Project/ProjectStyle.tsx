import styled from "styled-components";

const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(86, 115, 154);


    #projects-content{
        position: relative;
        width: calc(100% - 180px);
        height: calc(100% - 200px);
        left: 60px;
        top: 100px;
    }

    h1{
        color: white;
        font-family:  sans-serif;
        font-weight: 400;
        font-size: 80px;
    }

    .tittle{

        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }


`

export default ProjectStyle