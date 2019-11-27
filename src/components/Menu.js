import React, {Component} from 'react';

import {View, TouchableOpacity, Image} from 'react-native';

export default class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            this.toggleDrawer();
          }}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/menu-button.png')}
            style={{width: 35, height: 35}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
