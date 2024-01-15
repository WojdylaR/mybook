import styled from "styled-components";

export default function Photo(){
    return(
        <PhotoStyle>
            <img alt="RonanWojdyla" className='profilImg' src={require('../../Assets/profil/img_profil.png')} />
        </PhotoStyle>
    )
}
 
const PhotoStyle = styled.div`
    position: relative;
    height: 40%;
    background: white;
    width: calc(100% - 2.5vw);
    left: 2.5vw;
    display: flex;
    justify-content: center;

    img.profilImg{
        position: relative;
        height: 100%;
    }
`