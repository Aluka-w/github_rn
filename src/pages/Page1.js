import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const Page1 = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>page1</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
// Page1.navigationOptions = {
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

export default Page1;
