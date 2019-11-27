import React, {Component} from 'react';

import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../../store/actions/home';

// import { Container } from './styles';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.home.users,
  tasks: state.home.tasks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
