import { getGoodslist } from "../../network/goodslist";

export default{
    name:'goodslist',
    path:'/goodslist',
    component:()=>import('@/views/goodslist'),

}