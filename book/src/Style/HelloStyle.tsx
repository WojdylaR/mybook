import styled from "styled-components";

const HelloStyle = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200%;
    letter-spacing: 5px;

    .hello{
    }

    .letter{
        opacity: 0;
    }

    .welcome{
        position: absolute;
        opacity: 0;
    }
`

export default HelloStyle