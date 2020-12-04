import { create } from 'dva-core'
import createLoading from 'dva-loading'

let app
let store
let dispatch
function createApp(opt) {
  // redux日志
  //   if('development' == NODE_ENV) {
  //     // redux日志
  //     opt.onAction = [createLogger()];
  //   }
  app = create(opt)
  app.use(createLoading({}))

  if (!window.registered) opt.models.forEach((model) => app.model(model))
  window.registered = true
  app.start()

  store = app._store
  app.getStore = () => store
  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
}
