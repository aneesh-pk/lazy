import React, {Component} from 'react';
import '../App.css';
import MediaEntry from "./MediaEntry";

class MediaListing extends Component {
    createTable = () => {
        let table = []
        for (let i = 0; i < 50; i++) {
            table.push(<MediaEntry key={'poster' + i}/>)
        }
        return table
    }

    render() {
        return (
            <div className="media-listing">
                <div className="list-wrapper">
                    {this.createTable()}
                </div>
            </div>
        );
    }
}

export default MediaListing;
