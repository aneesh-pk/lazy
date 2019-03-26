import React, {Component} from 'react';
import '../App.css';
class MediaImagePlaceholder extends Component {
    render() {
        return (
            <div>
                <img src={process.env.REACT_APP_PLACEHOLDER_IMAGE_URL} className="poster-placeholder poster" alt="poster"/>
            </div>
        );
    }
}

export default MediaImagePlaceholder;
