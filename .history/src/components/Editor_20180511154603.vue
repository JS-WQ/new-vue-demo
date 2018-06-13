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
                <usermessage v-bind:UserMessage="usermessage" />            
            </li>
            <li v-bind:class="{active: currentTab === 1}">
                <h2>工作经历</h2>
                <el-form>
                    <div v-for="(work,index) in workExpress">
                        <el-form-item label="公司名称">
                            <el-input v-model="work.company"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="work.content"></el-input>
                        </el-form-item>
                        <i class="el-icon-circle-close-outline" v-on:click="removeworkExpress(index)"></i>
                        <hr>
                    </div>
                    <el-button type="primary" v-on:click="addworkExpress">主要按钮</el-button>
                </el-form>
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
import usermessage from "./user"
export default {
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
