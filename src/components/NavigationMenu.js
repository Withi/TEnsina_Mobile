import React, {Component} from 'react';
import {NavigationActions, StackActions, DrawerActions} from 'react-navigation';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors, metrics} from '../styles';

// import { Container } from './styles';

const styles = StyleSheet.create({
  viewClick: {
    backgroundColor: colors.secundary,
    padding: metrics.basePadding - 10,
    marginTop: metrics.baseMargin,
    marginRight: 5,
    marginLeft: 5,
    borderBottomRightRadius: metrics.baseRadius * 8,
    borderTopRightRadius: metrics.baseRadius * 8,
  },
  view: {
    padding: metrics.basePadding - 10,
    marginTop: metrics.baseMargin,
    marginRight: 5,
    marginLeft: 5,
    borderBottomRightRadius: metrics.baseRadius * 8,
    borderTopRightRadius: metrics.baseRadius * 8,
  },
  home: {
    backgroundColor: colors.secundary,
    padding: metrics.basePadding - 5,
    marginTop: metrics.baseMargin,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: metrics.baseRadius * 8,
  },
  homeIcon: {
    height: 25,
    width: 25,
  },
  viewIconText: {
    flex: 1,
    flexDirection: 'row',
  },
});

// NavigationMenu.propTypes = {
//   navigation: PropTypes.object,
// };

export default class NavigationMenu extends Component {
  _handleSubmitTabBar = route => {
    console.log(route);
    const navigateAction = NavigationActions.navigate({
      routeName: 'TabBarNavigation',

      params: {},

      action: NavigationActions.navigate({routeName: route}),
    });

    console.log(navigateAction);
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  _handleSubmit = route => {
    this.setState(
      {
        currentRoute: route,
      },
      () => {
        const resetAction = NavigationActions.navigate({routeName: route});
        this.props.navigation.dispatch(resetAction); //do reset here
      }
    );
  };

  //

  render() {
    console.log('PROPS ', this.props);
    const {currentRoute} = this.props;
    return (
      <View>
        <View style={styles.home}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this._handleSubmitTabBar('Home');
            }}>
            <View style={styles.viewIconText}>
              <Image
                source={require('../images/icons/home.png')}
                style={styles.homeIcon}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.primary,
                  textAlignVertical: 'center',
                  marginLeft: metrics.baseMargin - 5,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
