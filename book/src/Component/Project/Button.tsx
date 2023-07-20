import { Children } from "react"
import styled from "styled-components"

const ButtonStyle = styled.a`
    opacity: 0;
    z-index: 2;
    position: absolute;
    top: 45%;
    left: calc(50% - 75px);
    transition: 0.3s;

    button {
  background-color: white;
  color: black;
  border-radius: 2px;
  font-size: 17px;
  width: 150px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};

    `

export default function Button({addresse}: any){
    return (
        <ButtonStyle href={addresse}>
            <button >View</button>  
        </ButtonStyle>
    )
}