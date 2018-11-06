import React from 'react'
import './panel-profile.css';
import Button from '../Button/index'
import ButtonMaterialUI from '../Button/index-material_ui'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { changePageTitle, changePageFooter } from '../../actions/app';

class PanelProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            joined : false
        }
    }

    handleClick = () => {
        this.setState(state => ({
            joined : !state.joined
        }))
    }

    handleTitleButton = () => {
        this.props.TitleButton('QTemuan kuy')
    }

    componentWillUnmount(){
        console.log("Mati")
    }

    componentWillMount(){
        console.log("Sebelum lahir")
    }

    componentDidMount(){
        console.log("Setelah lahir")
    }

    componentDidUnmount(){
        console.log("hidup")
    }

    render(){
        const {PanelProfileInfoTitle, PanelProfileInfoLocation, PanelProfileInfoMember, PanelProfileInfoOrganizer} = this.props       
        
        return (
            <div className="PanelProfile-Box">
                <div className="PanelProfile-Image">
                </div>
                <div className="PanelProfile-Info">
                    
                    <div className="PanelProfile-InfoTitle">
                        {PanelProfileInfoTitle}
                        <Typography component="h2" variant="title" gutterBottom>
                            {PanelProfileInfoTitle}
                        </Typography>
                    </div>
                    <div className="PanelProfile-ListName">
                        <label className="PanelProfile-ListName-Label">Location</label>
                        <label className="PanelProfile-ListName-Value">{PanelProfileInfoLocation}</label>
                    </div>
                    <div className="PanelProfile-ListName">
                        <label className="PanelProfile-ListName-Label">Members</label>
                        <label className="PanelProfile-ListName-Value">{PanelProfileInfoMember}</label>
                    </div>
                    <div className="PanelProfile-ListName">
                        <label className="PanelProfile-ListName-Label">Organizers</label>
                        <label className="PanelProfile-ListName-Value">{PanelProfileInfoOrganizer}</label>
                    </div>
                    <div className="PanelProfile-ListName">
                        <Button className="BigSize-Primary-Button" onClick={this.handleClick}>
                            {this.state.joined ? "Joined" : "Join Us"}
                        </Button>
                        {/* css biasa */}
                        
                        <ButtonMaterialUI color="primary" onClick={this.handleTitleButton}>
                            QTemuan kuy
                        </ButtonMaterialUI>
                        <ButtonMaterialUI color="primary" onClick={() => { this.props.FooterButton('Ganti Footer') }}>
                            Ganti Footer
                        </ButtonMaterialUI>
                        {/* yang diatas pake material ui */}
                        
                        {this.state.joined ? "Joined" : ""}
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         appTitle : state.app
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        TitleButton: (judulBaru) => dispatch(changePageTitle(judulBaru)),
        FooterButton: (judulBaru) => dispatch(changePageFooter(judulBaru))
    }
}

PanelProfile = connect(null, mapDispatchToProps)(PanelProfile)

export default PanelProfile