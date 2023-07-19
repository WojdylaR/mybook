import RagetattStyle from "../../Style/Project/RagetattStyle";
import { gsap } from "gsap";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(CustomEase)

function Ragetatt(){

    function handleMouseOut(){
        
        gsap.to('#contentRageTatt',{
            height: '100%',
            duration: 2,
            ease: CustomEase.create("custom", "M0,0,C0.14,0,0.254,0.115,0.284,0.238,0.325,0.405,0.354,0.963,0.362,1,0.37,0.985,0.414,0.932,0.455,0.87,0.51,0.785,0.559,0.819,0.572,0.828,0.648,0.878,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1")
        })
    }

    function handleMouseOver(){
        gsap.to('#contentRageTatt', {
            height: 0,
            duration: 2,
            ease: CustomEase.create("custom", "M0,0,C0.14,0,0.254,0.115,0.284,0.238,0.325,0.405,0.354,0.963,0.362,1,0.37,0.985,0.414,0.932,0.455,0.87,0.51,0.785,0.559,0.819,0.572,0.828,0.648,0.878,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1")
        })
        setTimeout(handleMouseOut, 8000);
        
    }
    
    return(
        <RagetattStyle  id="ragetatt" className="projectsPage">
            <div  id="ragetatt-content" className="project" onMouseOver={() => handleMouseOver()}>
                <div className="content" id="contentRageTatt"></div>
            </div>
        </RagetattStyle>
    )
}

export default Ragetatt
