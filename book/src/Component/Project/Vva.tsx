import VvaStyle from "../../Style/Project/VvaStyle";
import { gsap } from "gsap";
import { CustomEase } from "gsap/all";
import Button from "./Button";
gsap.registerPlugin(CustomEase)

function Vva() {

    return (
        <VvaStyle id="vva" className="projectsPage" >
            <div id="vva-content" className="project">
            <Button addresse="https://www.vavoirailleurs.org/" />
                <div className="content" id="contentVva">
                    <div className="tittleContainer"><h1>Va Voir Ailleurs</h1></div>
                    <div className="imgContainer"><img className="imgProject" alt="Vva" src={require('../../Assets/project/vva.png')}></img></div>
                </div>
            </div>
        </VvaStyle>
    )
}

export default Vva  