export default {
  namespace: 'examples',
  state: {
    user_info: {},
  },
  subscriptions: {},
  effects: {
    *wechatAccountBind({ payload }, { select, call, put }) {
      let res = yield call(wechatAccountBind, payload)
    },
  },
  reducers: {
    updateDatas(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
