<template>
  <div id="topbar">
      <div class="logo">IResumer</div>
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
            this.onpreview = true
        }
    }
}
</script>

<style lang="scss">
    .onpreview > #topbar{display: none;}
    #topbar{
        background-color: #ffffff;
        height: 92px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 24px;
        padding-right: 24px;      
        box-shadow: 0px 3px 5px #3333339c;  
        > .logo{
            font-size: 38px;
            font-weight: 400;
        }
    }
</style>
