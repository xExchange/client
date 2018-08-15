import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, logout } from '../../store/authentication/actions';

class Authentication extends Component {
  state = {
    login: 'admin@example.com',
    password: 'admin'
  };

  login = () => {
    this.props.login(this.state.login, this.state.password);
  };

  logout = () => {
    this.props.logout();
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePassChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="authentication">
        email: <input type="text" value={this.state.login} onChange={this.handleLoginChange} />
        password: <input type="password" onChange={this.handlePassChange} />
        <button onClick={this.login}>LOGIN</button>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

Authentication.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Authentication);
