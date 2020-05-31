<template>
    <div class="h-header">
        <div class="h-left">
         乐天
        </div>
        <div class="h-center">
            <input type="text" placeholder="请输入商品">
        </div>
        <div class="h-right">
              <span class="mintui mintui-rili"></span>
              <span class="mintui mintui-message_light"></span>
        </div>
    </div>
</template>
<script>
export default {
    components:{
    }
}
</script>
<style lang="less" scoped>
    .h-header{
        width: 100%;
        display: flex;
        height: 42px;
        font-size: 16px;
        background-color:#e42f14;
        align-items: center;
        // justify-content: center;
        padding: 0 10px;
        position: fixed;
        z-index: 99;
        .h-left{
         color: #fff;
         font-weight: 700;
        }
        .h-center{
            flex: 1;
            padding:0 15px;
            input{
             padding:5px 0;
             padding-left: 10px;
             border-radius: 20px;
             width:100%;
            //  width:
            }
        }
        .h-right{
         span{
            // display: block;
            color:#fff;
            font-size: 25px;
         }
        & span:first-child{
             padding-right: 10px;
         }
        }
    }
</style>
