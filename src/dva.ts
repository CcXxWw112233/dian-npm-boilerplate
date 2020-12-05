import { create } from 'dva-core'

interface App {
  _models: any[]
  _store: any
  _plugin: Plugin
  use: any
  model: (m: Object) => any
  start: () => void
  getStore: () => any
  dispatch: () => void
}

let store: any
let dispatch
let app: App
// const window: {
//   new (): Window
//   prototype: Window
// }
declare var window: Window & typeof globalThis

function createApp(opt: { models: any[] }): App {
  //   if('development' == NODE_ENV) {
  //     // redux日志
  //     opt.onAction = [createLogger()];
  //   }
  app = create(opt)
  // app.use(createLoading({}))

  if (!(<any>window).registered) {
    opt.models.forEach((model: any) => app.model(model))
  }
  ;(<any>window).registered = true
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
