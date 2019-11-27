import React, {Component} from 'react';

import {View, Text, TextInput} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../../store/actions/home';

// import { Container } from './styles';

class Home extends Component {
  state = {
    searchValue: '',
  };

  onChangeText = text => {
    this.setState({
      searchValue: text,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder={'Pesquisar'}
            onChangeText={text => onChangeText(text)}
            value={this.state.searchValue}
          />
        </View>
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
