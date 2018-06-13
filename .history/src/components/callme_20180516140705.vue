<template>
  <div>
        <h2>联系方式</h2>
        <el-form>
            <div v-for="message in callme">
                <el-form-item label="手机">
                    <el-input v-model="message.telephone"></el-input>
                </el-form-item>
                <el-form-item label="QQ ">
                    <el-input v-model="message.QQ"></el-input>
                </el-form-item>
                <el-form-item label="微信 ">
                    <el-input v-model="message.WX"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="message.mail"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="message.address"></el-input>
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

