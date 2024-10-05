import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles.css';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render your app
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
