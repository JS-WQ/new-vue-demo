<template>
  <div id="editor">
      <ol class="nav">
          <li v-for='i in [0,1,2,3,4,5]' v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
              <svg class="icon">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>
          </li>
          
      </ol>
      <ol class="paners">
          <li v-bind:class="{active: currentTab === 0}">tab 1</li>
          <li v-bind:class="{active: currentTab === 1}">tab 2</li>
          <li v-bind:class="{active: currentTab === 2}">tab 3</li>
          <li v-bind:class="{active: currentTab === 3}">tab 4</li>
          <li v-bind:class="{active: currentTab === 4}">tab 5</li>
          <li v-bind:class="{active: currentTab === 5}">tab 6</li>
      </ol>
  </div>
</template>
<script>
export default {
  data(){
      return {
          currentTab:0,
          icons:['shenfenzheng1','gongzuo','xuexi1','xingquaihao','jiangbei','dianhua']
      }
  }
}
</script>

<style lang="scss">
    #editor{
        background-color: #ffffff;
        width: 500px;
        margin-right: 16px;
        margin-left: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        display: flex;
        overflow: hidden;
        > .nav{
            background-color: #000000;
            width: 80px;
            > li{
                > svg{
                    width: 26px;
                    height:26px;
                    fill: #ffffff;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            }
            > li.active{
                background-color: #ffffff;
                > svg{
                    fill: #000;
                }
            }
        }
        > .paners{
            > li{
                display: none;
            }
            > li.active{
                display: block;
            }
        }
    }
</style>
