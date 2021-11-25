import React, { Component } from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/includes/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
 
   
  render(){


    return (

          <Router>
          <div>
           <Navbar/>
            <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            <Route path="/about">
            <About/>
            </Route>

            <Route path="/contact">
            <Contact/>
            </Route>
             
            </Switch>
          </div>
          </Router>
          
          
      );

    }
}

export default App;
