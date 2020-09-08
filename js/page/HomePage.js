import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtil from '../navigator/NavigationUtil';
const HomePage = (props) => {
  // 解决 DynamicTabNavigator 限定的路由，跳转不出外层路由的问题
  NavigationUtil.navigation = props.navigation
  return <DynamicTabNavigator {...props} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});

export default HomePage;
