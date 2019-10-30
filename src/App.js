import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import CustomNavBar from './components/CustomNavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div>
        <CustomNavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </div>
    </Router>
  );
}

export default App;
