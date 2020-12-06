import React, { Component } from 'react'
import dva from './dva'
import models from './models'
import { Provider } from 'react-redux'
import CI from './components/index'

const dvaApp = dva.createApp({
  models: models,
})
const store = dvaApp.getStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CI />
      </Provider>
    )
  }
}
export default App
