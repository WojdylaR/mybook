import { useEffect } from "react";
import ProjectStyle from "../../Style/Project/ProjectStyle";
import Profil from "../Profil/About";
import Vva from "./Vva";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ragetatt from "./RageTatt";
gsap.registerPlugin(ScrollTrigger)

function Project(){

    return(
        <ProjectStyle id="projects">
            <div id="projects-content">
                <Vva />
                <Ragetatt />
            </div>
        </ProjectStyle>
    )
}

export default Project