import React, { Component } from 'react'
import Home from './components/Home'
import dva from './dva'
import models from './models'
import { Provider } from 'react-redux'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})
const store = dvaApp.getStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
export default App
