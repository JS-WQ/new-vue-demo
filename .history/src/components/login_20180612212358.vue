<template>
    <div class="login">
        <div class="loginLeft">
            <h1>IResumer</h1>
            <h2>Login</h2>
            <form @submit.prevent=login>
                <div class="formRow">
                    <input type="text" placeholder="username" v-model="formData.username">
                </div>
                <div class="formRow">
                    <input type="password" placeholder="password" v-model="formData.password">
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
        <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg">
    </div>
</template>
<script>
import AV from '../lib/leancloud'
export default {
    name:'login',
    props:['loginVisi'],
    data(){
        return {
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login: function () {
            AV.User.logIn(this.formData.username, this.formData.password).then(function (User) {
                var query = new AV.Query('IRusm')
                console.log(query)
                query.get(User.id).then(function(mess){
                    console.log('hhh')
                    console.log(mess.toJSON())
                })
                }, function (error) {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="scss">
    .login{
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
                    text-align: center;
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
</style>
