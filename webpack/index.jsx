import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
import Video from './components/Video';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Hello />
      <Video />
    </div>
  </Provider>
);

render(<App />, document.getElementById('hello'));
