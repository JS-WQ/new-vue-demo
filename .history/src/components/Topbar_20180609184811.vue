<template>
    <div id="topbar">
        <div class="topNav">
            <div class="logo">IResumer</div>
            <div class="actions">
                <a class="button primary" href="#" @click.prevent="signUpVisi = true">注册</a>
                <loginSignBox :visible="signUpVisi" @close="signUpVisi = false">
                    <signUp @success="login($event)"/>
                </loginSignBox>
                
                <!-- <a class="button" href="#" @click.prevent="loginVisi = true">登录</a>
                <loginSignBox :visible="loginVisi" @close="loginVisi = false">
                    <login />
                </loginSignBox> -->
                <el-button type="primary" round @click="preview">预览</el-button>
                <el-button type="primary" round @click="preview">保存</el-button>                
            </div>
        </div>
                
    </div>
    
</template>
<script>

import signUp from './signUp'
// import login from './login'
import loginSignBox from './loginSignBox'

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
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    components:{loginSignBox,signUp},

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
    }
</style>
