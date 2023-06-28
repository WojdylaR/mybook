import styled from "styled-components";

const NavBarStyle = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 50px;
    right: 10px;
    align-items: center;
    height: 60%;
    top: 20%;
    justify-content: space-around;
    border-left: solid 1px white;
    color: white;
    z-index: 2;
    opacity: 0;

    .logo{
        position: relative;
        width: 30px;
        left: -5px;
        transition: 0.1s;
    }

    .logo:hover{
        scale: 1.2;
        cursor: pointer;
    }

    label{
        position: relative;
        writing-mode: vertical-rl;
        text-orientation: upright;
        right: 35px;
        font-family: Bebas Neue;
        letter-spacing: -1px;
        opacity: 0;
    }
`
export default NavBarStyle