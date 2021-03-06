import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Send from './components/Send'

function App() {
  return (
    <>
      <Router basename='/React-website'>
        <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/send' component={Send} />
      </Router>
    </>
  );
}

export default App;