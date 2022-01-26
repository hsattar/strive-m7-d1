import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import { Provider } from 'react-redux'
import storeConfig from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)