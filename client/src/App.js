 
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CrudState from "./context/crud/CrudState";
import Navbar from "./components/layout/Navbar";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
import Alerts from "./components/layout/Alerts";

const App = () => {
  return (
    <CrudState>
    <AlertState>
    <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
               <Alerts/>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
          </AlertState>
          </CrudState>
  );
}

export default App;