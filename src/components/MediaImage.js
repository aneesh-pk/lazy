import React, {Component} from 'react';
import '../App.css';
import poster1 from "../assets/images/posters/poster1.jpg";

class MediaImage extends Component {
    render() {
        return (
            <div>
                <img src={poster1} className="poster-image poster" alt="poster"/>
            </div>
        );
    }
}

export default MediaImage;
