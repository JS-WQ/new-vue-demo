<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{iMessage}}</h2>
    
    <el-form>
        <el-form-item label="姓名" v-for:"key in keys">
            <el-input v-model="哈哈哈"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
    export default {
        props: ['iMessage','title'],
        computed:{
            keys(){
                return Object.keys(this.usermessage[0])
            }
        }
    }
</script>

