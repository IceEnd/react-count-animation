import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './Home';

import '../style/count.css';

const render = (Container) => {
  ReactDOM.render(
    <AppContainer>
      <Container />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Home);

if (module.hot) {
  module.hot.accept('./Home', () => {
    const newApp = require('./Home').default;
    render(newApp);
  });
}
