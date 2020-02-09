import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup}/>
    </div>
  </Router>),
  document.getElementById('root')
);
