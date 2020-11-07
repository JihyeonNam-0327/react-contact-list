import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from './routes/routes.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {routes.map(route => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
                // store=
                />
                ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(state => state)(App);
