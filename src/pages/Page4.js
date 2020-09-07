import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

/**
 * props.navigation.openDrawer()
 * props.navigation.closeDrawer()
 * props.navigation.toggleDrawer()
 * 或者
 * import {DrawerActions} from 'react-navigation-drawer'
 * props.navigation.dispatch(DrawerActions.openDrawer())
 * props.navigation.dispatch(DrawerActions.closeDrawer())
 * props.navigation.dispatch(DrawerActions.toggleDrawer())
 */

const Page4 = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>page4</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
      <Button
        title="Open Page5"
        onPress={() => navigation.navigate('Page5')}
      />
    </View>
  );
};

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

export default Page4;
