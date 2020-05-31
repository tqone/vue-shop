<template>
  <div class="home">
    <!-- 顶部导航 -->
    <div class="header">
      <Header />
    </div>
    <!-- 内容部分 -->
    <div class="container">
      <!-- //轮播图 -->
      <Swipe :swipeList="swipeList"></Swipe>
      <!-- 分类导航 -->
      <div class="h-nav">
          <ul>
              <router-link to="" tag="li" v-for="(item,index) in Catitems" :key="index">
                <img :src="item.image_src">
              </router-link>
          </ul>
      </div>
      <!-- 内容导航 -->
      <div class="h-content" v-for="(item1,index1) in Floordata" :key="index1">
        <div class="content-title">
          <img :src="item1.floor_title.image_src"/>
        </div>
        <div class="content-img"  v-if="item1.product_list.length>0">
           <div class="img-left">
              <router-link to="/" tag="div">
                  <img :src="item1.product_list[0].image_src"/>
              </router-link>
          </div>
           <div class="img-right">
               <div v-for="(item3,index3) in item1.product_list" 
               :key="item3.cat_id"  class="img-right-s">
                   <router-link  to="/" tag="div" v-show="index3>0">
                    <img :src="item3.image_src"/>
                  </router-link>
               </div>
             
           </div>
        </div>
      </div>
    </div>
    <!-- 底部导航 -->
    <div class="footer">
      <Tabbar />
    </div>
  </div>
</template>
<script>
// 导入封装好的借口请求
import {getSwipe,getCatitems,getFloordata} from '@/network/home.js'

// 公共组件
import Header from "@/components/commons/home-header.vue";
import Tabbar from "@/components/Tabbar.vue";
import Swipe from "@/components/Swipe.vue";
import { log } from 'util';
export default {
  name:'Home',
  components: {
    Header,
    Tabbar,
    Swipe
  },
 data(){
   return{
     //轮播图数据
     swipeList:[],
    //导航数据
     Catitems:[],
     //楼层数据
     Floordata:[],
    //  floor_title:{},
    //  product_list:[]
    // productLIst:[]

   }
 },
 created(){
    //发生轮播图请求
    getSwipe().then((res)=>{
        this.swipeList=res.message;
          // console.log( this.swipeList)
    })
  //发生导航请求
    getCatitems().then(res=>{
      this.Catitems=res.message;
    })
     //发生商品楼层请求
    getFloordata().then(res=>{
      this.Floordata=res.message;
        // this.floor_title=res.message.floor_title;
        // this.product_list=res.message.floor_title;
        console.log(res.message);
        // this.productLIst=res.message.product_list;
    })

    // this.evenproductLIst();
 },
 computed:{
   evenproductLIst:function(){
    
   return this.productLIst.filter(function(item,index,array){
       return item>0;
    })
   }
 },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    //  border:solid 1px  black;
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 42px;
    left: 0;
    overflow-x:hidden;
    margin-bottom: 55px;
    .h-content {
      margin-top: 10px;
      .content-title{
        img{
          height: 25px;
        }
      }
      .content-img {
         display: flex;
         margin-top: 5px;
      .img-left {
        flex:4;
        //  border:solid 1px blue;
        img{
          height: 222px;
          width: 100%;
           border-radius: 5px;
        }
      }
      .img-right{
        flex:8;
        display: flex;
        flex-wrap: wrap;
        .img-right-s{
            width:50%;
            padding-left: 2px;
            // margin-top: 2px;
            padding-bottom:2px;
            img{
            border-radius: 5px;
            width:100%;
            height: 110px;
            // margin-left: 2px;
          }
          &:first-child{
              display: none;
          }
          &:nth-child(2n){
          //  margin-left: 0px;
            // margin-top: 2px;
       }

        }
      }
      //  border:solid 1px blue;
        
      //   width: 50%;
      //   // flex-wrap: wrap;
      //       img {
      //     // display: inline-block;
      //     flex: 1;
      //     width: 100%;
      //     height: 145px;
      //     border-radius: 5px;
      // //   }
      //   & :nth-child(n){
      //     margin-right: 2px;
      //   }
        
      
    }
  }
    .h-nav{
    //  margin-top: 10px;
        ul{
            display: flex;
             text-align: center;
              li{
                  width: 25%;
                  flex: 1;
                  // height:80px;
                  padding: 10px;
                 
                 img{
                     width: 100%;
                    //  height: 80%;
                     border-radius: 5px;
                     margin: 0 auto;
                  
                 }
              }
        }

    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 99;
  }
}
</style>
