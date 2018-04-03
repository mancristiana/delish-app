import React from 'react';
import ReactDOM from 'react-dom';

// Import mbdreact dependencies
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

// App component
import App from './components/App';

// Redux store
import store, { history } from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
