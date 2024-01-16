import styled from "styled-components"
import Input from "./Input"


export default function FormContact(){
    return(
        <FormContactStyle >
            <div className="cadre">
                <h2>Me Contacter</h2>
                <div className="grille">
                        <Input >Prenom</Input>
                        <Input >Nom</Input>
                        <Input >Mail</Input>
                        <Input >Numéro</Input>
                </div>
                <div>
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

    .cadre{
        position: relative;
        width: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
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


    h2{
        font-size: 200%;
        color: #2B262D;
        display: flex;
        justify-content: center;
    }

    .champTxt{
        position: relative;
        width: 100%;
        
        height: 200px;
    }
    
    button{
        width: 505px;
        height: 50px;
    
    }
`