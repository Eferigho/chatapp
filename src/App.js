import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Join from './components/join';
import Chat from './components/chat';

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Join} />  
              <Route path="/chat" component={Chat} />
          </Switch> 
      </BrowserRouter>
    </>
  );
}

export default App;
