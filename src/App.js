import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';


class App extends Component {
    render() {

      return (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      );
    }
}

export default App;
