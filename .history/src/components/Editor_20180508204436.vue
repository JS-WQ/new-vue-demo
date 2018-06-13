<template>
  <div id="editor">
      <ol>
          <li class="userMessage">
                <svg class="icon">
                    <use xlink:href="#icon-credentials_icon"></use>
                </svg>
          </li>
          <li class=""></li>
          <li class=""></li>
          <li class=""></li>
          <li class=""></li>
          <li class=""></li>
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
                    width: 50px;
                    height:50px;
                }
            }
        }
    }
</style>
