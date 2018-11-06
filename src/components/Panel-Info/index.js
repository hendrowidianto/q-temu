import React from 'react'
import './panel-info.css';

class PanelInfo extends React.Component {
    render(){
        const {PanelInfoTitle, PanelInfoDate, PanelInfoDescription} = this.props
        
        return (
            <div className="PanelInfo-Box">
                <div className="PanelInfo-Title">{PanelInfoTitle}</div>
                <div className="PanelInfo-Date">{PanelInfoDate}</div>
                <div className="PanelInfo-Description">{PanelInfoDescription}</div>
            </div>
        )
    }
}

export default PanelInfo