import React from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';

const Page3 = (props) => {
  const {navigation} = props;
  const { state, setParams} = navigation
  const {params} = state
  const showText = params && params.mode === 'edit' ?  "正在编辑" : "编辑完成"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>page3</Text>
      <Text style={styles.showText}>{showText}</Text>

      <TextInput 
        style={styles.input}
        onChangeText={text => {
          setParams({name: text})
        }}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  showText: {
    marginTop: 20,
    fontSize: 20,
    color: 'green'
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#333333'
  }
});
export default Page3;
