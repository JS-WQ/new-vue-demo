<template>
  <div id="preview">
      <h1>{{iresum.imx.name}}</h1>
      <h1>{{iresum.imx.city}}</h1>
      <h1>{{iresum.imx.birth}}</h1>
      <h1>{{}}</h1>
      <h1>{{}}</h1>
      <h1>{{}}</h1>
      <h1>{{}}</h1>
      
  </div>
</template>

<script>
export default {
    props:['iresum'],
    methods:{
        filter(array){
            return array.filter(itme=> !this>isEmpty(item))
        },
        isEmpty(object){

        }
    }
}
</script>

<style lang="scss">
    #preview{
        background-color: #ffffff;
        flex: 1;
        margin-right: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
    }
</style>
