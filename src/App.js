import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routes/routes.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {routes.map(route => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default connect(App);
export default App;
