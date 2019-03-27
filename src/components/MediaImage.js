import React, { Component } from 'react';
import LazyLoad from 'react-image-lazy-load';
import '../App.css';

class MediaImage extends Component {
    render() {
        return (
            <div>
                <LazyLoad loaderImage originalSrc={process.env.REACT_APP_IMAGE_BASE_PATH + this.props.poster_image} imageProps={{
                    src: require('../assets/images/placeholder_for_missing_posters.png'),
                    alt: "poster",
                    ref: "image",
                    className: "poster-image poster"
                }} />
                {/* <img src={process.env.REACT_APP_IMAGE_BASE_PATH + this.props.poster_image} className="poster-image poster" alt={process.env.REACT_APP_PLACEHOLDER_IMAGE_URL} onError={(e) => handleOnError(e)}/> */}
            </div>
        );
    }
}

export default MediaImage;
