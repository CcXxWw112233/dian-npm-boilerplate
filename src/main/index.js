import dva from 'dva'
//兼容ie10及以下
Object.setPrototypeOf = require('setprototypeof')

// 1. Initialize
let initialState = {}
const app = dva({
  onError(e, dispatch) {
    const pattern = /Loading chunk (\d)+ failed/g
    const isChunkLoadFailed = e.message.match(pattern)
    if (isChunkLoadFailed) {
      alert('当前服务器文件有更新，正在获取中...')
      window.location.reload()
    }
  },
  onReducer: (r) => (state, action) => {
    const newState = r(state, action)
    // 'app/logout' 为 models 目录文件中 effect 中的方法名
    if (action.type == 'user/logout') {
      //退出登录后清除所有和用户相关的数据
      return r(initialState, action)
    }
    return newState
  },
})

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('../models/example').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
