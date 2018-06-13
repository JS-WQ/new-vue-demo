<template>
  <div>
      <h2>项目经历</h2>
      <el-form>
            <div v-for="(item,index) in items">
                <el-form-item label="项目名称">
                    <el-input v-model="item.itemName"></el-input>
                </el-form-item>
                <el-form-item label="项目介绍">
                    <el-input v-model="item.itemCont"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removeitem(index)"></i>
                <hr>
            </div>
        <el-button type="primary" v-on:click="additem">新建一个</el-button>
          
      </el-form>
  </div>
</template>
<script>
export default {
  props:["items"],
}
</script>

