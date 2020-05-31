
import {request} from './request';

export function getGoodslist(cid,pagenum,pagesize){

    return request({
        url:'goods/search',
        params:{
          cid,
          pagenum,
          pagesize
        }
    })
}
// 商品详情
export function getGoodsdetail(goods_id){

   return request({
    url:'goods/detail',
    params:{
      goods_id
    }
   })

}