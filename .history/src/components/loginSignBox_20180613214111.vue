<template>
    <div class="box" v-show="visible">
        <div class="box-ct">
            <header>
                <span @click="close">X</span>
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
    }
</style>

