import { defineStore } from "pinia";
import { getProducts } from "@/service/shop";

// 创建子仓
export const useProductsStore = defineStore('products', {
    state: () => { // 中央状态
        return {
            all: []
        }
    },
    actions: { // 接管了数据请求
        // 走接口
        async loadAllProducts() {
            const { result } = await getProducts()
            this.all = result
            // console.log(result, '///load');
        }
    }
})