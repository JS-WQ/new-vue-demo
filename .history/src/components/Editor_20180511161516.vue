<template>
    <div id="editor">
        <ol class="nav">
            <li v-for='i in [0,1,2,3,4,5]' v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
            </li>
        </ol>
        <ol class="paners">
            <li v-bind:class="{active: currentTab === 0}">
                <userMess v-bind:UserMessage="UserMessage" />            
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <works v-bind:workExpress="workExpress" />
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <h2>学习经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 3}">
                <h2>项目经历</h2>
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <h2>获奖情况</h2>
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>
<script>
import userMess from "./usermessage"
import works from "./workexpress"
export default {
    components:{ userMess },
    components:{ works },
    data(){
        return {
            currentTab:0,
            icons:['shenfenzheng1','gongzuo','xuexi1','xingquaihao','jiangbei','dianhua'],
            UserMessage: {
                name: '',
                city: '',
                birth: ''
            },
            workExpress: [
                {company:'',content:''}
            ]
        }
    },
    methods:{
        addworkExpress(){
            this.workExpress.push({
                company:'',content:''
            })
            console.log(this.workExpress)
            
        },
        removeworkExpress(index){
            this.workExpress.splice(index,1)
        }
    },
    created(){

    }
}
</script>

<style lang="scss">
    #editor{
        background-color: #ffffff;
        width: 500px;
        margin-right: 16px;
        margin-left: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        display: flex;
        overflow: hidden;
        > .nav{
            background-color: #000000;
            width: 80px;
            > li{
                > svg{
                    width: 26px;
                    height:26px;
                    fill: #ffffff;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            }
            > li.active{
                background-color: #ffffff;
                > svg{
                    fill: #000;
                }
            }
        }
        > .paners{
            padding: 34px;
            overflow: auto;
            flex: 1;
            > li{
                display: none;
            }
            > li.active{
                display: block;
            }
        }
    }
</style>
