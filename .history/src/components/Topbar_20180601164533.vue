<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <el-button type="primary" round value="signUp" v-model="actionType">注册</el-button>
                <el-button type="primary" round value="login" v-model="actionType">登陆</el-button>
                <el-button type="primary" round @click="preview">预览</el-button>
            </div>
        </div>
        <section>
            <div class="signUp" v-if="actionType == 'signUp'">
                <div class="signLeft">
                    <h1>IResumer</h1>
                    <h2>Sign in</h2>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                
                <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg" alt="">
            </div>
            <div class="login" v-if="actionType == 'login'">
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
    props:['actionType'],
    data(){
        return{
            form: {
                name: '',
                password: '',
            }
        }
    },
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        inSign:function(){

        },
        upSign:function(){

        }
    },
    created:function(){
        console.log(this.actionType)
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
            border:1px solid black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            > .signUp{
                display: flex;
                > .signLeft{
                    padding-right:30px;
                    padding-left: 30px;
                    text-align: center;
                    > h1{
                        margin-top: 40px;
                        font-size: 36px;
                        font-weight: normal;
                    }
                }
            }
        }
        
    }
</style>
