<template>
  <div id="editor">
      <ol class="nav">
          <li class="userMessage">
                <svg class="icon">
                    <use xlink:href="#icon-shenfenzheng"></use>
                </svg>
          </li>
          <li class="workExpress">
                <svg class="icon">
                    <use xlink:href="#icon-gongzuo"></use>
                </svg>
          </li>
          <li class="studentExpress">
                <svg class="icon">
                    <use xlink:href="#icon-xuexi1"></use>
                </svg>
          </li>
          <li class="love">
                <svg class="icon">
                    <use xlink:href="#icon-xingquaihao"></use>
                </svg>
          </li>
          <li class="jiangbei">
                <svg class="icon">
                    <use xlink:href="#icon-jiangbei"></use>
                </svg>
          </li>
          <li class="callMe">
                <svg class="icon">
                    <use xlink:href="#icon-dianhua"></use>
                </svg>
          </li>
      </ol>
      <div class="paners"></div>
  </div>
</template>

<style lang="scss">
    #editor{
        background-color: #ffffff;
        width: 500px;
        margin-right: 16px;
        margin-left: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        display: flex;
        > .nav{
            background-color: #000000;
            width: 80px;
            > li{
                > svg{
                    width: 26px;
                    height:26px;
                    fill: #ffffff;
                }
            }
        }
        > .paners{

        }
    }
</style>
