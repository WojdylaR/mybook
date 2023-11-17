import { useLayoutEffect, useRef, useState } from "react";
import ProjectCardStyle from "../../Style/Project/ProjeCardStyle";
import gsap from "gsap";
import useWindowSize from "../../Hook/useScreenSize";
import { ScrollToPlugin } from 'gsap/all'
import Echap from "./Echape";
import EchapeStyle from "../../Style/Project/EchapeStyle";
gsap.registerPlugin(ScrollToPlugin)

function ProjectCard(props:any){

    const ref = useRef<HTMLHeadingElement>(null);
    const refAll = useRef<HTMLHeadingElement>(null);
    const [width, setWidth] = useState(0)
    const [yDistance, setYDistance] = useState(0)
    const widthScreen = useWindowSize().width
    const [top, setTop] = useState<number>(0)
    const [isOpen, setIsOpen] = useState(true)

    useLayoutEffect(() => {
        if (ref && ref.current && refAll && refAll.current) {
            setWidth(ref.current.offsetWidth);
            setYDistance(refAll.current.offsetTop)
          }
        }, [ref]);

    const onClick = (num:string) => {
        if (isOpen == true){
            document.body.style.overflow = "hidden"
            gsap.to(window, {duration: 0.3, scrollTo: '#projects',});
            const xCenter = widthScreen ? -100 + widthScreen/2 - width/2 : 0;
            let topTemp =  document.querySelector('.h2' + num)?.getBoundingClientRect().top
            topTemp= -yDistance- props.d -6
            setTop(topTemp)
            gsap.to('.tittleWhite' + num, {delay: 0.20, zIndex:-1})
            gsap.to('.filterTemp', {delay: 0,duration:0, zIndex:1})
            gsap.to('.num' + num, {opacity: 0,delay: 0.2, duration: 0.3})
            gsap.to('.filter', {zIndex: 0,})
            gsap.to('.h2' + num, {x: xCenter ,delay: 0.5, duration: 0.3})
            gsap.to('.all' + num,{zIndex: 1, borderTop: '3px solid white'})
            gsap.to('.all' + num,{y: topTemp, delay: 0.7, duration: 0.3})
            gsap.to('.filterTemp', {delay: 1.2, zIndex:-1})
            gsap.to('.all' + num,{height: '100vh', delay: 0.9, duration: 0.3})
            setIsOpen(false)
        }else{
            document.body.style.overflow = "auto"
            gsap.to('.all' + num,{height: '150px', delay: 0, duration: 0.3})
            gsap.to('.all' + num,{y: 0, delay: 0.2, duration: 0.3})
            gsap.to('.all' + num,{zIndex: 1, borderTop: '0px solid white', delay:0.5})
            gsap.to('.h2' + num, {x: 0 ,delay: 0.5, duration: 0.3})
            gsap.to('.filter', {zIndex: -1, delay:0.5})
            gsap.to('.num' + num, {opacity: 1,delay: 0.5, duration: 0.3})
            gsap.to('.tittleWhite' + num, {delay: 0.8, zIndex: 0})
            setIsOpen(true)
        }
    }

    return(
        <ProjectCardStyle >
            <span ref={refAll} className={"all all" + props.num} onClick={() => onClick(props.num)}>
            <div className={`tittle tittle`+ props.num}>
                <div className={"num num" + props.num}>
                    {props.num}
                    <span className="underlineNum"/>
                </div>
                <h2 className={`h2 h2` + props.num} ref={ref}>{props.tittle}</h2>
            </div>
            <div className={`tittleWhite tittleWhite` + props.num}>
                <div className="num">
                    {props.num}
                    <span className="underlineNum"/>
                </div>
                <h2>{props.tittle}</h2>
                
                </div>
                    {props.children}
                </span>
            <div className="filter" />
            <div className="filterTemp" />
        </ProjectCardStyle>
    )
}

export default ProjectCard