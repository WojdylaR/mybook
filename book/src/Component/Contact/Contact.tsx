import styled from "styled-components";
import ImageContainer from "./ImageContainer";



function Contact(){
    return (
        <ContactStyle id="contact">
            <div id="contact-content">
                <ImageContainer />
            </div>
        </ContactStyle>
    )
}

export default Contact



const ContactStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color:  #2B262D;
    #contact-content{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
    }
`