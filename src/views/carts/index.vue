<template>
    <div class="carts">
       <Header/>
       <!-- 提示登录 -->
        <tl-header class="cart-header">
            <router-link to="/" slot="right">
             <tl-button>去登录 </tl-button>
             <tl-button>></tl-button>
            </router-link>
            <tl-button slot="left">登录后享受更多优惠</tl-button>
        </tl-header>
        <!-- 提示购物 --> 
        <div class="k-carts">
            <div>
                 <span class="mintui mintui-cart" style="font-size:60px;margin-bottom:10px"></span>
                 <p>购物车还是空的，去挑选喜欢的商品吧~</p>
            </div>
            <tl-button type="primary" class="k-carts-button">去逛逛</tl-button>
        </div>
        <!-- <div class="k-carts">

        </div> -->
         <!-- <van-card
                  :price="item1.goods_price+'.00'"
                  :title="item1.goods_name"
                  :thumb="item1.goods_small_logo?item1.goods_small_logo:'http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000147767325_1_400x400.jpg'"
                /> -->
                <div class="show-carts">
   <router-link to="" tag="div" class="cart-border">
                
                <van-card 
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
</router-link> 
</div>
       <Tabbar/>
    </div>
</template>
<script>
import Header from "@/components/commons/home-header.vue";
import Tabbar from "@/components/Tabbar.vue";

export default {
    name:'Carts',
    components:{
        Header,Tabbar
    }
}
</script>
<style lang="less" scoped>
.carts{
    .cart-header{
        background-color: #fff;
        color: var(--color-text);
        border-bottom: solid 1px #eee;
        
    }
    .k-carts{
    padding: 20px;
     text-align: center;
     display: flex;
     flex-direction: column;
     align-items: center;
     .k-carts-button{
         width: 100px;
         height: 30px;
         margin-top: 10px;
     }
    }
    .show-carts{
         padding-left:10px;
         
        background-color: var(--color-background);
       
        .cart-border{
          padding-right:10px;
          padding-top:10px;
          padding-bottom: 10px;
          border-bottom: solid 1px var(--color-border);
           border-top: solid 1px var(--color-border);
        }
    }
}
</style>