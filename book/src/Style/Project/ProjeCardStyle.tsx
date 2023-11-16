import styled from "styled-components";

const ProjectCardStyle = styled.div`
    .all{
        position: relative;
    width: 100%;
    display: flex;
    border-bottom: 3px solid white;
    height: 150px;
    }
    cursor: pointer;
    .all:hover{
        .tittleWhite{
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
        }
    }

    .tittle{
      display: flex;
      height: 100%;
      position: relative;
      background-color: rgb(86, 115, 154);
      color: white;
      width: 100vw;
    }

    .tittle .num{
        position: relative;
        left: 100px;
        top: 20px;
        font-family: sans-serif;
        margin-right: 15px;
        font-size: 125%;
    }

    .tittle .underlineNum{
        position: relative;
        top: 3px;
        display: block;
        width: 100%;
        
        border-top: solid 2px white;
    }

    .tittle h2{
        font-family: evafiya;
        font-size: 500%;
        align-self: center;
        position: relative;
        left: 100px;
    }

    .tittleWhite{
      display: flex;
      height: 100%;
      position: absolute;
      width: 100vw;
      color: black;
      background-color: white;
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0 100%);
      transition: 0.5s;
    }


    .tittleWhite .num{
        position: relative;
        top: 20px;
        left: 100px;
        font-family: sans-serif;
        margin-right: 15px;
        font-size: 125%;
    }

    .tittleWhite .underlineNum{
        position: relative;
        top: 3px;
        display: block;
        width: 100%;
        border-top: solid 2px black;
    }

    .tittleWhite h2{
        position: relative;
        font-family: evafiya;
        font-size: 500%;
        align-self: center;
        left: 100px;
    }
`
    
export default ProjectCardStyle