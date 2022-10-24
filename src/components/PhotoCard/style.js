import styled from "styled-components";
import { fadeIn } from "../../style/animation";
 
/*Reutilizar una animacion con una función(Agregar la utilidad css)
import styled, {css, keyframes } from "styled-components";
const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframe} ${type}`

const fadeInKeyframe = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}
to {
    filter: blur(0);
    opacity: 1;
}
`
*/

export const ImageWrapper = styled.div`
    display:block;
    width: 100%;
    height: 0;
    overflow:hidden;
    border-radius: 10px;
    padding: 56.25% 0 0 0;
    position: relative;
`

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    ${fadeIn()}
    
`

export const Button = styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
    
`