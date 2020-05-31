<template>
    <div class="swipe">
        <van-swipe  :autoplay="3000" indicator-color="white">
         <van-swipe-item class="SwipeItem" v-for="(item,index) in swipeList" :key="index">
              <router-link to="item.navigator_url" tag="div">
                     <img :src="item.image_src">
                    </router-link>
         </van-swipe-item>
  <!-- <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item> -->
</van-swipe>
    </div>
</template>
<script>
export default {
    props:{
          swipeList:{
              type:Array,
              default(){
                  return []
              }
          }
    }

      

}
</script>
<style scoped lang="less">
.swipe{
    width:100%;
    // height: 200px;
    text-align: center;
    .SwipeItem{
        width: 100%;
        height: 100%;
        background-color: blue;
        color:var(--color-background);
        div{
            height: 100%;
                img{
            width: 100%;
            height: 100%;
        }
        }
       
    }
}
</style>