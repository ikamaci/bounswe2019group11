import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './style/App.css';
import Login from './Login';
import Register from './Register';
import asyncComponent from './asyncComponent';

class App extends React.Component {
  constructor(props) { super(props); }

  menuItemOnClick(event) {
    const container = document.getElementById('container');

    switch (event.target.innerHTML) {
      case 'Login':
        ReactDOM.render(<Login />, container);
        break;
      case 'Register':
        ReactDOM.render(<Register />, container);
        break;
    }
  }
  render() {
    return (
      <div>
        <ul id="menu">
          <li onClick={this.menuItemOnClick}><strong>Login</strong></li>
          <li onClick={this.menuItemOnClick}><strong>Register</strong></li>
        </ul>
        <div id="container"><Register /></div>
      </div>
    );
  }
}

export default App;
