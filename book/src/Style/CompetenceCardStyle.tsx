import styled from "styled-components";

const CompetenceCardStyle = styled.div`
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

export default CompetenceCardStyle