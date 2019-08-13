import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import Main from './components/Main/Main';
import SearchHome from "./components/Search/SearchHome";
import Definitions from './components/Definitions/Definitions';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard" component={Main} />
          <Route exact path="/search" component={SearchHome} />
          <Route exact path="/definitions" component={Definitions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
