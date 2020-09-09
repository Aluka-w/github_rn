/**
 * @description asyncStorage 的用法
 */
import React, {useState} from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const KEY = 'MY_KEY'

export const AsyncStorageDemoPage = (props) => {
  const [val, setVal] = useState("")
  const [str, setStr] = useState("")
  const handleChange = (val) => {
    setVal(val)
  }
  const setData = async () => {
    try {
      await AsyncStorage.setItem(KEY, val)
    } catch (error) {
      console.log('error1 :>> ', error);
    }
  }
  const getData = async () => {
    try {
      setStr(await AsyncStorage.getItem(KEY))
    } catch (error) {
      console.log('error2 :>> ', error);
    }
  }
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(KEY)
    } catch (error) {
      console.log('error3 :>> ', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>AsyncStorageDemoPage 使用</Text>
      <TextInput placeholder="请输入" value={val} onChangeText={handleChange} />
      <Button title="设置" onPress={setData}/>
      <Button title="获取" onPress={getData}/>
      <Button title="删除" onPress={removeData}/>
      <Text>{str}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});

export default AsyncStorageDemoPage;
