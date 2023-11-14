import styled from "styled-components";

export const CompetenceCardStyle = styled.div`
    position: relative;
    height: 70px;
    display: flex;
    align-items: center;
    
    

    .logo{
        position: relative;
        width: 15%;
        display: flex;
        justify-content: center;
    }
    .barre{
        height: 10px;
        display: flex;
        width: 80%;
    }

    .img{
        position: relative;
        width: 40px;
    }

    .startBarre{
        position: relative;
        height: 100%;
        background-color: #282828;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .endBarre{
        position: relative;
        height: 100%;
        background-color: #b0b0b0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

`

export const CercleCardStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    top: 50px;

    .circle{
        position: relative;
        height: 200px;
        width: 200px;
    }
    .startCircle{
        height: 200px;
        width: 200px;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        background: linear-gradient(135deg, #282828 50%, #b0b0b0 0%);
        box-shadow: inset 0px -100px 0px #ffffff,
            inset 0px 0px 0px   green;
    }

    .hiddenCircle{
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
        height: 160px;
        width: 160px;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        background-color: white;
    }

    .hideAll{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 3;
        height: 200px;
        width: 200px;
        background-color: white;
    }
    
    h2{
        position: relative;
        top: -100px;
        z-index: 3;
    }
`