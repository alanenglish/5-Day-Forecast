import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'; // css for react dates calendar
import 'react-toastify/dist/ReactToastify.css'; // react toastify
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const App = (
  <div>
    <AppRouter />
    <ToastContainer className="toast-container" />
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
