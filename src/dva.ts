import { create } from 'dva-core'

interface App {
  _models: any[]
  _store: any
  _plugin: any
  use: any
  model: (m: Object) => any
  start: () => void
}
interface SuperApp extends App {
  getStore: () => any
  dispatch: () => void
}
let store: any
let dispatch
let app: App
let app2: SuperApp

declare var window: Window & typeof globalThis

function createApp(opt: { models: any[] }): SuperApp {
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
  app2 = <SuperApp>Object.assign(app)

  store = app._store
  dispatch = store.dispatch
  app2.getStore = () => store
  app2.dispatch = dispatch

  return app2
}

export default {
  createApp,
}
