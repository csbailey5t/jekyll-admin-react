import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Hello />
    </div>
  </Provider>
);

render(<App />, document.getElementById('hello'));
