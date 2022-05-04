import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar/nav'
import { taskReducer } from './Components/Redux/Reducers/todoStorage'
import { composeWithDevTools } from '@redux-devtools/extension'

const allReducers = combineReducers({
  tasks: taskReducer,
})
const store = createStore(allReducers, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
    </Provider>{' '}
  </React.StrictMode>,
)
