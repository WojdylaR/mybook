import styled from "styled-components";

export default function Description(){
    return(
        <DescriptionStyle>
            <div className="tittle">
                <h3>A Propos De Moi:</h3>
            </div>
            <div className="description">

            </div>
        </DescriptionStyle>
    )
}

const DescriptionStyle = styled.div`
    position: relative;
    height: calc(60% - 2.5vh);
    width: calc(100% - 2.5vw);
    background-color: #8B95B0;
    left: 2.5vw;
    top: 2.5vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    .tittle{
        position: relative;
        background-color: #B2B9CA;
        height: 12%;
        width: 80%;
        left: 10%;
        top: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 125%;
        margin-bottom: 10%;
        color: black;
    }

    .description{
        position: relative;
        height: 58%;
        width: 80%;
        top: 10%;
        left: 10%;
        border-radius: 7px;
        background-color: #B2B9CA;
    }

    @media (max-width: 1250px){
        left: 0%;
        width: 50vw;
        height: 35vw;
        top: 0%;
    }

    @media (max-width: 950px){
        .tittle{
            display: none;
        }

        .description{
            height: 80%;
        }
    }
`