import {request} from './request'; 

/** 
 * 封装home页面相应的接口
*/

//轮播图
export function getSwipe(){
    return request({
        url:'home/swiperdata'
    })
}

//导航
export function getCatitems(){
    return request({
        url:'home/catitems'
    })
}
//楼层
export function getFloordata(){
  return request({
      url:'home/floordata'
  })
}