import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

const MyPage = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>MyPage</Text>
      <Button 
        title="修改主题"
        onPress={() => {
          navigation.setParams({
            theme: {
              tintColor: 'yellowgreen',
              updateTime: new Date().getTime()
            }
          })
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});

export default MyPage;
