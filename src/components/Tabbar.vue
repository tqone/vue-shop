<template>
  <div>
  <div class="one"></div>
    <Tabbar fixed>
      <router-link to="/home"  id="tabbar-item" tag="li" >
        <TabItem id="首页">
          <img slot="icon" src="@/assets/icons/home.png" />
          首页
        </TabItem>
      </router-link>
      <router-link to="/category"  id="tabbar-item" tag="li" >
        <TabItem id="分类">
          <img slot="icon" src="@/assets/icons/category.png" />
          分类
        </TabItem>
      </router-link>
      <router-link to="/carts" id="tabbar-item" tag="li">
        <TabItem id="购物车">
          <img slot="icon" src="@/assets/icons/cart.png" />
          购物车
        </TabItem>
      </router-link>
      <router-link to="/user"  id="tabbar-item" tag="li">
        <TabItem id="我的">
          <img slot="icon" src="@/assets/icons/my.png" />
          我的
        </TabItem>
      </router-link>
    </Tabbar>
  </div>
</template>
<style  lang="less" scoped>
// .tabbar-item
// 
// //   // width: 100%;
// //   // height: 100%;
// //   // z-index: 100;
//     width: 100%;
    
// 
 #tabbar-item{
     width: 100%;
}

#tabbar-item.router-link-active{
    color: red;
  }
</style>