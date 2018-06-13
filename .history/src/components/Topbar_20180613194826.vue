<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <div v-if="inlogined" class="userActions">
                    <span>你好,{{user.username}}</span>
                    <a class="button"href="#">退出</a>
                </div>
                <div v-else class="userActions">
                    <a class="button primary" href="#" @click.prevent="signUpVisi = true">注册</a>
                    <loginSignBox :visible="signUpVisi" @close="signUpVisi = false">
                        <signUp @success="login($event)" v-bind:signUpVisi="signUpVisi"/>
                    </loginSignBox>
                    <a class="button" href="#" @click.prevent="loginVisi = true">登录</a>
                    <loginSignBox :visible="loginVisi" @close="loginVisi = false">
                        <login @success="login($event)" v-bind:loginVisi="loginVisi" v-bind:iresum="iresum" v-bind:inlogined="inlogined" v-bind:username="username"/>
                    </loginSignBox>
                </div>
                <el-button type="primary" round @click="preview">预览</el-button>
                <el-button type="primary" round @click="ResumFolder">保存</el-button>                
                <el-button type="primary" round @click="leaveResum">退出</el-button>                

            </div>
        </div>
                
    </div>
    
</template>
<script>

import signUp from './signUp'
import login from './login'
import loginSignBox from './loginSignBox'
import AV from '../lib/leancloud'


export default {
    name:'Topbar',
    data(){
        return{
            signUpVisi:false,
            loginVisi:false,
            inlogined:false,
            username:''
        }
    },
    props:['iresum'],
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        ResumFolder:function(){
            var IRusmer = AV.Object.extend('IRusmer')
            var irusmer = new IRusmer

            //权限设置 登录账号拥有读写权力
            var acl = new AV.ACL()
            acl.setPublicReadAccess(false)
            acl.setPublicWriteAccess(false)
            acl.setReadAccess(AV.User.current(), true)
            acl.setWriteAccess(AV.User.current(), true)
            irusmer.setACL(acl)
            irusmer.set('imx',this.iresum.imx)
            irusmer.set('workExpress',this.iresum.workExpress)
            irusmer.set('studyExpress',this.iresum.studyExpress)
            irusmer.set('itemsdemo',this.iresum.itemsdemo)
            irusmer.set('prizes',this.iresum.prizes)
            irusmer.set('callme',this.iresum.callme)
            irusmer.save()
        },
        leaveResum:function(){
            AV.User.logOut()
            this.logined = false
            var currentUser = AV.User.current()
        }
    },
    computed:{
    },
    components:{loginSignBox,signUp,login},
    created:function(){
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
    }
</style>
