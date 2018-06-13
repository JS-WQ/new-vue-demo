<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <a class="button primary" href="#" @click.prevent="signUpVisi = true">注册</a>
                <loginSignBox :visible="signUpVisi" @close="signUpVisi = false">
                    <signUp />
                </loginSignBox>
                <!-- <a class="button" href="#" @click.prevent="loginVisi = true">登录</a>
                <section :visible="loginVisi" @close="loginVisi = false">
                    <login />
                </section> -->
                <el-button type="primary" round @click="preview">预览</el-button>
                <el-button type="primary" round @click="preview">保存</el-button>                
            </div>
        </div>
                
    </div>
    
</template>
<script>

import signUp from './signUp'
import loginSignBox from './loginSignBox'
// import login from './login'
export default {
    name:'Topbar',
    data(){
        return{
            signUpVisi:false,
            // loginVisi:false
        }
    },
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        }
        
    },
    components:{loginSignBox},

    created:function(){
        console.log(this.signUpVisi)
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
