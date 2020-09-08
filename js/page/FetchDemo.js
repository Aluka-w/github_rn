/**
 * @description fetch 的使用
 */
import React, {useState} from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';

const FetchDemo = (props) => {
  const [searchText, setSearchText] = useState('');
  const [showText, setShowText] = useState(null);
  const handleChange = (searchText) => {
    setSearchText(searchText);
  };
  const loadData = () => {
    let url = `https://api.github.com/search/repositories?q=${searchText}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.text()
        } else {
          throw new Error('网络错误')
        }
      })
      .then((res) => {
        setShowText(res);
      })
      .catch(err => {
        setShowText(err.toString())
      })
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>FetchDemo</Text>
      <View style={styles.inputContain}>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={handleChange}
          placeholder="请输入内容"
        />
        <Button title="获取" onPress={loadData} />
      </View>
      <Text>{showText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  inputContain: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },  
  input: {
    height: 30,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10
  },
});

export default FetchDemo;
