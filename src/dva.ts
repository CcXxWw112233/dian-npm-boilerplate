import { create } from 'dva-core'

let app: { model: (arg0: any) => any; start: () => void; _store: any; getStore: () => any; dispatch: any }
let store: { dispatch: any }
let dispatch
function createApp(opt: { models: any[] }) {
  //   if('development' == NODE_ENV) {
  //     // redux日志
  //     opt.onAction = [createLogger()];
  //   }
  app = create(opt)
  // app.use(createLoading({}))

  if (!window.registered) opt.models.forEach((model: any) => app.model(model))
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
