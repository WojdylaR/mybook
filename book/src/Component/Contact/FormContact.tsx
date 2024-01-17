import styled from "styled-components"
import Input from "./Input"


export default function FormContact(){
    return(
        <FormContactStyle >
            <div className="text">
                <h2 className="tittleText">Un Projet? Une idée?</h2>
                <h3>Vous êtes un particulier ? Un Professionel ?</h3>
                <p>
                    N'hésitez pas a me contacter par mail, via le formulaire ou bien sur linkedin.<br/>
                    Mes autres projets, hors web, sont également disponible sur mon GitHub !
                </p>
            </div>
            
            <div className="cadre">
                <h2 className="tittleContact">Me Contacter</h2>
                <div className="grille">
                        <Input >Prenom</Input>
                        <Input >Nom</Input>
                        <Input >Mail</Input>
                        <Input >Numéro</Input>
                </div>
                <div className="send">
                    <textarea className="champTxt" />
                    <button >Envoyer</button>
                </div>
            </div>
        </FormContactStyle>
    )
}


const FormContactStyle = styled.div`
    position: relative;
    background-color: #F2EBE5;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;

    .text{
        width: 500px;
        margin-right: 250px;
    }

    .cadre{
        position: relative;
        width: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 60%;
        background-color: #ffffff;
        border-radius: 10px;
    }

    .grille{
        position:relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, 150px);
        justify-content: space-around;
        margin-bottom: 100px;
        gap: 30px;
    }

    .grid_item{
        width: 150px;
        height: 50px;
    }

    .send{
        position: relative;
        left: 10px;
    }

    .tittleText{
        font-size: 250%;
        color: #2B262D;
        letter-spacing: 1px;
    }

    h3{
        color: #464147;
        white-space: nowrap;
        font-size: 150%;
        margin-bottom: 30px;
        
        
    }

    p{
        color: #605C62;
        font-size: 125%;
        line-height: 27px;
    }

    .tittleContact{
        font-size: 200%;
        color: #2B262D;
        display: flex;
        justify-content: center;
    }

    .champTxt{
        position: relative;
        width: 475px;
        height: 200px;
    }
    
    button{
        width: 480px;
        height: 50px;
    }

    button:hover{
        cursor: pointer;
    }
`