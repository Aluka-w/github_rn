/**
 * @description 修改主题的 reducer
 */

import Types from '../action/types'

const defaultState = {
  theme: 'yellow',
};

export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.THEME_CHANGE:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state;
  }
}
