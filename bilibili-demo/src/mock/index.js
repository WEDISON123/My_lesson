import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videoList from './data/videoList'
import products from './data/shop'

// - 假接口满足什么？ 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间，模拟请求耗时
})

// 轮播图 url /swiperList
// 拦截App中的xhr 请求 匹配路径
Mock.mock(/\/swiperList/, 'get', () => {
    return {
        code: 0,
        result: swiperList
    }
})

Mock.mock(/\/videoList/, 'get', () => {
    return {
        code: 0,
        result: videoList
    }
})
// 假冒的是服务器
Mock.mock(/\/products/, 'get', () => {
    return {
        // code: 1,
        // msg: '服务器出错了'
        code: 0, // 没有错误发生
        result: products
    }
})