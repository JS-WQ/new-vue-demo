<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <div v-if="logined" class="userActions">
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
                        <login @success="login($event)" v-bind:loginVisi="loginVisi"/>
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
            logined:false,
        }
    },
    props:['iresum'],
    methods:{
        preview:function(){
            document.querySelector('#app').setAttribute('class','onpreview')
        },
        ResumFolder:function(){
            var IRusm = AV.Object.extend('IRusmer')

            //权限设置 登录账号拥有读写权力
            var acl = new AV.ACL()
            acl.setPublicReadAccess(false)
            acl.setPublicWriteAccess(false)
            acl.setReadAccess(AV.User.current(), true)
            acl.setWriteAccess(AV.User.current(), true)
            
            IRusm.setACL(acl)
            
            //iresum.map(iRusm.set)

             var query = new AV.Query('IRusm')
             query.get('5b1fd235a22b9d003a4a6263').then(function(Mess){
                 console.log(Mess.toJSON())
             })
        },
        leaveResum:function(){
            AV.User.logOut()
            var currentUser = AV.User.current();

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
