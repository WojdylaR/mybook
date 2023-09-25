import styled from "styled-components";

const ProfilStyle = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(175, 213, 213);
    
    #profil-content{
        position: relative;
        width: calc(100% - 260px);
        height: calc(100% - 260px);
        background-color: white;
        display: flex;
        top: 130px;
        left: 130px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        color: white;
    }

    `
    
export default ProfilStyle