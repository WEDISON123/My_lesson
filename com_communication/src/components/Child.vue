<template>
    <!-- <div>
     {{msg1}}
     msg2: {{msg2}}
    </div> -->
    <button @click="handlerClick">按钮</button>
 </template>
 <script setup>
//  import { defineProps, useAttrs } from "vue"
//  const props = defineProps({
//          msg1: String
//  })
 
//  const attrs = useAttrs()
//  console.log(attrs)

 const emit = defineEmits(["key","value"])
 const handlerClick = () => {
        // 内置的emit方法
        emit("update:key", "新的key")
        emit("update:value", "新的value")
    }
 </script>