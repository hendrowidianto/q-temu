import React from 'react'
import axios from "axios"
import './panel-list.css';

class PanelList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            members: []
        }
    }

    // componentDidMount(){
    //     //fetch data member dari web
    //     axios.get("https://swapi.co/api/people/")
    //     .then(response => this.setState({ people: response.data.results }));
    // }

    componentDidMount(){
        //fetch data member dari web
        axios.get("https://swapi.co/api/people/")
        .then(response => response.data.results)
        .then(membersData => {
            this.setState({
                //slice untuk limit                
                members: membersData.slice(0,3).map(member => ({
                    name : member.name,
                    tahunLahir : member.birth_year
                }))
            })
        })
    }

    render(){
        const {PanelListTitleName, PanelListName, PanelListDescription} = this.props
        const {members} = this.state

        return (
            <div className="PanelList-Box">
                <div className="PanelList-Image">
                </div>
                <div className="PanelList-DescriptionBox">
                    <div className="PanelList-Description-TitleName">{PanelListTitleName}</div>
                    <div className="PanelList-Description-Name">{PanelListName}</div>
                    <div className="PanelList-Description-Desc">{PanelListDescription}</div>
                </div>
                {/* <ul>{this.state.people.map(p => <li>{p.name} {p.birth_year}</li>)}</ul> */}
                <ul>{members.map(p => <li>{p.name} {p.tahunLahir}</li>)}</ul>
            </div>
        )
    }
}

export default PanelList