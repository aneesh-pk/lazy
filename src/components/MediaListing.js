import React, { Component } from 'react';
import '../App.css';
import MediaEntry from "./MediaEntry";
import _ from "lodash";
import InfiniteScroll from 'react-infinite-scroller';

class MediaListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mediaList: {},
            hasMoreData: true
        };
    }

    loadFunc = async (page) => {
        console.log("loading...");

        let requestData = {
            "title": "Romantic Comedy",
            "page": page,
            "size": 20
        }
        let mediaData = await this.getData((process.env.REACT_APP_API_URL + "get-media"), requestData);
        if (mediaData["page-size-returned"] < mediaData["page-size-requested"]) {
            this.setState({ hasMoreData: false });
        }
        if (mediaData && mediaData["content-items"] && mediaData["content-items"].content && mediaData["content-items"].content.length > 0) {
            let tmpMediaList = _.cloneDeep(this.state.mediaList);
            mediaData["content-items"].content.map((entry) => {
                if (typeof tmpMediaList[entry._id] == "undefined") {
                    tmpMediaList[entry._id] = entry;
                }
            });
            if (!_.isEqual(tmpMediaList, this.state.mediaList))
                this.setState({ mediaList: tmpMediaList })
        }

    }

    getData = async (url, data) => {
        return await fetch(url, {
            // mode: "cors", // no-cors, cors, *same-origin
            // credentials: "same-origin", // include, *same-origin, omit
            method: "POST",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => response.json()) // parses JSON response into native Javascript objects 
            .catch(err => null);
    }



    render() {
        return (
            <div className="media-listing">
                <div className="list-wrapper">
                    {/* https://www.npmjs.com/package/react-infinite-scroller */}
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadFunc}
                        hasMore={this.state.hasMoreData}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        threshold={600}
                        initialLoad={true}
                    >
                        {Object.values(this.state.mediaList).map((entry, entry_index) => {
                            return <MediaEntry key={entry_index} name={entry.name} poster_image={entry.poster_image} />
                        })}

                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default MediaListing;
