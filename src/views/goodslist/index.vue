<template>
  <div class="goodslist">
    <!-- <router-view></router-view> -->
    <!-- 列表导航栏 -->
    <goodSearch :title="title"/>
   
    <!-- tab标签 -->
    <div class="container">
      <!-- <van-tabs v-model="active" class="tab-list"> -->
      <van-tabs v-model="active" class="tab-list">
        <van-tab :title="item" v-for="(item) in tablist" :key="item">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              
              :finished="finished"
              :immediate-check="false"
              success-text="刷新成功"
              finished-text="没有更多了"
              @load="onLoad"
              :offset="10"
            >
              <van-cell v-for="item1 in goodsList" :key="item1.goods_id">
                <!-- :desc="描述信息" -->
                <router-link :to="{path:'/goodetail',query:{ goods_id:item1.goods_id}}" tag="div">

                <van-card
                  :price="item1.goods_price+'.00'"
                  :title="item1.goods_name"
                  :thumb="item1.goods_small_logo?item1.goods_small_logo:'http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000147767325_1_400x400.jpg'"
                />
                </router-link>
                
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </van-tab>
       
      </van-tabs>
      <!-- 内容列表 -->
      <!-- <div></div> -->
     
    </div>
     <!-- <keep-alive>
        <router-view></router-view>
     </keep-alive> -->
  </div>
</template>
<script>

// import axios from "axios";
//商品列表请求
import { getGoodslist } from "@/network/goodslist";


//  Vue.prototype.$http=axios
//导入公共组件
import goodSearch from "@/components/good-search.vue";
// import goodNavbar from '@/components/goodNavbar.vue';

export default {
  name: "goodslist",
  data() {
    return {
      tablist: ["综合", "销量", "价格"],
      list: ["综合", "销量", "价格"],
      active: 0,
      loading: false,
      finished: false,
      isLoading: false,
      //商品列表数据
      goodsList: [],
      data1: "",
      Counts: {
        query: "",
        // cid:this.$route.params.cid,
        cid: "",
        pagenum: 1,
        pagesize: 10,
        
      },
      //总条数
      total: 1,
    
      title:'商品列表'
    };
  },
  methods: {
    //上拉加载
    onLoad() {
      console.log("加载");
      // clearTimeout(this.timerId);
      this.Counts.pagenum++;
     console.log( this.Counts.pagenum)
      // 请求接口数据
       this.Counts.cid = this.$route.query.cid;
      getGoodslist(
        this.Counts.cid,
        this.Counts.pagenum,
        this.Counts.pagesize
      ).then(res => {
        //得到数据总条数
        this.total = res.message.total;
        //数据赋值
        this.data1 = res.message.goods;
        //将每天数据添加到goodsList中
        // this.data1.forEach(v => {
        //   this.goodsList.push(v);
        // });
        this.goodsList=this.goodsList.concat(this.data1)

        console.log(this.total);
      });
      // 加载状态结束
      this.loading = false;
     
    
      //数据加载完成
      if (this.goodsList.length >= this.total) {
        this.finished = true;
      }
    },
    // 下拉刷新
    onRefresh() {
      // 继续加载数据
      this.finished = false;
      //页码设置为1
      this.Counts.pagenum = 1;
  
      this.loading=true;
      //重新发送请求
      this.getgoods();
    },
    // 列表分页请求
    getgoods() {
       this.Counts.cid = this.$route.query.cid;
      getGoodslist(
        this.Counts.cid,
        this.Counts.pagenum,
        this.Counts.pagesize
      ).then(res => {
        //得到数据总条数
        this.total = res.message.total;
        //数据赋值goodsList
        this.goodsList = res.message.goods;
        
        this.isLoading = false;
        console.log(this.total);
        console.log(res.message.pagenum)
        //数据加载完成
        if (this.goodsList.length >= this.total) {
          this.finished = true;
        }
      });

    }
  },
  components: {
    goodSearch
    // goodNavbar
  },
  mounted() {
    // console.log(this.$route.query.cid);
    // this.Counts.cid = this.$route.query.cid;
  },
  created() {
    // this.Counts.cid = this.$route.query.cid;
   
    this.getgoods();
  }
};
</script>
<style lang="less" scoped>
.goodslist {
  position: relative;
  .container {
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    // bottom: 55px;
    .tab-list {
      width: 100%;
    }
  }
}
</style>