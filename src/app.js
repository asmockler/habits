import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import persistState from 'redux-localstorage'
import App from './containers/app'
import habitsApp from './reducers/reducers'

// Create a redux store that persists to localStorage
const createPersistentStore = compose(
  persistState()
)(createStore)

// Check if there is an existing state to hydrate the store
const existingState = window.localStorage["redux-localstorage"]
const initialState = existingState ? JSON.parse(existingState) : undefined

// Create the store with the habits reducer and an optional initial state for
// returning users.
const store = createPersistentStore(habitsApp, initialState)

// Render the app to the browser
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
