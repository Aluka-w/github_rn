import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {
  createSwitchNavigator,
  SafeAreaView,
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, Button, ScrollView} from 'react-native';
// DrawerNavigatorItems 代表侧拉栏的 item
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import HomePage from '../page/HomePage';
import WelcomePage from '../page/WelcomePage';
import DetailPage from '../page/DetailPage';
import FetchDemo from '../page/FetchDemo'

const InitNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: () => null, // 隐藏头部
      },
    },
  },
  {},
);
const MainNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: () => null,
      },
    },
    DetailPage,
    FetchDemo
  },
  {},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      initialRouteName: 'Main',
      navigationOptions: {
        header: () => null,
      },
    },
  ),
);
