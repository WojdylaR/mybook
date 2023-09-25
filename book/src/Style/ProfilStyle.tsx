import styled from "styled-components";

const ProfilStyle = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(175, 213, 213);
    
    h2{
        position: relative;
        align-self: center;
        font-family:  sans-serif;
    }
    #profil-content{
        position: relative;
        width: calc(100% - 260px);
        height: calc(100% - 260px);
        background-color: white;
        display: flex;
        top: 130px;
        left: 130px;
        border-radius: 10px;
        color: black;
    }

    #competence{
        position: relative;
        display: flex;
        flex-direction: column;
        height: calc(100% - 100px);
        width: calc(70% - 50px);
        top: 50px;
        left: 50px;
        margin-right: 50px;
    }

    #profil{
        position: relative;
        height: calc(100% - 100px);
        width: calc(30% - 50px);
        top: 50px;
        background-color: green;
        display: flex;
        flex-direction: column;
    }   

    #photo{
        position: relative;
        width: 100%;
        height: 40%;
        background-color: blue;
    }

    #txt{
        position: relative;
        width: 100%;
        height: 70%;
    }
    `
    
export default ProfilStyle