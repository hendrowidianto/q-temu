import React from 'react';
import './App.css';
import { connect } from 'react-redux'


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { appFooter } = this.props

        return (
            <div className="Footer">
                <div className="ContentFooter">
                    {appFooter.pageFooter}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appFooter : state.app
    }
}

Footer = connect(mapStateToProps)(Footer)
export default Footer