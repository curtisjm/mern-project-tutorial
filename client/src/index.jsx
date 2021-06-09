import React from 'react'
import ReactDOM from 'react-dom'
// keeps track of store (global state) which we can access from anywhere inside of the app
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// need to add "proxy": "http://localhost:5000", to package.json to allow access to server