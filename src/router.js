import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/login';
import Home from './pages/home';

import {colors} from './styles';

import {saveLogado} from './asyncStorage';

import HeaderLogo from './components/HeaderLogo';
import NavigationDrawerStructure from './components/Menu';
import HeaderMenu from './components/HeaderMenu';
import NavigationMenu from './components/NavigationMenu';

logout = navigation => {
  saveLogado(false);
  const navigateAction = NavigationActions.navigate({
    routeName: 'Login',

    params: {},

    action: [],
  });

  navigation.dispatch(navigateAction);
};

const NavigationStack = createStackNavigator(
  {
    // All the screen from the Screen1 will be indexed here
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerLayoutPreset: 'center',
        headerTitleStyle: {flex: 1, justifyContent: 'center'},
        headerStyle: {
          backgroundColor: colors.secundary,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerLeft: (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <NavigationDrawerStructure navigationProps={navigation} />
          </View>
        ),
        headerTitle: () => <HeaderLogo></HeaderLogo>,
        headerRight: () => (
          <View style={{height: 30, width: 30, marginRight: 10}}>
            <Image
              source={require('./images/qr-code.png')}
              style={{height: 30, width: 30}}
            />
          </View>
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const Menu = createDrawerNavigator(
  {
    MenuHome: {
      screen: NavigationStack,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
  },
  {
    initialRouteName: 'MenuHome',
    contentComponent: props => {
      return (
        <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
          <SafeAreaView
            forceInset={{flex: 1, top: 'always', horizontal: 'never'}}>
            <HeaderMenu {...props} />
            <NavigationMenu {...props} />
          </SafeAreaView>
        </ScrollView>
      );
    },
  }
);

const createNavigator = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Menu,
      },
      {
        initialRouteName: userLogged ? 'Login' : 'Menu',
      }
    )
  );

export default createNavigator;
