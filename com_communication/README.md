# 组件通信必考题

- 组件树
    App.vue #root 挂载点

    父子组件    props + emit 父组件负责数据通信和管理
        子组件负责展示

    兄弟组件 共享状态

    跨层级组件  传递麻烦 provide + inject
    页面级别组件 router-view 地址 unmount mount 全局 localStorage pinia xuex
    没有任何关系但要共享状态的组件

- vue2.0 类式组件
    setup() vue3.0 composition api  过渡阶段
    setup 语法糖    完全抛弃类式组件    全新
    统一编程风格

- props
- emit
- expose/ref    expose 向外暴露 + ref 父组件取调用子组件里的属性和方法
- attrs props之外 父组件向子组件传递的数据
- v-model
- localStorage
- vuex
- provide/inject