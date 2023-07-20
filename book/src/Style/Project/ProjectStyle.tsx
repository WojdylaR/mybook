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

    .project{
        margin-bottom: 15px;
        
    }

    .projectsPage{
        position: relative;
        height: 100%;
        width: 45%;
        border: 2px  solid white;
        border-radius: 15px;
        background-color: white;
    }

    .content{
        height: 100%;
        width: 100%;
        background-color: rgb(235, 214, 190);
        position: absolute;
        top: 0px;
        border-radius: 13px;
        transition: 0.5s;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        position: relative;
    }


    .project:hover .content{
        opacity: 0.2;
    }
     .project:hover a{
        opacity: 1;
     }

    .tittleContainer{
        color: black;
    }

    .imgContainer{
        position: relative;
        width: 100%;
        height: 70%;    
    }

    .imgProject{
        width: 100%;
    }
`

export default ProjectStyle