<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <el-button type="radio" round value="signUp" v-model="actionType" @click="kkk">注册</el-button>
                <el-button type="radio" round value="login" v-model="actionType"  @click="kkk">登陆</el-button>
                <el-button type="primary" round @click="preview">预览</el-button>
            </div>
        </div>
        <div class="Loginbox">
            <section>
            <div class="login" v-if="actionType == 'login'">
                <div class="loginLeft">
                    <h1>IResumer</h1>
                    <h2>Login</h2>
                    <form>
                        <div class="formRow">
                            <input type="text" placeholder="username">
                        </div>
                        <div class="formRow">
                            <input type="password" placeholder="password">
                        </div>
                        <div class="formActions">
                            <input type="submit" value="Login">
                        </div>
                    </form>
                    <a href="">Forget password ?</a>
                    <div class="toSign">
                        <p>Don't have account ?</p>
                        <a href="">Sign up now</a>
                    </div>
                </div>
                <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg" alt="">
            </div>
            <div class="signUp" v-if="actionType == 'signUp'">
                <div class="signUpLeft">
                    <h1>IResumer</h1>
                    <h2>Sign in</h2>
                    <form>
                        <div class="formRow">
                            <input type="text" placeholder="username">
                        </div>
                        <div class="formRow">
                            <input type="password" placeholder="password">
                        </div>
                        <div class="formActions">
                            <input type="submit" value="Sign in">
                        </div>
                    </form>
                </div>
                <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg">
            </div>
        </section>
        </div>
        
    </div>
    
</template>
<script>
export default {
    props:['actionType'],
    data(){
        return{
           
        }
    },
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        inSign:function(){

        },
        upSign:function(){

        },
        kkk:function(){
            console.log(this.actionType)
        }
    },
    created:function(){
        console.log(this.actionType)
    }
}
</script>

<style lang="scss">
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:#d8d4d4ad;
    }
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
        > .Loginbox{
            background:#283447;
            > section{
            border:1px solid black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 3;
            > .login{
                display: flex;
                background: #283447;
                > .loginLeft{
                    padding-right:30px;
                    padding-left: 30px;
                    text-align: center;
                    color: #ffffff;
                    > h1{
                        margin-top: 50px;
                        font-size: 36px;
                        font-weight: normal;
                    }
                    > h2{
                        font-weight: normal;
                        text-align: left;
                        margin-top: 40px;
                    }
                    > form{
                        margin-top: 20px;
                        > .formRow{
                            margin-top: 15px;
                            > input{
                                border: none;
                                border-bottom: 1px solid #e6e1e180;
                                padding: 5px;
                                outline:none;
                                width: 220px;
                                background: transparent;
                                color: #ffffff;
                            }
                            > input:focus{
                                border-bottom: 1px solid #000;
                            }
                        }
                        > .formActions{
                            margin-top:30px;
                            margin-bottom: 20px;
                            text-align: left;
                            > input{
                                background: #ffffff;
                                padding: 10px 45px;
                                border:none;
                                border-radius: 20px;
                                outline: none;
                                cursor: pointer;
                            }
                        }
                    }
                    > a{
                        color: #d8d4d4ad;
                        text-decoration: none;
                        text-align: left;
                        display: block;
                        
                    }
                    > a:hover{
                        color: #ffffff;
                    }
                    > .toSign{
                        margin-top: 30px;
                        > p{
                            color: #d8d4d4ad;
                            margin-bottom: 5px;
                        }
                        > a{
                            color: #ffffffdb;
                            text-decoration: none;
                            display: block;
                        }
                        > a:hover{
                        color: #ffffff;
                    }
                    }
                }
            }
            > .signUp{
                display: flex;
                background: #283447;
                > .signUpLeft{
                    padding-right:30px;
                    padding-left: 30px;
                    text-align: center;
                    color: #ffffff;
                    > h1{
                        margin-top: 50px;
                        font-size: 36px;
                        font-weight: normal;
                    }
                    > h2{
                        font-weight: normal;
                        text-align: left;
                        margin-top: 40px;
                    }
                    > form{
                        margin-top: 20px;
                        > .formRow{
                            margin-top: 15px;
                            > input{
                                border: none;
                                border-bottom: 1px solid #e6e1e180;
                                padding: 5px;
                                outline:none;
                                width: 220px;
                                background: transparent;
                                color: #ffffff;
                            }
                            > input:focus{
                                border-bottom: 1px solid #000;
                            }
                        }
                        > .formActions{
                            margin-top:30px;
                            margin-bottom: 20px;
                            text-align: left;
                            > input{
                                background: #ffffff;
                                padding: 10px 45px;
                                border:none;
                                border-radius: 20px;
                                outline: none;
                                cursor: pointer;
                            }
                        }
                    }
                    
                }
            }
        }
        }
        
        
    }
</style>
