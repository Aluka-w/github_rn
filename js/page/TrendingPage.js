import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index';

export const TrendingPage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>TrendingPage</Text>
      <Button
        title="修改主题1"
        onPress={() => {
          props.onThemeChange('tomato');
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
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onThemeChange(theme) {
    dispatch(actions.onThemeChange(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
