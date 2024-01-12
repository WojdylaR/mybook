import styled from "styled-components";
import ImageContainer from "./ImageContainer";



function Contact(){
    return (
        <ContactStyle>
            <div id="contact-content">
                <ImageContainer />
            </div>

        </ContactStyle>
    )
}

export default Contact



const ContactStyle = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color:  rgb(218, 169, 191);
    #contact-content{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
`