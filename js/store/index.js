/**
 * @description 创建仓库
 */
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer';

/**
 * 自定义中间件
 * @param {any} store 组件 store
 */
const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    console.log('dispatching a function :>> ');
  } else {
    console.log('dispatching', action);
  }
  const result = next(action);
  console.log('nextState :>> ', store.getState());
  return result;
};

const middlewares = [
  logger,
  thunk
];

export default createStore(reducer, applyMiddleware(...middlewares));
