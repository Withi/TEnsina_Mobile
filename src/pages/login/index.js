import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';

// import { Container } from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../../store/actions/login';

const logo = require('../../images/logo.png');

class Login extends Component {
  logar = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Menu',

      params: {},

      action: [],
    });

    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo} />
          <View style={styles.containerForm}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput style={styles.input} />
            <Button
              title="Entrar"
              style={styles.button}
              color="#124559"
              onPress={() => this.logar()}
            />
            <View style={styles.separator} />
          </View>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    height: 220,
    width: 230,
  },
  containerForm: {
    backgroundColor: '#C0FDFB',
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: 200,
    marginTop: 20,
    justifyContent: 'flex-start',
    color: '#124559',
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  button: {
    width: 200,
    marginBottom: '20px',
    justifyContent: 'space-between',
  },
  separator: {
    height: 20,
  },
});
