import { useEffect } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Ragetatt from "./RageTatt";
import Vva from "./Vva";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Project(){

    const tl = gsap.timeline();

        tl.from("#vva", {yPercent: 100});
        tl.to("#ragetatt", {yPercent: -100})


    ScrollTrigger.create({
        animation: tl,
        trigger: "#project",
        start: "top top",
        end: "+=400",
        scrub: true,
        pin: true,
        anticipatePin: 1
    })

    return(
        <ProjectStyle id="project">
            <Vva />
            <Ragetatt />
        </ProjectStyle>
    )
}

export default Project