import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ProjectInterface } from "./ClassProject";


export default function ScndCard({ activeIndex, Interface, onShow}: { activeIndex :number, Interface: ProjectInterface, onShow:()=> void} ){
    console.log("interface = " + Interface.name)

    const [isOpen, setIsOpen] = useState(false)
    const num = Interface.num
    const name = Interface.name


    function onClick(){

        gsap.to('.containerScndCard', {width: 200, duration: 0.1})
        onShow()
        gsap.to(window, {duration: 0.2, scrollTo: '#projects',});
        
        if (isOpen === true){
            gsap.to('.containerScndCard' + num, {width: 200, duration: 0.1})
            setIsOpen(false)
        }
    }

    function onMouseEnter(){
        if (!isOpen){
            gsap.to('.containerScndCard' + num, {width: 250, duration: 0.1})
        }
    }

    function onMouseLeave(){
        if (!isOpen){
            gsap.to('.containerScndCard' + num, {width: 200, duration: 0.1})
        }
    }

    function Open(){
        setIsOpen(true)
        gsap.to('.containerScndCard' + num, {width: 900, duration: 0.1})
    }

    useEffect(()=> 
    {
        num == activeIndex ? Open() : setIsOpen(false)
    }
    ,[activeIndex])

    return(
        <ScndCardSyle style={{borderLeft: num==0 ? '2px solid black' : ''}} className={`containerScndCard containerScndCard` + num}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        onClick={()=> onClick()}>
            {activeIndex == num ? 
            <div className="isOpen">
                <div className="imgContainer">
                    <img alt="img_website" className="imgWebsite" src={require(`../../Assets/project/${Interface.img}`)}/>
                </div>
                <div className="textContainer">
                    <div className="tittle"><h3>{Interface.name}</h3></div>
                    <div className="description">
                        {Interface.description}
                    </div>
                    <div className="link">
                        <a href={Interface.link}><button>Visiter</button></a>
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
        border-bottom: 2px solid black;
        width: 80%;
        display: flex;
        justify-content: center;
        height: 20%;
        align-items: center;
        font-family:  sans-serif;
        font-size: 150%;
    }

    .description{
        position: relative;
        width: 100%;
        height: 60%;
        width: 80%;
        left: 10%;
        line-height: 25px;
        color: #212121;
        font-family: sans-serif;
        font-size: 125%;
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
        border-top: 2px solid black
    }

    button{
        width: 150px;
        height: 50px;
        font-size: 110%;
        cursor: pointer;
    }

`


const TittleStyle = styled.div`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;

`
