import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default function request(options = {}) {
  const {
    url = '',
    headers = {},
    method = 'post',
    params = {},
    data = {},
  } = options

  return new Promise((resolve, reject) => {
    axios({
      ...{
        url,
        headers,
        method,
        params,
        data,
        timeout: 60000,
      },
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error, e) => {
        reject({
          message: '系统繁忙，请稍后重试！',
        })
      })
  })
}
