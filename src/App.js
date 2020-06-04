import React from 'react';
import LoginPage from './Pages/Home/LoginPage';
import SignUpPage from './Pages/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/SignUp" component={SignUpPage}/>
      </Switch>

    </Router>

  );
}

export default App;
