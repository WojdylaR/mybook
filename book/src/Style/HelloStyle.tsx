import styled from "styled-components";
import '../Font/Evafiya-Font/Evafiya.ttf'

const HelloStyle = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    letter-spacing: 5px;
    font-family: evafiya;

    @font-face {
        font-family: "Evafiya";
        src: url("../Font/Evafiya-Font/Evafiya.ttf")
    }

    .test{
        font-family: Evafiya;
    }
    .hello{
    }

    .letter{
        opacity: 0;
        font-family: evafiya;
        font-weight: 400;
        font-size: 400%;
    }

    .welcome{
        position: absolute;
        opacity: 0;
        font-size: 400%;
    }

    .scroll{
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom:  20%;
        font-size: 200%;    
        opacity: 0;
    }


    .arrow{
        position: relative;
        width: 40px;
        top: 40px;
    }
;

`

export default HelloStyle