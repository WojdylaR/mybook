import styled from "styled-components";

export default function Description(){
    return(
        <DescriptionStyle>
            Toto
        </DescriptionStyle>
    )
}

const DescriptionStyle = styled.div`
    position: relative;
    height: calc(60% - 2.5vh);
    width: calc(100% - 2.5vw);
    background-color: white;
    left: 2.5vw;
    top: 2.5vh;
`