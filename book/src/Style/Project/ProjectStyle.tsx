import styled from "styled-components";

const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(218, 169, 191);
    #projects-content{
        position: relative;
        width: calc(100% - 200px);
        height: calc(100% - 200px);
        left: 100px;
        top: 100px;
        display: flex;
        flex-direction: column;
        color: white;
    }

    h1{
        font-family: font2;
        font-size: 400%;
        letter-spacing: 5px;
    }

    .project{
        margin-bottom: 15px;
    }
`

export default ProjectStyle