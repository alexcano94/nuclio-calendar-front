import './App.css';
import React from "react";
import Login from "./components/login";
import useToken from './services/useToken';
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Register from "./components/register";
import ProvideAuth from "./components/providers/ProvideAuth";
import PrivateRoute from "./components/router/PrivateRoute";
import Calendar from "./components/Calendar";

function App() {
  const { setUserInfo, removeToken, userId } = useToken();
  return (
    <ProvideAuth>
      <Router>
        <div className="wrapper">
          <Switch>
            <Route path="/login">
              <Login setUserInfo={setUserInfo} />
            </Route>
            <Route path="/register">
              <Register setUserInfo={setUserInfo} />
            </Route>
            <PrivateRoute path="/">
              <h1>Calendar</h1>
              <Calendar logout={removeToken} userId={userId}/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
