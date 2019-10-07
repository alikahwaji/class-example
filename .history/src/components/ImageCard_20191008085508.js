import React from 'react';

class ImageCard extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.imageRef = React.createRef()
    }
    render() {
        const {description, urls} = this.props.image
        return(
            <div>
            <img ref={this.imageRef} alt={description}
            src={urls.regular}
            />
            </div>
        )
    }
}

export default ImageCard