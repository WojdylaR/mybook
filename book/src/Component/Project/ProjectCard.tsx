import { useLayoutEffect, useRef, useState } from "react";
import ProjectCardStyle from "../../Style/Project/ProjeCardStyle";
import gsap from "gsap";
import useWindowSize from "../../Hook/useScreenSize";
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)

function ProjectCard(props:any){

    const ref = useRef<HTMLHeadingElement>(null);
    const [width, setWidth] = useState(0)
    const widthScreen = useWindowSize().width

    useLayoutEffect(() => {
        if (ref && ref.current) {
            setWidth(ref.current.offsetWidth);
          }
        }, [ref]);

    const onClick = (num:string) => {
        document.body.style.overflow = "hidden";
        gsap.to(window, {duration: 0.3, scrollTo: '#projects',});
        const xCenter = widthScreen ? -100 + widthScreen/2 - width/2 : 0;
        let top =  document.querySelector('.h2' + num)?.getBoundingClientRect().top
        top= top ? -top + 0: top
        gsap.to('.tittleWhite' + num, {clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0 100%)', duration: 0.40})
        gsap.to('.num' + num, {opacity: 0,delay: 0.8, duration: 0.5})
        gsap.to('.h2' + num, {x: xCenter ,delay: 0.8, duration: 0.5})
        gsap.to('.h2' + num, {top: 0 ,delay: 1.3, duration: 0.5})
        console.log(top)
    }

    return(
        <ProjectCardStyle >
            <span className="all" onClick={() => onClick(props.num)}>
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
            </div></span>
        </ProjectCardStyle>
    )
}

export default ProjectCard