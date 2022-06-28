/**
 * 引入axios
 * */
import axios from 'axios'

import md5 from 'md5'

import loading from './loading'

import { ElMessage } from 'element-plus'

/**
 * 创建axio s实例对象
 * */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 *    请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    loading.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    return config
  },
  (error) => {
    loading.close()
    return Promise.reject(error)
  }
)

/**
 *    响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // 关闭loading加载
    loading.close()

    // TODO token过期状态

    // TODO 全局响应处理
    const { message, success, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    // 响应失败提示
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

/**
 * 统一传参处理
 * */

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

/**
 * 实现code
 *  */
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

/**
 * \导出axios实例对象
 *  */
export default request
