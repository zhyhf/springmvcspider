import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ManageApp from './components/ManageApp'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
//const store = createStore(reducer)
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)
render(
    <Provider store={store}>
       <ManageApp/>
    </Provider>,
    document.getElementById('root')
);
