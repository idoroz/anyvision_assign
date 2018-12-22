import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ResultsComponent from './components/results/ResultsComponent';
import DetailComponent from './components/detailed/DetailComponent';
import SearchBar from './components/searchbar/SearchBar';
import TopTenList from './components/topten/TopTenList';
import RegisterPage from './components/login/RegisterPage';
import LoginPage from './components/login/LoginPage';
import './App.css';
import { Row, Col } from 'react-materialize';

class App extends Component {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href = '/';
    }

    render() {

        return (

            <Router>
          <div>
<Route exact path='/' component={LoginPage}/>
<Route path="/register" component={RegisterPage} />
            <Route path="/home" render={props => <Row>     
                      <Col s={6}>
                      <button onClick={this.logout}>Log Out</button>
                          <SearchBar />
                          <ResultsComponent />
                      </Col>
                         <Col s={6}>
                           <TopTenList />
                       </Col>
              </Row>
            } />
<Route path="/detail" component={DetailComponent} />

          </div>
        </Router>
        )

    }
}
export default App;


