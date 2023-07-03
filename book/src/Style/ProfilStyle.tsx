import styled from "styled-components";

const ProfilStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(175, 213, 213);

    #cadre{
        position: relative;
        width: calc(100% - 160px);
        height: calc(100% - 160px);
        left: 80px;
        top : 80px;
        background-color: white;
        border: solid 4px black;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
    }

    #c1{
        position: relative;
        width: calc(40% - 2px);
        height: calc(50% - 2px);
        border-top-left-radius: 15px;
        border-bottom: solid  2px black;
        border-right: solid  2px black;
        background-color: black;
    }

    #c2{
        width: calc(60% - 2px);
        height: calc(50% - 2px);
        border-bottom: solid black 2px;
        border-left: solid  2px black;
    }

    #c3{
        width: calc(40% - 2px);
        height: calc(50% - 2px);
        border-top: solid  2px black;
        border-right: solid  2px black;
    }

    #c4{
        width: calc(60% - 2px);
        height: calc(50% - 2px);
        border-top: solid  2px black;
        border-left: solid  2px black;
    }
    
`

export default ProfilStyle