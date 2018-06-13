<template>
    <div class="login" v-if="actionType == 'login'">
                <div class="loginLeft">
                    <h1>IResumer</h1>
                    <h2>Login</h2>
                    <form @submit.prevent=login>
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
</template>
