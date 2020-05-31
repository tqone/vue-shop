<template>
  <div class="main">
    <!-- 轮播图 -->
    <goodSearch :title="title" />

    <div class="container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
        <van-swipe-item v-for="(item,index) in goodsDetail.pics" :key="index">
          <img :src="item.pics_mid" alt />
        </van-swipe-item>
      </van-swipe>

      <div class="content" >
        <h3>￥{{goodsDetail.goods_price}}</h3>
        <div class="good-name">
          <div class="text">
           {{goodsDetail.goods_name}}
          </div>
          <div class="shouchang">
            <span class="mintui mintui-cascades"></span>
            <span>收藏</span>
          </div>
        </div>
      </div>
      <!-- 富文本 -->
      <div class="f-text"> 
        <van-divider 
          :style="{ color: 'var(--color-active)', borderColor: '#ccc', padding: '0 5px' }"
        >图片详情</van-divider>
        <div class="product" v-html="goodsDetail.goods_introduce" >
            <!-- <img v-for="img in goodsDetail.goods_introduce" :key="img" v-lazy="img" /> -->
        </div>
      </div>
      
    </div>
    <footer>
        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon-class="mintui mintui-fenxiang" text="分享" color="#666"/>
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" color="var(--color-active)"/>
        </van-goods-action>
    </footer>
  </div>
</template>
<script>
// 导入商品详情接口
import { getGoodsdetail } from "@/network/goodslist.js";

import goodSearch from "@/components/good-search.vue";
export default {
  data() {
    return {
      //商品详情数据
      goodsDetail: [],
      //商品ID
      goods_id: "",

      title: "商品详情"
    };
  },
  components: {
    goodSearch
  },
  methods: {
    Goodsdetail() {
      this.goods_id = this.$route.query.goods_id;
      console.log(this.$route.query);
      getGoodsdetail(this.goods_id).then(res => {
        console.log(res);
        this.goodsDetail = res.message;
      });
    }
  },
  mounted() {
    // this.goods_id=this.$route.query.goods_id;
    // console.log(this.goods_id)
    this.Goodsdetail();
  }
};
</script>
<style scoped lang="less">
.container {
  margin-top: 42px;
  margin-bottom: 55px;
  .my-swipe {
    padding-top: 10px;
    img {
      height: 100%;
      width: 80%;
      margin: 0 auto;
    }
  }
  .content {
    h3 {
      padding-left: 10px;
      color: var(--color-active);
    }
    .good-name {
      padding-left: 15px;
      display: flex;
      flex-wrap: wrap;
      .text {
        flex: 8;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        border-right: solid 1px #ccc;
      }
      .shouchang {
        flex: 2;
        text-align: center;
        padding: 15px;
        //  display: flex;
        span {
          display: block;
        }
      }
    }
  }
}
</style>
