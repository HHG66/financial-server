import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from '@/store'
// import 'antd/dist/antd.css';


// redux
import { Provider } from 'react-redux'
import { store } from './store/index'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //下面的这个注掉的原因是react会在StrictMode下执行两次render来监测组件的副作用
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
    {/* </React.StrictMode>   */}
  </Provider>
);
