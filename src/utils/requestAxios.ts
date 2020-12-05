import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
interface request_opt {
  url: string
  headers: object
  method: string
  params: object
  data: object
}

export default function request(options: request_opt) {
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
      .catch((error) => {
        console.log(error)
        reject({
          message: '系统繁忙，请稍后重试！',
        })
      })
  })
}
