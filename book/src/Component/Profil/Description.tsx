import styled from "styled-components";

export default function Description(){
    return(
        <DescriptionStyle>
            <div className="tittle">
                <h3>A Propos De Moi:</h3>
            </div>
            <div className="description">
                <p> Développeur web junior, j'aime apprendre et surtout monter en compétences.<br />
                    Je suis avant tout mordu et passionné
                    d'informatique et de nouvelles
                    technologies.
                </p>
            </div>
        </DescriptionStyle>
    )
}

const DescriptionStyle = styled.div`
    position: relative;
    height: calc(60% - 2.5vh);
    width: calc(100% - 2.5vw);
    background-color: #777A8F;
    left: 2.5vw;
    top: 2.5vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    .tittle{
        position: relative;
        background-color: #BBBDC7;
        height: 17%;
        width: 80%;
        left: 10%;
        top: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        font-family: evafiya;
        font-size: 250%;
        margin-bottom: 5%;
        color: black;
    }

    .description{
        position: relative;
        display: flex;
        align-items: center;
        height: 58%;
        width: 80%;
        top: 10%;
        left: 10%;
        border-radius: 7px;
        background-color: #BBBDC7;
    }

    p{
        font-family: lustria;
        font-size: 1.5vw;
        line-height: 30px;
        box-sizing: border-box;
        padding:20px;
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
            top: 0%;
            height: 100%;
        }

        p{
            font-size: 1em;
        }

        @media (max-width: 650px){
            width: 100vw;
            height: 50vw;
        }
    }
`