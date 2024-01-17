import styled from "styled-components";
import { gsap } from "gsap/gsap-core";
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

export default function ImageContainer(){

    function onClick(){
        gsap.to(window, {duration: 1, scrollTo: `#contactForm`});
    }

    return(
        <ImageContainerStyle>
             <img alt="MapLyon" src={require('../../Assets/Contact/map.png')} />
                <div className="cadre">
                    <h2>Where I live ?</h2>
                    <p>
                        <div className="gridItem">
                            <img alt="location" className="logoContact" src={require('../../Assets/Contact/location.png')} />
                            Lyon, Rhone-Alpes
                        </div>
                        <div className="gridItem">
                            <img alt="phone" className="logoContact" src={require('../../Assets/Contact/phone.png')} />
                            06 26 90 67 68
                        </div >
                        <div className="gridItem">
                            <img alt="car" className="logoContact" src={require('../../Assets/Contact/car.png')} />
                            Permis B
                        </div>
                        <div className="gridItem" style={{fontSize: '80%'}}>
                            <img alt="car" className="logoContact" src={require('../../Assets/Contact/mail.png')} />
                            ronan.wojdyla@hotmail.fr
                        </div>
                    </p>
                    <button>
                        <span onClick={onClick}>Contact</span>
                    </button>
                </div>
        </ImageContainerStyle>
    )
}

const ImageContainerStyle = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content:center;

    img{
        width: 100vw;
        height: 70vh;
        object-fit: cover;
    }

    .cadre{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        color: white;
        width: 550px;
        height: 300px;
        border-radius: 10px;
        background-color: rgba(50 ,50, 50, 0.97)
    }

    p{
        width:80%;
        position: relative;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 170px);
        grid-gap: 40px;
        margin-bottom: 25px;
    }

    .gridItem{
        display: flex;
        justify-content: center;
        position: relative;
        font-family: Arial, Helvetica, sans-serif;
        
    }
    
    h2{
        position: relative;
        top: -15px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .logoContact{
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }

    button {
        display: flex;
        border-radius: 4px;
        background-color: white;
        justify-content: center;
        align-items: center;
        border: none;
        color: black;
        height: 37px;
        text-align: center;
        font-size: 17px;
        padding: 16px;
        width: 130px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;

    }

    button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    button span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.5s;
    }

    button:hover span {
        padding-right: 15px;
    }

    button:hover span:after {
        opacity: 1;
        right: 0;
    }
    `