import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const HomePage = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomePage</Text>
      <Button
        title="Go SectionListDemo"
        onPress={() => navigation.navigate('SectionListDemo')}
      />
      <Button
        title="Go FlatListDemo"
        onPress={() => navigation.navigate('FlatListDemo')}
      />
      <Button
        title="Go Page1"
        onPress={() => navigation.navigate('Page1', {name: 'myTest'})}
      />
      <Button title="Go Page2" onPress={() => navigation.navigate('Page2')} />
      <Button
        title="顶部导航器"
        onPress={() => navigation.navigate('MaterialTopTabNavigator')}
      />
      <Button
        title="底部导航器"
        onPress={() => navigation.navigate('BottomTabNavigator')}
      />
      <Button
        title="抽屉导航器 - 跳转之后再抽屉"
        onPress={() => navigation.navigate('DrawerNavigator')}
      />
      <Button
        title="切换导航器"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
};

// HomePage.navigationOptions = {
//   title: 'Home',
//   headerBackTitle: '返回'
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    color: 'skyblue',
  },
});

export default HomePage;
