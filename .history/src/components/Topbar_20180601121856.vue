<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <el-button type="primary" round value="signUp">注册</el-button>
                <el-button type="primary" round value="login">登陆</el-button>
                <el-button type="primary" round @click="preview">预览</el-button>
            </div>
        </div>
        <section>
            <div class="signUp">
                <form>
                    <div class="formRow">
                        用户名<input type="text">
                    </div>
                    <div class="formRow">
                        密码<input type="password">
                    </div>
                    <div class="formActions">
                        <input type="submit" value="注册">
                    </div>
                </form>
            </div>
            <div class="login" style="display:none;">
                <form>
                    <div class="formRow">
                    用户名<input type="text">
                    </div>
                    <div class="formRow">
                    密码<input type="password">
                    </div>
                    <div class="formActions">
                    <input type="submit" value="登入">
                    </div>
                </form>
            </div>
        </section>
    </div>
    
</template>
<script>
export default {
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        inSign:function(){

        },
        upSign:function(){

        }
    }
}
</script>

<style lang="scss">
    .onpreview > #topbar{display: none;}
    #topbar{
        background-color: #ffffff;
        box-shadow: 0px 3px 5px #3333339c;  
        > .topNav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:30px 24px;  
            > .logo{
                font-size: 38px;
                font-weight: 400;
            }   
        }
        > section{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        
    }
</style>
