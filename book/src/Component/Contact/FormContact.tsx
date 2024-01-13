import styled from "styled-components"
import Input from "./Input"


export default function FormContact(){
    return(
        <FormContactStyle >
            <div className="cadre">
                <h2>Me Contacter</h2>
                <div className="grille">
                    <div className="grid_item">
                        <Input >Prenom</Input>
                    </div>
                    <div className="grid_item">
                        <Input >Nom</Input>
                    </div>
                    <div className="grid_item">
                        <Input >Mail</Input>
                    </div>
                    <div className="grid_item">
                        <Input >Numéro</Input>
                    </div>
                </div>
            </div>
        </FormContactStyle>
    )
}


const FormContactStyle = styled.div`
    position: relative;
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

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
        grid-template-columns: repeat(auto-fill, 200px);
        justify-content: space-around;
    }

    .grid_item{
        width: 150px;
        height: 100px;
    }


    h2{
        display: flex;
        justify-content: center;
    }
`