import React from 'react'; //useEffect is used for componentDidMount/componentWillUpdate methods
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Home from './components/Home/Home';

import './css/App.css';

const App = () => {

    return (
      <BrowserRouter>
        <Container>
          <Navigation mb="5" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    );
}

export default App;