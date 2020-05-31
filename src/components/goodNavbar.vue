<template>
    <div>
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
    </div>
</template>
<script>
export default {
    name:'goodNavbar',
    data(){
        return{
            list:[
                {
                    id:0,
                    isActive:true,
                    title:"综合"
                },
                 {
                    id:1,
                     isActive:false,
                    title:"销量"
                },
                 {
                    id:2,
                    isActive:false,
                    title:"价格"
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>

</style>