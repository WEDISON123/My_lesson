import { defineStore } from "pinia";
import { getSwiperList, getVideoList } from '@/service/home.js'

// 每个子仓库都是函数， use 开头， store 结尾， hooks
// 界面工程师 好好写页面
export const useHomeStore = defineStore('home', {
    state: () => { // 中央状态
        return {
            swiperList: [],
            videoList: []
        }
    },
    actions: { // 接管了数据请求
        // 走接口
        async getSwiperList() {
            const { result } = await getSwiperList()
            this.swiperList = result
            // console.log(this.swiperList,'//swiper');
        },
        async getVideoList() {
            const { result } = await getVideoList()
            this.videoList = result
            // console.log(this.videoList,'//video');
        }
    }
})