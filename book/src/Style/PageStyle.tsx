import styled from "styled-components";
import '../Font/Evafiya-Font/Evafiya.ttf'

const PageStyle = styled.div`
    @font-face {
        font-family: "evafiya";
        src: url("Evafiya"),
        url("../Font/Evafiya-Font/Evafiya.ttf") format("truetype")
    }

    .letter{
        font-family: evafiya;}
    position: absolute;
    width:100%;
    left: 0;
    top: 0;
`

export default PageStyle