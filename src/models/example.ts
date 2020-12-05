export default {
  namespace: 'example',
  state: {
    name: 'di-an',
  },
  subscriptions: {},
  effects: {
    *getUserInfo({ payload }: any, { select, call, put }: any) {
      console.log(payload, select, call, put)
      // let res = yield call(wechatAccountBind, payload)
    },
  },
  reducers: {
    updateDatas(state: object, action: any) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
