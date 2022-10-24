import React from "react";

import { ImageWrapper, Img, Button } from "./style";
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT__IMAGE = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ( {id, likes = 0, src = DEFAULT__IMAGE}) => {
    return (
        <article>
            <a href={`/detail ${id}`}>
                <ImageWrapper>
                    <Img src={src} alt=''/>
                </ImageWrapper>
            </a>
            <Button>
                <MdFavoriteBorder  size={25}/>{likes} likes!
            </Button>
        </article>
    )
}