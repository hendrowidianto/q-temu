import React from 'react';
import './App.css';
import PanelProfile from './components/Panel-Profile/index';
import DataEventProfile from './stores/data-eventprofile';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            DataEventProfile
        }
    }

    render(){
        const {DataEventProfile} = this.state

        return (
            <div className="Header">
                {DataEventProfile
                    .map((data, index) => (
                        <PanelProfile key={index} PanelProfileInfoTitle={data.EventProfileTitle} PanelProfileInfoLocation={data.EventProfileLocation} PanelProfileInfoMember={data.EventProfileMember} PanelProfileInfoOrganizer={data.EventProfileOrganizer}/>
                    ))
                }
            </div>
        )
    }
}

export default Header