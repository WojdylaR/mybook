import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";


export default function ScndCard(props:any){
    const [isOpen, setIsOpen] = useState(false)

    function onClick(){

        gsap.to('.containerScndCard', {width: 200, duration: 0.1})
        props.onShow()
        gsap.to(window, {duration: 0.2, scrollTo: '#projects',});
        
        if (isOpen === true){
            gsap.to('.containerScndCard' + props.num, {width: 200, duration: 0.1})
            setIsOpen(false)
        }
    }

    function onMouseEnter(){
        if (!isOpen){
            gsap.to('.containerScndCard' + props.num, {width: 250, duration: 0.1})
        }
    }

    function onMouseLeave(){
        if (!isOpen){
            gsap.to('.containerScndCard' + props.num, {width: 200, duration: 0.1})
        }
    }

    function Open(){
        setIsOpen(true)
        gsap.to('.containerScndCard' + props.num, {width: 600, duration: 0.1})
    }

    useEffect(()=> 
    {
        props.num == props.activeIndex ? Open() : setIsOpen(false)
    }
    ,[props.activeIndex])

    return(
        <ScndCardSyle className={`containerScndCard containerScndCard` + props.num}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        onClick={()=> onClick()}>
            {props.activeIndex == props.num ? isOpen.valueOf() : isOpen}
            
            <TittleStyle>{props.title}</TittleStyle>
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
    border: solid 2px black;


    &:hover{
        position: relative;
        cursor: pointer;
    }
`


const TittleStyle = styled.div`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-family: 'Courier New', Courier, monospace;
    font-size: 150%;

`
