import React from 'react'
import {  BrowserRouter as Router,  Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Topics = ({ match }) => (
    <React.Fragment>
        <Router>
            <div>
                <h2>Static Events</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route exact path={match.path} render={() => <h3><br />Please select a topic.</h3>} />
            </div>
        </Router>        
    </React.Fragment>
);

const Topic = ({ match }) => (
    <div>
        <h3><br />{match.params.topicId}</h3>
    </div>
);

export default Topics;