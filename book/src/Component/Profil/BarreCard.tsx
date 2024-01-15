import styled from "styled-components";


export function BarreCard(p:any){
    return(
        <BarreCardStyle>
            <div style={{width: `${p.p}%`}} className={`startBarre`}/>
        </BarreCardStyle>
    )
}

const BarreCardStyle = styled.div`
    position: relative;
    width: 80%;
    height: 10px;
    background-color: #8a8a8a;
    border-radius: 5px;

    .startBarre{
        position: absolute;
        height: 100%;
        background-color: black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`