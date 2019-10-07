import React from 'react';


const ImageList = (props) => {
    return props.images.map((image) => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img src={image.urls.regular}/>
    })
}

export default ImageList