<template>
    <div>
        <h2>学习经历</h2>
        <div>
            <div>
                <el-form-item label="学校">
                    <el-input v-model="work.company"></el-input>
                </el-form-item>
                <el-form-item label="在校时间">
                    <el-input v-model="work.content"></el-input>
                </el-form-item>
                <el-form-item label="学位">
                    <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removeworkExpress(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="addworkExpress">新建一个</el-button>
        </div>
    </div>
</template>
<script>
export default {
    props:['studyExpress'],

}
</script>

