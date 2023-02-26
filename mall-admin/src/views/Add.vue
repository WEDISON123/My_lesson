<template>
    <div>
        {{profile.loginUserName}}
        {{profile.adminUserId}}
        {{profile.nickName}}
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useUserStore } from '../store/user'
// 如何从中央取profile 到页面组件
const userStore = useUserStore(); // useRouter hooks
console.log(userStore.profile.loginUserName,'from store');

const profile = computed(() => userStore.profile)
console.log(profile,'????');
</script>

<style lang="stylus" scoped>
</style>