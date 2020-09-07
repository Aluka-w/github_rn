import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const Login = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Button title="登录" onPress={() => navigation.navigate('App')} />
    </View>
  );
};
// Login.navigationOptions = {
//   title: 'test12',
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

export default Login;
