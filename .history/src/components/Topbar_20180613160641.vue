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

            irusmer.save().then(function(mess){
                var objectId = mess.id
            })

            var test = new AV.Query('IRusmer')
            test.descending('createdAt')
            test.include('IRusmer')
            test.include('IRusmer.targetAVUser')
            test.find().then(function(mess){
                var imx = mess.get('imx')
                console.log(imx)
                mess.forEach(function(product){
                    //var imx = product.get('imx')
                    //console.log(imx)
                })
                
            })

        //    var query = new AV.Query('IRusmer')
        //     query.get('5b208194a22b9d003a2d98e3').then(function(Mess){
        //         console.log(Mess.toJSON())
        //     })
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
