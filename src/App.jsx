import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import NumberWord from './components/NumberWord';
import WordColor from './components/WordColor';


function App() {
  return (
    <div className="container my-4">
      <Router>
        <Home path="/home"/>
        <NumberWord path="/:parameter"/>
        <WordColor path="/:word/:tColor/:bgColor"/>
      </Router>
    </div>
  );
}

export default App;
