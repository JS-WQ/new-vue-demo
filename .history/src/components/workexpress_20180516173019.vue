<template>
  <div>
    <h2>工作经历</h2>
        <el-form>
            <div v-for="(work,index) in workExpress">
                <el-form-item v-for="key in keys" v-bind:label="labels[key] || key">
                    <el-input v-model="work[key]"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removeworkExpress(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="addworkExpress">添加工作经历</el-button>
        </el-form>
  </div>
</template>
<script>
export default {
    props:['workExpress','labels'],
    computed:{
        keys(){
            return Object.keys(this.workExpress[0])
        }
    },
    methods:{
        addworkExpress(){
            console.log(this)
            // const arr = {}
            // console.log(this.keys())
            // this.keys().map((key)=>{
            //     arr[key] = ''
            // })
            this.workExpress.push(arr)
            
        },
        removeworkExpress(index){
            this.workExpress.splice(index,1)
        }
    }
}
</script>

