import React, { Component } from 'react';
import axios from 'axios';



class RegisterPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/register', { username, password })
      .then((result) => {
           localStorage.setItem('jwtToken', result.data.token);
        this.props.history.push("/home")
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>
          <input type="text"  placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;