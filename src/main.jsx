import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router' ;
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { persistor} from './store/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>
)
