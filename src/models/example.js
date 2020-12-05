export default {
  namespace: 'example',
  state: {
    name: 'di-an',
  },
  subscriptions: {},
  effects: {
    *getUserInfo({ payload }, { select, call, put }) {
      // let res = yield call(wechatAccountBind, payload)
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
