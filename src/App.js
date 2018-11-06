import React, { Component } from 'react';
import './App.css';
import Menu  from './Menu';
import {  BrowserRouter as Router,  Route } from 'react-router-dom';
import Home  from './pages/Home';
import About  from './pages/About';
import Explorer  from './pages/Explorer';
import Events  from './pages/Events';
import Footer from './Footer'
import { Provider } from 'react-redux'
import myStore from './configs/store'

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Router>
            <div>
              <Menu />

              <Route exact path="/" render={() => (
                <Home />
              )} />
              <Route path="/about" component={About} />
              <Route path="/explorer" component={Explorer} />
              <Route path="/events" component={Events} />
            </div>
          </Router>        
      </Provider>
    );
  }
}

export default App;
