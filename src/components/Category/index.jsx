import React from "react";
import {Ancla, Image} from './style'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'


export const Category = ({ cover = DEFAULT_IMAGE, path, emoji='#' }) => (
    <Ancla href={path}>
        <Image src={cover} alt="Imagen" srcset="" />
        {emoji}
    </Ancla>
    
)