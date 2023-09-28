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
        border-radius: 27px;
    background: #ffffff;
box-shadow:  5px 5px 100px rgb(109, 145, 145),
             -5px -5px 100px #ffffff;
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
        height: calc(100%);
        width: calc(30%);
        border-top-right-radius: 27px;
        border-bottom-right-radius: 27px;
        display: flex;
        flex-direction: column;
    }   

    #photo{
        position: relative;
        width: 100%;
        height: 40%;
        border-top-right-radius: 27px;
        background-color: #1a78ca;
        background: #1a78ca;
        box-shadow: inset -5px -5px 10px #1561a4,
                    inset 5px 5px 10px #1f8ff0;
        display: flex;
        justify-content: center;
        align-items: center
    }

    #photo_container{
        background: blue;
        position: relative;
        width: 275px;
        height: 275px; 
        border-radius: 50%;
        background: #ffffff;
        box-shadow: inset -5px -5px 10px #cfcfcf,
            inset 5px 5px 10px #ffffff;
        clip-path: circle(50%);
    }

    .img_profil{
        position: relative; 
        height: 100%;
        left: 500px;
    }

    #txt{
        position: relative;
        width: 100%;
        height: 60%;
        border-bottom-right-radius: 27px;
        background: #1561a3;
        box-shadow: inset -5px -5px 10px #114f84,
            inset 5px 5px 10px #1973c2;
    }
    `
    
export default ProfilStyle