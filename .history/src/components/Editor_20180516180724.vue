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
                <usermessage v-bind:UserMessage="UserMessage" />            
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <items v-bind:items="workExpress" v-bind:labels="{company:'公司',content:'工作内容'}" v-bind:title="'工作经历'"/>
            </li>
            <li v-bind:class="{active: currentTab === 2}">
                <items v-bind:items="studyExpress" v-bind:labels="{schoolName:'学校名称',onlineSchool:'学习时间',degree:'学位'}" v-bind:title="'学习经历'"/>
                
            </li>
            <li v-bind:class="{active: currentTab === 3}">
                <items v-bind:items="itemsdemo" v-bind:labels="{itemName:'项目名称',itemCont:'项目内容'}" v-bind:title="'参与项目'"/> 
            </li>
            <li v-bind:class="{active: currentTab === 4}">
                <items v-bind:items="prizes" v-bind:labels="{prizeTime:'奖杯名',prizeCont:'奖杯内容'}" v-bind:title="'获奖情况'"/>
            </li>
            <li v-bind:class="{active: currentTab === 5}">
                <usermessage v-bind:usermessage="callme" v-bind:title="'联系方式'"/>
            </li>
        </ol>
    </div>
</template>
<script>
import usermessage from "./usermessage"
import items from "./editoritems"


export default {
    components:{ usermess,items},
    data(){
        return {
            currentTab:0,
            icons:['shenfenzheng1','gongzuo','xuexi1','xiangmu','jiangbei','dianhua'],
            User: {
                name: '',
                city: '',
                birth: ''
            },
            workExpress: [
                {company:'',content:''}
            ],
            studyExpress: [
                {schoolName:'',onlineSchool:'',degree:''}
            ],
            itemsdemo:[
                {itemName:'',itemCont:""}
            ],
            prizes:[
                {prizeTime:'',prizeCont:''}
            ],
            callme:{
                telephone:'',
                QQ:'',
                WX:'',
                mail:'',
                address:''
            } 
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
