import React, {Component} from 'react';
import '../App.css';
import backImg from "../assets/images/Back.png";
import searchImg from "../assets/images/search.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav-back-wrapper inline-block">
                    <img src={backImg} className="back-button" alt="back"/>
                </div>
                <div className="page-title inline-block">
                    Romantic Comedy
                </div>
                <div className="search-wrapper inline-block right">
                    <img src={searchImg} className="search-button" alt="search"/>
                </div>
            </div>
        );
    }
}

export default Header;
