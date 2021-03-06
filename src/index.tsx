import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { storeConfig, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)