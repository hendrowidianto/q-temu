import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { appTitle } = this.props

        return (
            <div className="Menu">
                <div className="MenuLogo">
                    <ul>
                        <li><Link to="/">{appTitle.pageTitle}</Link></li>
                    </ul>
                </div>
                <div className="MenuLeft">
                    <ul>
                        <li><a href="#create-meetup">Create Meetup</a></li>
                        <li><Link to="/explorer">Explorer</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
                </div>
                <div className="MenuRight">
                    <ul>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appTitle : state.app
    }
}

Menu = connect(mapStateToProps)(Menu)
export default Menu