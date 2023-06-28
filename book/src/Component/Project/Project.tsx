import ProjectStyle from "../../Style/Project/ProjectStyle";
import Ragetatt from "./RageTatt";
import Vva from "./Vva";

function Project(){
    return(
        <ProjectStyle id="project">
            <Vva />
            <Ragetatt />
        </ProjectStyle>
    )
}

export default Project