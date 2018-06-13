<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
        <el-form-item v-for="key in keys" v-bind:label="labels[key] || key">
            <el-input v-model="iMessage[key]">{{iMessage}}</el-input> 
        </el-form-item>
    </el-form> 
  </div>
</template>
<script>
    export default {
        props: ['iMessage','title','labels'],
        computed:{
            keys(){
                return Object.keys(this.iMessage)
            }
        }
    }
</script>

