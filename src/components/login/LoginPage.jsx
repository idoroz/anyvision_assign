import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
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

    axios.post('/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/home')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {message !== '' &&
            <div>
              { message }
            </div>
          }
          <h2>Please sign in</h2>
    
          <input type="text" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <input type="password"  placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button type="submit">Login</button>
          <p>
            Not a member? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginPage;