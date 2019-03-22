import React, {Component} from 'react';
import '../App.css';
import posterPlaceholder from "../assets/images/placeholder_for_missing_posters.png";


class MediaImagePlaceholder extends Component {
    render() {
        return (
            <div>
                <img src={posterPlaceholder} className="poster-placeholder poster" alt="poster"/>
            </div>
        );
    }
}

export default MediaImagePlaceholder;
