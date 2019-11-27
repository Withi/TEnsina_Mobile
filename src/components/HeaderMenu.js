import React, {Component} from 'react';

import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {colors, metrics} from '../styles';
import {saveLogado} from '../asyncStorage';
import {version} from '../../package.json';

const styles = StyleSheet.create({
  viewVersion: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  txtVersion: {
    color: colors.white,
    marginRight: metrics.baseMargin - 5,
  },
});

export default class HeaderMenu extends Component {
  componentDidMount() {}

  _menuSair = props => {
    saveLogado(false);
    const {navigation} = props;
    const navigateAction = NavigationActions.navigate({
      routeName: 'Login',

      params: {},

      action: [],
    });

    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View>
        <View style={styles.viewVersion}>
          <Text style={styles.txtVersion}>Versão: {version}</Text>
        </View>
        <View
          style={{
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginTop: metrics.baseMargin,
              width: 200,
              height: 80,
            }}
            source={require('../images/logoToolbar.png')}
          />
          <TouchableOpacity
            style={{
              width: 110,
              backgroundColor: colors.secundary,
              padding: metrics.basePadding - 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: metrics.baseMargin * 2,
              borderRadius: metrics.baseRadius * 8,
            }}
            onPress={() => this._menuSair(this.props)}>
            <Text style={{color: colors.white, fontSize: 14}}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
