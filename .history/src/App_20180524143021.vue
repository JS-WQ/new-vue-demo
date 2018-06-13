<template>
  <div id="app">
    <Topbar/>
    <main>
      <Editor v-bind:iresum="iresum"/>
      <Preview v-bind:iresum="iresum"/>
    </main>
    
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'


export default {
  name: 'App',
  data() {
    return {
        iresum:{
          imx: {
            name: '',
            city: '',
            birth: '',
            worktime:''
          },
          workExpress: [
              {company:'',content:''}
          ],
          studyExpress: [
              {schoolName:'',onlineSchool:'',degree:''}
          ],
          itemsdemo:[
              {itemName:'',itemCont:""}
          ],
          prizes:[
              {prizeTime:'',prizeCont:''}
          ],
          callme:{
              telephone:'',
              QQ:'',
              weixin:'',
              mail:'',
              address:''
          } 
      }
      
    }
  },
  components: {
    Topbar,
    Editor,
    Preview
  }
}
</script>

<style lang="scss">
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  > main{
    display: flex;
    height: 100vh;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #afacac24;
  }
}
</style>
