// 引入加载 UI组件
import {Indicator } from 'mint-ui'
// 引入axios
import axios from 'axios'

export function request(config){
  //自定义axios
    const instance = axios.create({
        baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1/',
        timeout :2000
      });
    // 添加拦截器
      instance.interceptors.request.use( (config)=> {
        // 在发送请求之前做些什么
        //开启加载动画
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
        return config;
      },(error) =>{
        // 对请求错误做些什么
        console.log(error)
      });

      //添加响应拦截器
    instance.interceptors.response.use((res)=>{
        // 关闭加载动画
        Indicator.close();

    console.log(111)
        return res.data
    },(err)=>{
        console.log(err)
    });

     //3、发送真正的网络请求
     return instance(config); //返回一个Promise
      // Alter defaults after instance has been created
    //   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
      
}

