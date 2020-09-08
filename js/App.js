/**
 * @description 根文件
 */
import React from 'react'
import AppNavigators from './navigator/AppNavigators';
import {Provider} from 'react-redux'
import store from './store';

export default App = () => {
  return (
    <Provider store={store}>
      <AppNavigators />
    </Provider>
  )
}
