<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <span><input type="radio" name="type" v-model="actionType" value="signUp">注册</span>
                <span><input type="radio" name="type" v-model="actionType" value="login">登录</span>
                <el-button type="primary" round @click="preview">预览</el-button>
            </div>
        </div>
                
    </div>
    
</template>
<script>

import signUp from './signUp'
import login from './login'
export default {
    name:'Topbar',
    props:['actionType'],
    data(){
        return{
            formData:{username:'',password:''}           
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
            console.log(this)
        
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
