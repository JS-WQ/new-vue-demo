<template>
    <div class="box" v-show="visible">
        <div class="box-ct"></div>
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

