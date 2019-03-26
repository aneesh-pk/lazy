import React, { Component } from 'react';
import '../App.css';
import backImg from "../assets/images/Back.png";
import searchImg from "../assets/images/search.png";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: null,
            searchActive: false
        }
    }

    render() {
        const handleSearchClick = () => {
            if(!this.state.searchActive){
                this.setState({
                    searchActive: true,
                    query: null
                });
            }else{
                this.setState({
                    searchActive: false,
                    query: null
                });
            }
        }

        const handleSearchInput = () => {
            
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
                        >
                    </input>
                    <img src={searchImg} className="search-button active" alt="search" onClick={handleSearchClick} />
                </div>
            </div>
        );
    }
}

export default Header;
