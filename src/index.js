import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';



/**
 * Get the dom and inject the dom inside
 */
const container = document.getElementById("root")
const root = createRoot(container)
let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
