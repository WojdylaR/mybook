import styled from "styled-components";

export default function ImageContainer(){
    return(
        <ImageContainerStyle>
             <img alt="MapLyon" src={require('../../Assets/Contact/map.png')} />
                <div className="cadre">
                    <h2>Where I live ?</h2>
                    <p>
                        <div className="gridItem">
                            <img alt="location" className="logoContact" src={require('../../Assets/Contact/location.png')} />
                            Lyon, Rhone-Alpes
                        </div>
                        <div className="gridItem">
                            <img alt="phone" className="logoContact" src={require('../../Assets/Contact/phone.png')} />
                            06 26 90 67 68
                        </div >
                        <div className="gridItem">
                            <img alt="car" className="logoContact" src={require('../../Assets/Contact/car.png')} />
                            Permis B
                        </div>
                    </p>
                </div>
        </ImageContainerStyle>
    )
}

const ImageContainerStyle = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content:center;

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    .cadre{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        color: white;
        width: 550px;
        height: 300px;
        border-radius: 10px;
        background-color: rgba(50 ,50, 50, 0.97)
    }

    p{
        width:80%;
        position: relative;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 170px);
        grid-gap: 40px;
    }

    .gridItem{
        display: flex;
        justify-content: center;
        position: relative;
        font-family: Arial, Helvetica, sans-serif;
        
    }
    
    h2{
        position: relative;
        top: -25px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .logoContact{
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`