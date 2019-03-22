import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import MediaListing from "./components/MediaListing";

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <MediaListing/>
            </div>
        );
    }
}

export default App;
