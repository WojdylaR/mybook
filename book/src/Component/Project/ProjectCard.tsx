import ProjectCardStyle from "../../Style/Project/ProjeCardStyle";

function ProjectCard(props:any){
    return(
        <ProjectCardStyle >
            <span className="all">
            <div className="tittle">
                <div className="num">
                    {props.num}
                    <span className="underlineNum"/>
                </div>
                <h2>{props.tittle}</h2>
            </div>
            <div className="tittleWhite">
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