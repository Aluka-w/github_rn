import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createTabNavigator,
} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
const PopularTab = () => {
  return (
    <View style={styles.container}>
      <Text>PopularTab</Text>
      <Button
        title="跳转到 DynamicTabNavigation 之外的路由"
        onPress={() => {
          NavigationUtil.goPage({}, 'DetailPage');
        }}
      />
      <Button
        title="跳转到 FetchDemo"
        onPress={() => {
          NavigationUtil.goPage({}, 'FetchDemo');
        }}
      />
      <Button
        title="跳转到 AsyncStorageDemoPage"
        onPress={() => {
          NavigationUtil.goPage({}, 'AsyncStorageDemoPage');
        }}
      />
    </View>
  );
};

const PopularPage = (props) => {
  const [tabName, setTabName] = useState([
    'Java',
    'Android',
    'IOS',
    'React',
    'React Native',
    'PHP',
  ]);

  const _genTabs = () => {
    const tabs = {};
    tabName.forEach((item, index) => {
      tabs[`tab${index}`] = {
        // screen 动态传参
        screen: (props) => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  };

  const TabNavigator = createAppContainer(
    createMaterialTopTabNavigator(_genTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle, // 样式
        upperCaseLabel: false, // 把默认的大写关闭
        scrollEnabled: true, // 是否可以滚动
        style: {
          backgroundColor: '#a67',
        },
        indicatorStyle: styles.indicatorStyle, // 指示器样式
        labelStyle: styles.labelStyle, // label 样式
      },
    }),
  );

  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});

export default PopularPage;
