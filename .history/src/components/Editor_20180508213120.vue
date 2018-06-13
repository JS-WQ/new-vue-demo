<template>
  <div id="editor">
      <ol class="nav">
          <li v-bind:class="">
                <svg class="icon">
                    <use xlink:href="#icon-shenfenzheng1"></use>
                </svg>
          </li>
          <li>
                <svg class="icon">
                    <use xlink:href="#icon-gongzuo"></use>
                </svg>
          </li>
          <li>
                <svg class="icon">
                    <use xlink:href="#icon-xuexi1"></use>
                </svg>
          </li>
          <li>
                <svg class="icon">
                    <use xlink:href="#icon-xingquaihao"></use>
                </svg>
          </li>
          <li>
                <svg class="icon">
                    <use xlink:href="#icon-jiangbei"></use>
                </svg>
          </li>
          <li>
                <svg class="icon">
                    <use xlink:href="#icon-dianhua"></use>
                </svg>
          </li>
      </ol>
      <div class="paners"></div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          currentTab:0
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
                    fill: #ffffff;
                }
            }
        }
        > .paners{

        }
    }
</style>
