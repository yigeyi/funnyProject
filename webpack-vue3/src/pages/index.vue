<template>
  <h1>
    todos组件
  </h1>
  
</template>
 
<script>
//import {watch} from 'vue'
//import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";
 
export default {
  name: "Todos",
  setup() {
    // 获取路由器实例
    //const router = useRouter()
    // route是响应式对象,可监控器变化
    //const route = useRoute()
    //watch(
    //    () => route.query,
    //    (query) => {
    //      console.log(query);
    //    }
    //);
    // 守卫
    //onBeforeRouteLeave((to, from) => {
    //  const answer = window.confirm('是否确定要离开');
    //  if (!answer) {
    //    return false
    //  }
    //})
    return {
    //  backToDash() {
    //    console.log(route.query)
    //    router.push('/')
    //  },
 
    }
  }
}
</script>
 
<style scoped>
 
</style>
 
