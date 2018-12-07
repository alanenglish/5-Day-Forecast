import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'; // css for react dates calendar
import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
import './styles/styles.scss';

// const store = configureStore();

// const App = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

const App = (
  <AppRouter />
);

ReactDOM.render(App, document.getElementById('app'));
