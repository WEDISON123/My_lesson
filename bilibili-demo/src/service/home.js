import axions from './config'

export const getSwiperList = () => {
    return axions.get('/swiperList')
}
export const getVideoList = () => {
    return axions.get('/videoList')
}