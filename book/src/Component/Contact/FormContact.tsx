import styled from "styled-components"
import Input from "./Input"
import emailjs from '@emailjs/browser'
import { useRef } from "react"


export default function FormContact(){

    const formRef = useRef<HTMLFormElement>(null)

    const sendMail = () => {
    if( formRef.current)
        emailjs.sendForm('service_l3x6g8i', 'template_wt1xzj7', formRef.current , 'W39Gfqo2OUtPw178F')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    return(
        <FormContactStyle >
            <div className="text">
                <h2 className="tittleText">Un Projet? Une idée?</h2>
                <h3>Vous êtes un particulier ?<span className="nowrap"> Un Professionel ?</span></h3>
                <p>
                    N'hésitez pas a me contacter par mail, via le formulaire ou bien sur linkedin.<br/>
                    Mes autres projets, hors web, sont également disponible sur mon GitHub !
                </p>
                <div className="logoContainer">
                    <a href="https://www.linkedin.com/in/ronan-wojdyla-07aa3920a/"><img alt="linkedin" className="logo" src={require("../../Assets/Contact/linkedin.png")} /></a>
                    <a href="https://github.com/WojdylaR"><img alt="github" className="logo" src={require("../../Assets/Contact/github.png")} /></a>
                </div>
            </div>
            
            <div className="cadre" id="contactForm">
                <h2 className="tittleContact">Me Contacter</h2>
                <form ref={formRef}><div className="grille">
                        <Input name="user_surname">Prenom</Input>
                        <Input name="user_name">Nom</Input>
                        <Input name="user_mail">Mail</Input>
                        <Input name="user_phone">Numéro</Input>
                </div>
                <div className="send">
                    <textarea name='user_message' className="champTxt" />
                    <button onClick={sendMail} >Envoyer</button>
                </div></form>
            </div>
        </FormContactStyle>
    )
}


const FormContactStyle = styled.div`
    position: relative;
    background-color: #f2e9e4;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;

    .text{
        width: 33vw;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 10px;

        box-sizing: border-box;
        padding:20px;
    }

    .logoContainer{
        position: relative;
        width: 125px;
        align-self: center;
        display: flex;
        padding-top: 4px;
        border-radius: 5px;
        justify-content: space-around;
        background-color: white;
        align-items: center;
    }

    .logo{
        width: 50px;
    }

    .cadre{
        position: relative;
        width: 33vw;
        display: flex;
        justify-content: center;
        flex-direction: column;

        height: auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
        padding-left:80px;
        padding-right:80px;
        padding-top:40px;
        padding-bottom:40px;
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
        display: flex;
        align-items: center;
        flex-direction: column;
        
    }

    .tittleText{
        font-size: 250%;
        color: #2B262D;
        letter-spacing: 1px;
    }

    h3{
        color: #464147;
        font-family: lustria;
        font-size: 150%;
        margin-bottom: 30px;
        
        
    }

    .nowrap{
        white-space: nowrap;
    }

    p{
        color: #605C62;
        font-size: 125%;
        font-family: josefin;
        line-height: 27px;
        margin-bottom: 35px;
    }

    .tittleContact{
        font-size: 200%;
        color: #2B262D;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }

    .champTxt{
        position: relative;
        width: 90%;
        height: 200px;
    }
    
    button{
        width: 90%;
        height: 50px;
    }

    button:hover{
        cursor: pointer;
    }

    @media (max-width: 1250px){
        flex-direction: column;
        position: relative;
        top: 100px;
        margin-bottom: 200px;
        height: auto;
        .text{
            margin-bottom: 25px;
            width: 80vw;
            height: auto;
        }

        .cadre{
            width: 80vw;
            height: auto;
            padding: 0;
            padding-bottom: 25px;
        }
    }
`