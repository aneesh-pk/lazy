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

                {/* <div className="col-6">
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
                </div> */}
                <div className="col-6">
                    <div className="row margin-top-70">
                        <div className="nav-back-wrapper-1 col-3 col-md-2 table-cell">
                            <div className="inline-block">
                                <img src={backImg} className="back-button" alt="back" />
                            </div>
                        </div>
                        <div className="page-title col-9 col-md-10 table-cell">
                            <div className="inline-block">
                                Romantic Comedy
                            </div>
                                
                        </div>
                    </div>

                </div>



                <div className="col-6">
                    <div className="row search-wrapper">
                        <div className="col-9 text-right">
                            <input type="text"
                                id="search-input"
                                className={this.state.searchActive ? "search active" : "search"}
                                onChange={handleSearchInput}
                                value={this.props.media.query}
                            />
                        </div>
                        <div className="col-3">
                            <img src={searchImg} className="search-button active" alt="search" onClick={handleSearchClick} />
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
