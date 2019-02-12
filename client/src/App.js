import React, { Component } from 'react'
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavTabs from './NavTabs'
import Background from './map.jpg'





class App extends Component {

    render() {
      const pageStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        left: '0'
      }
        return (
          <Router>
            
          <div style={pageStyle}>
          <NavTabs />
            <Route exact path ="/" component={Home} />
            {/* <Route exact path='/play' component={Play} />
            {/* <Route exact path='/boardpage' component={BoardPage} /> */}
            {/* <Route exact path ='/maptest' component={MapComponent} />  */}
          </div>
        </Router>
    
    
      );
      }
 

}
export default App;
