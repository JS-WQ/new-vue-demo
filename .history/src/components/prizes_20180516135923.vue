<template>
  <div>
        <h2>获奖情况</h2>
        <el-form>
            <div v-for="(prize,index) in prizes">
                <el-form-item label="获奖时间">
                    <el-input v-model="prize.prizeTime"></el-input>
                </el-form-item>
                <el-form-item label="获奖经历">
                    <el-input v-model="prize.prizeCont"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removeprize(index)"></i>
                <hr>
            </div>
        <el-button type="primary" v-on:click="addprize">新建一个</el-button>
          
        </el-form>
  </div>
</template>
<script>
export default {
  props:['prizes'],
  methods:{
        removeprize(index){
            this.prizes.splice(index,1)
        },
        addprize(){
            this.prizes.push({
                prizeTime:'',prizeCont:''
            })
        }
  }
}
</script>

