/**
 * 本地存储数据
 * @param {*} key
 * @param {*} value
 */

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

/**
 * 获取本地存储数据
 * @param {*} key
 * @returns
 */
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除
 * @param {*} key
 */
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

/**
 * 删除全部
 */
export const removeAllItem = () => {
  localStorage.clear()
}
