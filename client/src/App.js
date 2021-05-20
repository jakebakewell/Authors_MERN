import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <NewAuthor path="/new"/>
        <EditAuthor path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
