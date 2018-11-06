import React from 'react';
import './App.css';
//import React, { Component } from 'react';

class Title extends React.Component {
//class Title extends Component {
    render(){
        return (
            <div className="TitleName">
                <h2><a href="http://hendrowidianto.com" target="_blank" rel="noopener noreferrer">Hendro Widianto</a></h2>
                <p>I'm Red Ranger</p>
            </div>
        )
    }
}

export default Title