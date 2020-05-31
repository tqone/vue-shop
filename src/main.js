import Vue from 'vue'
import App from './App.vue'

import { Header,Button,Tabbar,TabItem} from 'mint-ui';

import 'mint-ui/lib/style.css';
//字体图标样式文件

//vant ui库
import { 
  Sidebar,SidebarItem,NavBar,Icon,List,Cell,Tab,Tabs,Card,Loading,PullRefresh,Toast,Swipe,SwipeItem,
  Divider,GoodsAction, GoodsActionIcon, GoodsActionButton,Lazyload
} from 'vant';

// import 'vant/lib/index.css';
//按需引入mint ui

import '@/assets/css/base.css';
import '@/assets/css/iconfont.css';
//路由
import router from './router'
//状态管理
import store from './store'
//导入axios
// import axios from 'axios'
/**
 * 一下为mint ui按需导入的相关组件  
*/
//顶部导航
Vue.component('tl-header', Header);
Vue.component('tl-button', Button);
///底部导航选项卡
Vue.component('Tabbar', Tabbar);
Vue.component('TabItem', TabItem);
//轮播图
// Vue.component('Swipe', Swipe);
// Vue.component('SwipeItem', SwipeItem);
//无限滚动

// import { NavBar } from 'vant';
//置顶导航栏
Vue.use(NavBar);
Vue.use(Icon);
//列表
Vue.use(List);
// Cell
Vue.use(Cell);
//tab标签
Vue.use(Tab);
Vue.use(Tabs);
//商品列表信息
Vue.use(Card);
//侧边导航
Vue.use(Sidebar);
Vue.use(SidebarItem);

Vue.use(Loading);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
//分割线
Vue.use(Divider );

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Lazyload)
// Lazyload
// Vue.use(Tab);
// Vue.use(Tabs);
// Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
