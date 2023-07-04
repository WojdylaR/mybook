import styled from "styled-components";

const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(218, 169, 191);
    #projects-content{
        position: relative;
        width: calc(100% - 160px);
        height: calc(100% - 160px);
        left: 80px;
        top: 80px;
        display: flex;
        flex-direction: column;
        color: white;
    }


    .project{
        margin-bottom: 25px;
    }
`

export default ProjectStyle