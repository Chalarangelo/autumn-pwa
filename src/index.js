import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import './index.css';
import App from './components/App';
import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
