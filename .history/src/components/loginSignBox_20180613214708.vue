<template>
    <div class="box" v-show="visible">
        <div class="box-ct">
            <header>
                <i class="el-icon-error" @click="close"></i>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>
<script>
export default {
    name:'loginSignBox',
    props:['visible'],
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss">
    .box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 3;
        > .box-ct{
            > .el-icon-error:before{
                font-size: 28px;
            }
        }
    }
</style>

