import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ProjectInterface } from "./ClassProject";
import useWindowSize from "../../Hook/useScreenSize";


export default function ScndCard({ activeIndex, Interface, onShow}: { activeIndex :number, Interface: ProjectInterface, onShow:()=> void} ){
    const [isOpen, setIsOpen] = useState(false)
    const num = Interface.num
    const name = Interface.name
    const widthScreen = useWindowSize().width


    function onClick(){

        if (widthScreen && widthScreen >= 1000) {gsap.to('.containerScndCard', {width: 200, duration: 0.1})}
        else{gsap.to('.containerScndCard', {height: 200, duration: 0.1})}

        onShow()
        gsap.to(window, {duration: 0.2, scrollTo: '#projects',});
        
        if (isOpen === true && widthScreen && widthScreen > 1000){
            gsap.to('.containerScndCard' + num, {width: 200, duration: 0.1})
            setIsOpen(false)
        }
    }

    function onMouseEnter(){
        if (!isOpen && widthScreen && widthScreen > 1000){
            gsap.to('.containerScndCard' + num, {width: 250, duration: 0.1})
        }
    }

    function onMouseLeave(){
        if (!isOpen && widthScreen && widthScreen > 1000){
            gsap.to('.containerScndCard' + num, {width: 200, duration: 0.1})
        }
    }

    function Open(){
        if (widthScreen && widthScreen > 1000){
            gsap.to('.containerScndCard' + num, {width: 900, duration: 0.2, delay: 0.2})}
        else{
            gsap.to('.containerScndCard' + num, {height: 600, duration: 0.2, delay: 0.2})
        }
        gsap.to('.imgWebsit' + num, {opacity: 1, duration: 0.2, delay: 0.5})
        gsap.to('.txt' + num, {opacity: 1, duration: 0.2, delay: 0.5})
        gsap.to('.Button' + num, {opacity: 1, duration: 0.2, delay: 0.5})
        gsap.to('.tittle', {opacity: 1, duration: 0.2, delay: 0.5})
            setIsOpen(true)}

    useEffect(()=> 
    {
        num == activeIndex ? Open() : setIsOpen(false)
    }
    ,[activeIndex])

    return(
        <ScndCardSyle style={{borderLeft: num == 0 && widthScreen && widthScreen > 1000 ? '2px solid black' : '', borderTop: num == 0 && widthScreen && widthScreen < 1000 ? '0px' : ''}} className={`containerScndCard containerScndCard` + num}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        onClick={()=> onClick()}>
            {activeIndex == num ? 
            <div className="isOpen">
                <div className="imgContainer">
                    <img alt="img_website" className={`imgWebsite imgWebsit` + num} src={require(`../../Assets/project/${Interface.img}`)}/>
                </div>
                <div className="textContainer">
                    <div className="tittle"><h3 className={`h3 h3` + num}>{Interface.name}</h3></div>
                    <div className="description">
                        <span className={`txt txt` + num}>{Interface.description}</span>
                    </div>
                    <div className="link">
                        <a href={Interface.link}><button className={`Button Button` + num}>Visiter</button></a>
                    </div>
                </div>
            </div> : <TittleStyle>{name}</TittleStyle>}
            
            
        </ScndCardSyle>
    )
}




const ScndCardSyle = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: 0.2s;
    border-right: solid 2px black;

    
    .txt{
        opacity: 0;
    }

    .isOpen{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        background-color: #DBBBC9;
    }

    .imgWebsite{
        position: relative;
        width: 100%;
        object-fit: cover;
        object-position: top; 
        height: 100%;
        opacity: 0;
    }

    &:hover{
        position: relative;
        cursor: pointer;
    }

    .imgContainer{
        position: relative;
        width: 66%;
        height: 100%;
    }

    .textContainer{
        position: relative;
        width: 34%;
        height: 100%;
        cursor: default;
        display: flex;
        flex-direction: column;
    }

    .tittle{
        position: relative;
        align-self: center;
        width: 80%;
        display: flex;
        justify-content: center;
        height: 20%;
        opacity: 0;
        align-items: center;
        font-family:  lustria;
        font-size: 150%;
    }

    .description{
        position: relative;
        width: 100%;
        height: 60%;
        width: 100%;
        background-color: #ffe8f2;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        box-sizing: border-box;
        padding:20px;
        line-height: 25px;
        color: #212121;
        font-family: josefin;
        font-size: 145%;
        display: flex;
        align-items: center;
    }

    .link{
        position: relative;
        width: 80%;
        height: 20%;
        display: flex;
        justify-content:  center;
        align-items: center;
        left: 10%;
    }

    button{
        width: 150px;
        height: 50px;
        font-size: 110%;
        opacity: 0;
        cursor: pointer;
    }

    @media (max-width: 1000px){
        height: 200px;
        width: 100%;
        border-top: 2px black solid;
        border-left: 0px;
        border-right: 0px;
    }

    @media (max-width: 750px){
        .isOpen{
            flex-direction: column;
            display: flex;
        }

        .imgContainer{
            width: 100%;
            height: 66%;
        }

        .textContainer{
        flex-direction: row;
        height: 34%;
        width: 100%;
    }

    .tittle{
        width: 25%;
        height: 100%;
    }

    .description{
        width: 50%;
        height: 100%;
        border-top: 0px;
        border-bottom: 0px;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }

    .link{
        width: 25%;
        height: 100%;
        left: 0%;
    }

    }
`


const TittleStyle = styled.div`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;

    @media (max-width: 1000px){
        writing-mode: horizontal-tb;;
        transform: rotate(0);
        
    }

    

    

`
