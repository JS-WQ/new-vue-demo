<template>
  <div>
        <h2>联系方式</h2>
        <el-form>
            <div v-for="(prize,index) in prizes">
                <el-form-item label="手机">
                    <el-input v-model="prize.prizeTime"></el-input>
                </el-form-item>
                <el-form-item label="QQ ">
                    <el-input v-model="prize.prizeCont"></el-input>
                </el-form-item>
                <el-form-item label="微信 ">
                    <el-input v-model="prize.prizeCont"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="prize.prizeCont"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="prize.prizeCont"></el-input>
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

