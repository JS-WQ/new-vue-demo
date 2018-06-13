<template>
  <div>
    <h2>{{this.usermessage[0]}}}</h2>
    <el-form>
        <el-form-item label="姓名">
            <el-input v-model="UserMessage.name"></el-input>
        </el-form-item>
        <el-form-item label="城市">
            <el-input v-model="UserMessage.city"></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
            <el-input v-model="UserMessage.birth"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
    export default {
        props: ['usermessage','title'],
        computed:{
            keys(){
                return Object.keys(this.usermessage[0])
            }
        }
    }
</script>

