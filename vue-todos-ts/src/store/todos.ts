import { defineStore } from 'pinia' // 某个模块的状态函数化
import { ref, Ref, reactive, computed } from 'vue'
import { nanoid } from 'nanoid'

// 告别类式编程 函数式
type Todo = { id: string; text: string; isComplete: boolean } // 自定义类型
const lsKey = '_v_todos'

export const useTodoStore = defineStore('todos', () => {
    // 泛型
    const todos: Ref<Todo[]> = ref([]) // 每一项的类型
    // 5%
    const addTodo = (text: string) => {
        todos.value = [
            ...todos.value,
            {
                id: nanoid(), // 生成唯一的ID
                isComplete: false, // 未完成
                text // 文本内容
            }
        ]
        updataLocalStorage()
    }

    const updataLocalStorage = () => {[
        localStorage.setItem(lsKey, JSON.stringify(todos.value))
    ]}
    const initFromLocalStorage= () => {
        const lstodos = localStorage.getItem(lsKey)

        if(lstodos === null) {
            todos.value = []
        }else {
            todos.value = JSON.parse(lstodos)
        }
    }

    const completedTodos = computed(() =>
        todos.value.filter(todo => todo.isComplete === true)
    )
    const incompleteTodos = computed(() =>
        todos.value.filter(todo => todo.isComplete !== true)
    )

    const toggleTodo = (id:string) => {
        // todos 更新
        todos.value.forEach(todo => {
            if(todo.id === id) todo.isComplete = !todo.isComplete
        }) // 引用式
        updataLocalStorage()
    }

    const clearCompleteTodos = () => {
        todos.value = todos.value.filter(item => item.isComplete === false)
        updataLocalStorage()
    }

    const deleteTodo = (id:string) => {
        todos.value = todos.value.filter(item => item.id !== id)
        updataLocalStorage()
    }

    return {
        todos,
        addTodo,
        initFromLocalStorage,
        completedTodos,
        incompleteTodos,
        toggleTodo,
        clearCompleteTodos,
        deleteTodo
    }
})