import React, { Component } from 'react';
import '../App.css';
import backImg from "../assets/images/Back.png";
import searchImg from "../assets/images/search.png";


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
            } else {
                this.setState({
                    searchActive: false,
                    query: ""
                });
            }
        }

        const handleSearchInput = (e) => {
            this.setState({
                query: e.target.value
            })
        }

        return (
            <div className="header">
                <div className="nav-back-wrapper inline-block">
                    <img src={backImg} className="back-button" alt="back" />
                </div>
                <div className="page-title inline-block">
                    Romantic Comedy
                </div>
                <div className="search-wrapper inline-block right">
                    <input type="text"
                        className={this.state.searchActive ? "search active" : "search"}
                        onChange={handleSearchInput}
                        value={this.state.query}
                    >
                    </input>
                    <img src={searchImg} className="search-button active" alt="search" onClick={handleSearchClick} />
                </div>
            </div>
        );
    }
}

export default Header;
