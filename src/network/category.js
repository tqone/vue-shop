import {request} from './request'; 

/** 
 * 封装页面相应的接口
*/

//分类接口
export function getCategories(){
    return request({
        url:'categories'
    })
}