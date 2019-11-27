import React, {Component} from 'react';

import {View, Text} from 'react-native';

// import { Container } from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../../store/actions/login';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>LOGIN</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.login.users,
  tasks: state.login.tasks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
