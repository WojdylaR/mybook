import styled from "styled-components";

const ProjectStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(218, 169, 191);


    #projects-content{
        position: relative;
        width: calc(100% - 180px);
        height: calc(100% - 120px);
        left: 60px;
        top: 60px;
        display: flex;
        justify-content: space-between;
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

    .projectsPage{
        position: relative;
        height: 100%;
        width: 45%;
        border: 2px  solid black;
        border-radius: 15px;

    }
    .content{
        height: 100%;
        width: 100%;
        background-color: white;
        position: absolute;
        top: 0px;
        border-radius: 13px;
    }

    #ragetatt:hover .content{
    }

`

export default ProjectStyle