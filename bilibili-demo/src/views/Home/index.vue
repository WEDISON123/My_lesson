<template>
    <div>
        <!-- 一屏半左右 -->
        <!-- 头部组件 -->
        <AppHeader/>
        <!-- 频道组件 -->
        <HomeChannel/>
        <!-- 轮播图 -->
        <HomeSwiper :swiperList="swiperList"/>
        <!-- 视频组件 容器组件 -->
        <HomeVedioList/>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    // 本地组件基本不发送请求
    // import { getSwiperList, getVideoList } from '@/service/home.js'
    import AppHeader from '@/components/AppHeader.vue'
    import HomeChannel from '@/components/HomeChannel.vue'
    import HomeSwiper from '@/components/HomeSwiper.vue'
    import HomeVedioList from '@/components/HomeVedioList.vue'
    import { computed } from '@vue/reactivity'
    import axios from 'axios'
    import { useProductsStore } from '@/store/products'
    import { useHomeStore } from '@/store/home'

    // vuex 区别 只是products模板
    const store = useProductsStore() // 本地到中央的联系
    const products = computed(() => store.all)

    const homeStore = useHomeStore()
    const swiperList = computed(() => homeStore.swiperList)
    const videoList = computed(() => homeStore.videoList)
    // console.log(swiperList, videoList,store.all, '//homevue');

    onMounted( async() => {
        await store.loadAllProducts() // actions 函数就是交给生命周期调用的
        await homeStore.getSwiperList()
        await homeStore.getVideoList()
    })

</script>

<style scoped>

</style>