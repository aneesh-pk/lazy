import React, { Component } from 'react';
import '../App.css';
import backImg from "../assets/images/Back.png";
import searchImg from "../assets/images/search.png";
import { connect } from "react-redux";
import { searchMediaLocal } from "../actions";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searchActive: false
        }
    }

    render() {
        const handleSearchClick = () => {

            if (!this.state.searchActive) {
                this.setState({
                    searchActive: true,
                    query: ""
                });
                setImmediate(() => {
                    document.getElementById("search-input").focus();
                })
            } else {
                this.setState({
                    searchActive: false,
                    query: ""
                });
            }
        }

        const handleSearchInput = (e) => {
            this.props.searchMediaLocal(e.target.value);
            this.setState({
                query: e.target.value
            })
        }

        return (
            <div className="header row">
                <div className="col-sm-6">
                    <div className="nav-back-wrapper inline-block">
                        <div className="table-cell-entry">
                            <img src={backImg} className="back-button" alt="back" />
                        </div>
                    </div>
                    <div className="page-title inline-block">
                        <div className="table-cell-entry">
                            Romantic Comedy
                    </div>
                    </div>
                </div>

                <div className="inline-block col-sm-6">

                    <div className="row">
                        <div className="col-sm-12 table-cell">
                            <div className="display-input-wrapper col-sm-10 text-right">
                                <input type="text"
                                    id="search-input"
                                    className={this.state.searchActive ? "search active" : "search"}
                                    onChange={handleSearchInput}
                                    value={this.props.media.query}
                                />
                            </div>
                            <div className="search-button-wrapper col-sm-2">
                                <div>
                                    <img src={searchImg} className="search-button active" alt="search" onClick={handleSearchClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ media }) {
    return { media };
}

export default connect(mapStateToProps, { searchMediaLocal })(Header);
