import React from 'react'
import './section.css';

class Section extends React.Component {
    render(){
        const {title, url, children} = this.props
        
        return (
            <div className="Section-Box">
                <div className="Section-TitleName">{title}</div>
                <div className="Section-UrlName">{url}</div>
                <div className="Section-Description">
                    {children}
                </div>
            </div>
        )
    }
}

export default Section