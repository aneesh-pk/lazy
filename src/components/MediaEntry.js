import React, { Component } from 'react';
import '../App.css';
// import MediaImagePlaceholder from "./MediaImagePlaceholder";
// const MediaImage = lazy(() => import("./MediaImage"));
import MediaImage from "./MediaImage";

class MediaEntry extends Component {
    render() {
        return (
            <div className="media-entry inline-block">
                <div className="poster-wrapper">
                    {/* <Suspense fallback={<MediaImagePlaceholder />}> */}
                        <MediaImage poster_image={this.props.poster_image} />
                    {/* </Suspense> */}
                </div>
                <div className="poster-title">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default MediaEntry;
