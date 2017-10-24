import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import Hello from './components/Hello';
import Video from './components/Video';
import Dance from './components/Dance';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Video videoUrl="./videos/hashitomi-kiri-dance-part1.mov" />
      <Dance />
    </div>
  </Provider>
);

render(<App />, document.getElementById('hello'));
