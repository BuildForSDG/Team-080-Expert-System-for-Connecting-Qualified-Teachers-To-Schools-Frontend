/*const app = async () => '#BuildforSDG';

export default app;*/


import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import ProcessForm from './components/ProcessForm'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sigin from './components/Sigin';





class App extends Component {
    

  render() {
    return (<Router>
      <div className="App">
        
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route exact path='/createAccount' component={ProcessForm} />
                  <Route exact path='/signin' component={Sigin} />
                 
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>);
  }

}

export default App;
