<template>
    <div>
        <h2>学习经历</h2>
        <el-form>
            <div v-for="(study,index) in studyExpress">
                <el-form-item label="学校">
                    <el-input v-model="study.schoolName"></el-input>
                </el-form-item>
                <el-form-item label="在校时间">
                    <el-input v-model="study.onlineSchool"></el-input>
                </el-form-item>
                <el-form-item label="学位">
                    <el-input v-model="study.degree"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removestudyExpress(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="addstudyExpress">新建一个</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    props:['studyExpress'],
    methods:{
        removestudyExpress(index){
            this.studyExpress.splice(index,1)
        },
        addstudyExpress(){
            this.studyExpress.push({
                schoolName:'',onlineSchool:'',degree:''
            })
        }
    }
}
</script>

