export const getPageTitle = (pathName) => {
    const data = {
        login: '登入',
        introduce: '系统介绍',
        add: '登添加商品'
    }
    return data[pathName] || ''
}

export const getLocal = (name) => {
    return JSON.parse(localStorage.getItem(name))
}
// h5 提供的本地keyValue存储
export const setLocal = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
}