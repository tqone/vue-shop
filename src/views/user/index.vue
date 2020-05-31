<template>
  <div class="user">
    <div class="u-container">
      <!-- 登录按钮 -->
      <div class="u-login">
        <div class="login-logo">
          <span class="mintui mintui-wode"></span>
        </div>
        <a href>登录/</a>
        <a href>注册</a>
      </div>
      <tl-header class="dd-header">
        <tl-button slot="right" class="word">全部订单</tl-button>
        <tl-button icon="cart" slot="right" class="word"></tl-button>
        <tl-button slot="left">我的订单</tl-button>
      </tl-header>
      <!-- 用户中心分类导航21-->
      <div class="u-nav">
        <ul>
          <li>
            <span>0</span>
            <span>收藏的店铺</span>
          </li>
          <li>
            <span>0</span>
            <span>收藏的商品</span>
          </li>
          <li>
            <span>0</span>
            <span>关注的商品</span>
          </li>
          <li>
            <span>0</span>
            <span>我的足迹</span>
          </li>
        </ul>
      </div>
      <!-- 用户中心分类导航2 -->
      <div class="u-nav_1">
        <div class="u-nav">
          <ul>
            <li>
              <span class="mintui mintui-youhuiquan"></span>
              <span>优惠卷</span>
            </li>
            <li>
              <span class="mintui mintui-deliver"></span>
              <span>可用额度</span>
            </li>
            <li>
              <span class="mintui mintui-lipinqia"></span>
              <span>礼品卡</span>
            </li>
            <li>
              <span class="mintui mintui-vipcard"></span>
              <span>我的钱包</span>
            </li>
          </ul>
        </div>
        <!-- 用户中心轮播图 -->
        <Swipe />
        <!-- 用户中心分类导航列表3 -->
        <div class="u-nav_2">
          <ul>
            <li>
              <span class="mintui mintui-dianzan"></span>
              <span>乐天会员</span>
              <span class="mintui mintui-dianzan"></span>
            </li>
            <li>
              <span class="mintui mintui-dianzan"></span>
              <span>乐天会员</span>
              <span class="mintui mintui-dianzan"></span>
            </li>
            <li>
              <span class="mintui mintui-dianzan"></span>
              <span>乐天会员</span>
              <span class="mintui mintui-dianzan"></span>
            </li>
             <li>
              <span class="mintui mintui-dianzan"></span>
              <span>乐天会员</span>
              <span class="mintui mintui-dianzan"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Tabbar />
  </div>
</template>
<script>
// import Header from "@/components/commons/home-header.vue";
import Tabbar from "@/components/Tabbar.vue";
import Swipe from "@/components/Swipe.vue";
export default {
  name: "User",
  components: {
    Tabbar,
    Swipe
  }
};
</script>
<style scoped lang="less">
.user {
  background-color: #eee;
  .u-container {
    .u-login {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: var(--color-active);
      .login-logo {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        // background-color:burlywood;
        background-color: #ff5500;
        border: solid 1px #fff;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 20px;
          color: var(--color-background);
        }
      }
      a {
        color: var(--color-background);
      }
    }
    .dd-header {
      background-color: var(--color-background);
      border-bottom: 1px solid var(--color-border);
      color: var(--coolo-text);
      .word {
        color: #666;
        font-size: 12px;
      }
    }
    .u-nav {
      ul {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          flex: 1;
          flex-wrap: wrap;
          display: flex;
          flex-direction: column;
          border: solid 1px var(--color-border);
          text-align: center;
          padding: 10px 0;
          span:first-child {
            color: var(--color-active);
          }
        }
      }
    }
    .u-nav_1 {
      margin-top: 10px;
    }
    .u-nav_2 {
      ul {
       
        li {
             background-color: #fff;
          border-bottom: solid 1px #eee;
          display: flex;
          padding: 10px;
          span:nth-child(2) {
            flex: 1;
            padding-left: 10px;
          }
        }
        &:last-child{
        margin-top: 10px;
        }
      }
    }
  }
}
</style>