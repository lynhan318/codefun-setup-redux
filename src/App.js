import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const {message, dispatch} = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {message}
        <button
          onClick={() => {
            dispatch({
              type: 'CHANGE_MESSAGE',
              payload: 'this is new message',
            });
          }}>
          Change Message
        </button>
      </header>
    </div>
  );
}

export default connect(
  state => {
    console.log('state', state);
    return {message: state.message};
  },
  (dispatch, props) => {
    console.log('dispatch', dispatch);
    return {dispatch};
  },
)(App);
