import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store,persistor } from './redux/Store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={'Loadng... '} persistor={persistor}>
             <App />
        </PersistGate>
        </Provider>
      </BrowserRouter>   
  </React.StrictMode>
);
reportWebVitals();
