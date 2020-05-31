<template>
  <div class="category">
    <Header />
    <div class="container">
      <div class="c-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item" v-for="(item,index) in leftList" :key="index" 
          @click="showList" :class="currentindex==index?'active':''"/>
        </van-sidebar>
      </div>
      <div class="c-right">
        <div class="r-container" v-for="(item) in rightList" :key="item.cat_id">
          <div class="r-title">
            <div class="r-xian"></div>
            <h3>{{item.cat_name}}</h3>
            <div class="r-xian"></div>
          </div>
          <ul>
            <router-link :to="{path:'/goodslist',query:{cid:item1.cat_id}}"  tag="li" v-for="item1 in item.children" :key="item1.cat_id" >
              <img :src="item1.cat_icon" alt />
              <p>{{item1.cat_name}}</p>
            </router-link> 
          </ul>
        </div>
      </div>
    </div>
    <Tabbar />
  </div>
</template>
<script>
import { getCategories } from "@/network/category.js";

import Header from "@/components/commons/home-header.vue";
import Tabbar from "@/components/Tabbar.vue";

export default {
  name: "Category",
  data() {
    return {
      activeKey: 0,
      // isActive: false,
      //分类总数据
      Categories: [],
      //分类左侧数据
      leftList: [],
      //分类右侧数据
      rightList: [],
      //回到顶部
      // scrollTop:0、
      currentindex:''
    };
  },
  methods: {
    // navActive() {
    //   this.isActive = true;
    // },
    showList(e){
      //  console.log(e)
        let index=e;
        //通过索引设置改变当前的颜色
        this.currentindex=index;
        var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
        //实现置顶
        document.querySelector(".c-right").scrollTop=0;
        //通过点击事件 根据索引来显示相应的数据 
       this.rightList= this.Categories[index].children;
    }
  },
  mounted() {
    getCategories().then(res => {
      this.Categories = res.message;
      localStorage.setItem("categorys",res.message);
      //将数据分组拿到需要的数据 左边导航列表
      this.leftList = this.Categories.map(v => v.cat_name);
      //右边数据
      this.rightList = this.Categories[0].children;
      //  console.log(this.leftList)
      
    });
  },
  components: {
    Header,
    Tabbar
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  position: absolute;
    top: 42px;
    left: 0;
    overflow: hidden;
    height: 100%;
    margin-bottom: 55px;
  // 左侧导航栏
  .c-left {
    flex: 2;
    height: 100%;
    overflow-x: hidden;
    .van-sidebar {
      width:100%;
      .van-sidebar-item {
        padding: 10px 0;
        background-color: #f6f6f6;
        text-align: center;
      }
      .van-sidebar-item--select::before {
        background-color: var(--color-active);
      }
      .active{
        color:var(--color-active);
      }
    }
  }
  // 右侧内容、
  .c-right {
     flex: 8;  
     height: 100%;
     overflow-x: hidden;
    .r-container {
      .r-title {
        padding: 10px 0;
        justify-content: center;
        display: flex;
        align-items: center;
        .r-xian {
          height: 1px;
          width: 15px;
          background-color: #eee;
        }
        h3 {
          margin: 0px 20px;
          font-weight: normal;
          color: var(--color-text);
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 5px 10px;
          width: 33.3%;
          text-align: center;

          img {
            width: 100%;
            height: 50px;

            margin-bottom: 5px;
          }
        }
      }
    }
  }
}


</style>