/**
 * @description 开机启动画面
 */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

const WelcomePage = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // 2s 跳转到首页
      NavigationUtil.resetToHomePage(props);
    }, 2000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WelcomePage</Text>
    </View>
  );
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

export default WelcomePage;
