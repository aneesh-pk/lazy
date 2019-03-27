import React, { Component } from 'react';
import '../App.css';
import MediaEntry from "./MediaEntry";
import { connect } from "react-redux";
import { fetchMedia, searchMedia } from "../actions";
import _ from "lodash";
import InfiniteScroll from 'react-infinite-scroller';

class MediaListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
        window.searchedFlag = false;
    }

    loadFunc = async (page) => {
        let requestData = {
            "title": "Romantic Comedy",
            "page": page,
            "size": 20
        }
        this.props.fetchMedia(requestData);
    }

    renderFilterdList() {
        let filtered = [];
        let filteredList = [];
        let query = this.props.media.query;
        let mediaList = this.props.media.mediaList;

        if (query.trim() === "") {
            filtered = Object.values(mediaList);
        } else {
            window.searchedFlag = true;
            filtered = _.filter(mediaList, (o) => {
                let string = o.name.toLowerCase();
                let sub_string = query.toLowerCase();
                if (string.toLowerCase().indexOf(sub_string) !== -1)
                    return true;
                return false;
            });
        }

        if (filtered.length === 0) {
            if (window.searchTimeoutID) {
                clearTimeout(window.searchTimeoutID);
                window.searchTimeoutID = false;
            }
            if (this.state.query !== this.props.media.query) {
                window.searchTimeoutID = setTimeout(() => {
                    this.setState({ query: this.props.media.query })
                    this.props.searchMedia();
                }, 500);
            }

        }

        filtered.map((entry, entry_index) => {
            return filteredList.push(<MediaEntry key={entry_index} name={entry.name} poster_image={entry.poster_image} />)
        });

        return filteredList;
    }

    render() {
        return (
            <div className="media-listing">
                <div className="list-wrapper">
                    {/* https://www.npmjs.com/package/react-infinite-scroller */}
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadFunc}
                        hasMore={(this.props.media.hasMoreData && this.props.media.query.length === 0) || (this.props.media.hasMoreData && !window.searchedFlag)}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        threshold={600}
                        initialLoad={true}
                    >
                        {
                            this.renderFilterdList()
                        }

                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ media }) {
    return { media };
}

export default connect(mapStateToProps, { fetchMedia, searchMedia })(MediaListing);