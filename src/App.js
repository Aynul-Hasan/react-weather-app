import './App.css';
import React from "react";
import { Home } from './component/Home';
import { Nav } from './component/Nav';
import {Weather} from './component/Weather'
import { About }from './component/About'
import {Footer} from './component/Footer'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
       <Nav/>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/weather" exact component={Weather} />
         <Route path="/about" exact component={About} />
         
       </Switch>
       <Footer/>
       </Router>
    </>
  );
}

export default App;
