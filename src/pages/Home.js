import React from 'react'
import Header  from '../Header';
import Body  from '../Body';
 import FooterRedux  from '../Footer';
//import Footer from '../components/Footer/index'

class Home extends React.Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <Header />
            <Body />
            {/* <Footer /> ini manual */}
            <FooterRedux />
            </header>
        </div>
        );
    }
}

export default Home;
  