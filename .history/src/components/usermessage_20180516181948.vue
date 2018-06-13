<template>
  <div>
    <h2>{{title}}</h2>
    <!-- <el-form>
        <el-form-item label="姓名" >
            <el-input v-model=""></el-input>
        </el-form-item>
    </el-form> -->
  </div>
</template>
<script>
    export default {
        props: ['iMessage','title'],
        computed:{
            keys(){
                console.log(this.iMessage[0])
                //return Object.keys(this.usermessage[0])
            }
        }
    }
</script>

