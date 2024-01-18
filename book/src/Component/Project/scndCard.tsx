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
    }

    .imgWebsite{
        position: relative;
        height: 100%;
        width: 100%;
    }

    &:hover{
        position: relative;
        cursor: pointer;
    }

    .imgContainer{
        position: relative;
        width: 66%;
        height: 100%;
        background-color: red;
    }

    .textContainer{
        position: relative;
        width: 34%;
        height: 100%;
    }

`


const TittleStyle = styled.div`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;

`
