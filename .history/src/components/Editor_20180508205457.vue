<template>
  <div id="editor">
      <ol>
          <li class="userMessage">
                <svg class="icon">
                    <use xlink:href="#icon-credentials_icon"></use>
                </svg>
          </li>
          <li class="workExpress">
                <svg class="icon">
                    <use xlink:href="#icon-gongzuo"></use>
                </svg>
          </li>
          <li class="studentExpress">
                <svg class="icon">
                    <use xlink:href="#icon-xuexi"></use>
                </svg>
          </li>
          <li class="love">
                <svg class="icon">
                    <use xlink:href="#icon-aihao"></use>
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
        > ol{
            > li{
                > svg{
                    width: 65px;
                    height:65px;
                }
            }
        }
    }
</style>
