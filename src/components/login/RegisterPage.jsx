import React, { Component } from 'react';
import {Col, Button, Chip} from 'react-materialize'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userDetails } from '../../actions/userAction';

class RegisterPage extends Component {

constructor(props){
      super(props);
      this.state = {
        username : '',
        password : ''
  }
      this.handleSubmit = this.handleSubmit.bind(this);
        this.nameUpdateInput = this.nameUpdateInput.bind(this);
          this.passUpdateInput = this.passUpdateInput.bind(this);
  }

nameUpdateInput(event){
    this.setState({username : event.target.value})
}
passUpdateInput(event){
    this.setState({password : event.target.value})
}

handleSubmit(){
    this.props.userDetails(this.state)

}



	render() {

    return (


             <div className ="loginWrapper"> 
    <Col m={12} s={12}>
    <form class="form-signin" role="form" action="/register" method="post">
      <div className="row">

        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" name="username" placeholder="Create your username" onChange={this.nameUpdateInput}></input>
        </div>
          </div>
          <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">lock_outline</i>
          <input id="icon_telephone" type="tel" name="password" placeholder="Create your password" onChange={this.passUpdateInput}></input>
        </div>
    </div>
              <div className="row loginBtn">
        <div className="input-field">
       <button class="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} type="submit">SIGN UP</button>
    </div>
    </div>
  </form>
    </Col>

  </div>

      )



}


		
	}



RegisterPage.propTypes = {
  userDetails: PropTypes.func.isRequired,
};

  const mapStateToProps = state => ({
  creds : state.user.creds
 
});
export default connect(mapStateToProps, { userDetails })(RegisterPage);