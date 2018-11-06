import React from 'react'
import axios from "axios"
import '../components/Panel-List/panel-list.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Events extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            members: []
        }
    }

    componentDidMount(){
        //fetch data member dari web
        axios.get("https://swapi.co/api/people/")
        .then(response => response.data.results)
        .then(membersData => {
            this.setState({
                //slice untuk limit                
                members: membersData.slice(0,3).map(member => ({
                    name : member.name,
                    tahunLahir : member.birth_year,
                    gender : member.gender
                }))
            })
        })
    }

    render(){
        const {members} = this.state
        const {match} = this.props

        return (
            <div>
                {members.map((p , index) => 
                    <Link to={`${match.url}/${index+1}`}>
                    <div className="PanelList-Box">
                        <div className="PanelList-Image">
                        </div>
                        <div className="PanelList-DescriptionBox">
                            <div className="PanelList-Description-TitleName">{p.name}</div>
                            <div className="PanelList-Description-Name">{p.gender}</div>
                            <div className="PanelList-Description-Desc">{p.tahunLahir}</div>
                        </div>
                    </div>
                    </Link>
                )}

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
            </div>
            
        )

        const Topic = ({ match }) => (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
        );
    }
}

export default Events