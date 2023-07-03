import { useEffect } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Profil from "../Profil/Profil";
import Vva from "./Vva";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ragetatt from "./RageTatt";
gsap.registerPlugin(ScrollTrigger)

function Project(){

    return(
        <ProjectStyle id="project">
            <Vva />
            <Ragetatt />
        </ProjectStyle>
    )
}

export default Project