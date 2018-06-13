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
    //props: ['iresum.imx','iresum.workExpress','iresum.studyExpress','iresum.itemsdemo','iresum.prizes','iresum.callme']
    props:['iresum']
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
