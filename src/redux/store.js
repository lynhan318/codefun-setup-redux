import {createStore, combineReducers} from 'redux';

const defaultState = 'this is default Message! dispatch an action to change me';
const reducers = combineReducers({
  message: (state = defaultState, action) => {
    console.log('action', action);
    if (action.type === 'CHANGE_MESSAGE') {
      return action.payload;
    }
    return state;
  },
});
export const store = createStore(reducers, {});
