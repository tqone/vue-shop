<template>
    <div class="nav-search">

        <van-nav-bar :title="title" left-text="返回" background="red" 
        color="#fff" left-arrow fixed
        @click-left="onClickback"
        @click-right="onClicksearch">
        <template #right>
            <van-icon name="search" size="18" />
        </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    // name:'goodsearch'
data(){
    return{
    }
},
props: ['title'],
methods:{
    // 返回到上一页
onClickback(){
   this.$router.go(-1);
},
//点击搜索
onClicksearch(){
console.log(1)
}

}
}
</script>
<style lang="less" scoped>
// .nav-search{
//     i{
//         color: blanchedalmond;
//     }
//     //  .van-nav-bar{
//     //     // color: var(--color-background);
//     //     // background-color: ;
//     //       background-color: var(--color-active);
//     //     .van-icon{
//     //        color: var(--color-background);
//     //      }
//     //      .van-nav-bar__text{
//     //         color: var(--color-background);
//     //      }
         
//     //      .van-nav-bar__title{
//     //          color:#fff;
//     //      }
//     // }
    
// }
</style>