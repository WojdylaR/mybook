import styled from "styled-components";

const VvaStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(218, 169, 191);
    position: relative;
    top: 100%;

    #container{
        position: relative; 
        height: calc(100vh - 80px);
        width: calc(100vw - 80px);
        left: 40px;
        top: 40px;
        background-color: rgb(199, 144, 169);
        border-radius: 10px;
    }

    #frame{
        position: relative;
        top: 7%;
        left: 2.5%;
        width: 45%;
        height: 80%;
        border-radius: 10px;
    }
`

export default VvaStyle