import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import { legacy_createStore as createStore } from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { Provider } from 'react-redux'

import { todoReducer } from './redux/Reducers/TodoReducer'

const store = createStore(todoReducer, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
