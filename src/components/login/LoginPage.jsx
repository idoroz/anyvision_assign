import React, { Component } from 'react';
import {Col, Button, Chip} from 'react-materialize'

class LoginPage extends Component {
	render() {

    return (

         <div className ="loginWrapper"> 
    <Col m={12} s={12}>
    <form class="form-signin" role="form" action="/login" method="post">
      <div className="row">

        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" name="username" placeholder="Enter your username"></input>
        </div>
          </div>
          <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">lock_outline</i>
          <input id="icon_telephone" type="tel" name="password" placeholder="Enter your password"></input>
        </div>
    </div>
              <div className="row loginBtn">
        <div className="input-field">
       <button class="btn btn-lg btn-primary btn-block" type="submit">LOGIN</button>
    </div>
           <div className="input-field">
       <a href ="/register" class="btn btn-primary">SIGN UP</a>
    </div>
    </div>
  </form>
    </Col>

  </div>

      )
	}
	
	}

export default LoginPage;
