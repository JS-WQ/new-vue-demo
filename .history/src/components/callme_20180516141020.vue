<template>
  <div>
        <h2>联系方式</h2>
        <el-form>
            <div>
                <el-form-item label="手机">
                    <el-input v-model="callme.telephone"></el-input>
                </el-form-item>
                <el-form-item label="QQ ">
                    <el-input v-model="callme.QQ"></el-input>
                </el-form-item>
                <el-form-item label="微信 ">
                    <el-input v-model="callme.WX"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="callme.mail"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="callme.address"></el-input>
                </el-form-item>
            </div>          
        </el-form>
  </div>
</template>
<script>
export default {
  props:['callme']
}

</script>

