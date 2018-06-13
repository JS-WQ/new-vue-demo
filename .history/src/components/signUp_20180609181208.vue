<template>
    <div class="signUp">
        <!-- <div class="signUpLeft">
            <h1>IResumer</h1>
            <h2>Sign in</h2>
            <form @submit.prevent=signUp>
                <div class="formRow">
                    <input type="text" placeholder="username" v-model="formData.username"> 
                </div>
                <div class="formRow">
                    <input type="password" placeholder="password" v-model="formData.password"> 
                </div>
                <div class="formActions">
                    <input type="submit" value="Sign in">
                </div>
            </form>
        </div> -->
        <img src="http://wx2.sinaimg.cn/mw690/0060lm7Tly1frvr196wirj309b0drdgq.jpg">
    </div>
</template>
<script>
import AV from '../lib/leancloud'

export default {
    name:'signUp',
    data(){
        return {
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        signUp: function () {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then(function (loginedUser) {
                console.log(loginedUser);
            }, function (error) {
            })
        }
    }
}
</script>

