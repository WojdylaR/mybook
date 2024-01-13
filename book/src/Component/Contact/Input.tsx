import styled from "styled-components"

export default function Input(props:any){
    return(
        <InputStyle className="grid_item"> 
            <div className="input-container">
                <input type="text" id="input" required={true}/>
                <label htmlFor="input" className="label">{props.children}</label>
                <div className="underline"></div>
            </div>
        </InputStyle>
    )
}

const InputStyle = styled.div`
    position: relative;
    width: 100%;

    .input-container {
        position: relative;
        margin: 50px auto;
        width: 100%;
    }

    .input-container input[type="text"] {
        font-size: 20px;
        width: 100%;
        border: none;
        border-bottom: 2px solid #ccc;
        padding: 5px 0;
        background-color: transparent;
        outline: none;
        color: white;
    }

    .input-container .label {
        position: absolute;
        top: 0;
        left: 0;
        color: #ccc;
        transition: all 0.3s ease;
        pointer-events: none;
    }

    .input-container input[type="text"]:focus ~ .label,
    .input-container input[type="text"]:valid ~ .label {
        top: -20px;
        font-size: 16px;
        color: #646464;
    }

    .input-container .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: #333;
        transform: scaleX(0);
        transition: all 0.3s ease;
    }

    .input-container input[type="text"]:focus ~ .underline,
    .input-container input[type="text"]:valid ~ .underline {
       
    }
`