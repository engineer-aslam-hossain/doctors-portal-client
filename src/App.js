import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import DashBoard from "./components/DashBoard/DashBoard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = React.createContext();
function App() {
  const [LoggedInUser, SetLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ LoggedInUser, SetLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path='/appointment'>
            <Appointment />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
