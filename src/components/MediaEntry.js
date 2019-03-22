import React, {Component, lazy, Suspense} from 'react';
import '../App.css';
import MediaImagePlaceholder from "./MediaImagePlaceholder";
const MediaImage = lazy(() => import("./MediaImage"));

class MediaEntry extends Component {
    render() {
        return (
            <div className="media-entry inline-block">
                <div className="poster-wrapper">
                    <Suspense fallback={<MediaImagePlaceholder/>}>
                        <MediaImage/>
                    </Suspense>
                </div>
                <div className="poster-title">
                    The Birds
                </div>
            </div>
        );
    }
}

export default MediaEntry;
