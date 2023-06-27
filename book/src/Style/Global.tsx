import { createGlobalStyle } from "styled-components";
import '../Font/Evafiya-Font/Evafiya.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "evafiya";
        src: url("Evafiya"),
        url("../Font/Evafiya-Font/Evafiya.ttf") format("truetype")
    }

`