<template>
  <div id="topbar">
      <div class="logo">Resumer</div>
      <div class="actions">
          <el-button type="primary" round>注册</el-button>
          <el-button type="primary" round>登陆</el-button>
          <el-button type="primary" round @click="preview">预览</el-button>
      </div>
  </div>
</template>
<script>
export default {
    methods:{
        preview:function(){
            
        }
    }
}
</script>

<style lang="scss">
    #topbar{
        background-color: #ffffff;
        height: 92px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 24px;
        padding-right: 24px;      
        box-shadow: 0px 3px 5px #3333339c;  
    }
</style>
