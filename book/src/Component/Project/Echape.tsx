import EchapeStyle from "../../Style/Project/EchapeStyle";

export default function Echap(props:any){
    return(
        <EchapeStyle onClick={()=>document.body.style.overflow = "auto"}>
            X
        </EchapeStyle>
    )
}