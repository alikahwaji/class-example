import React from 'react';

import './ImageList'


const ImageList = (props) => {
    const images = props.images.map(({description, id, urls}) => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img alt={description} key={id} src={urls.regular}/>
    })
    return <div className="image-list">{images}</div>
}

export default ImageList