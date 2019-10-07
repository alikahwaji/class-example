import React from 'react';
import image from '../api/image';

const ImageList = (props) => {
    props.images.map((image) => {
        return (
            <img src={image.urls.regular}/>
        )
    })
}

export default ImageList