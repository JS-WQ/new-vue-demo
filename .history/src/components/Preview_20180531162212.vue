<template>
    <div id="preview">
        <section>
            <h2>个人信息</h2>
            <ul v-for="(mess,index) in iresum.imx">
                <li v-if="mess">{{iresum.labels[index]}}:{{mess}}</li>
            </ul>
        </section>
        <section v-if="filter(iresum.workExpress).length > 0">
                <h2>工作经验</h2>
                <ul style="list-style:none;">
                    <li v-for="work in filter(iresum.workExpress)">
                        <h3>{{work.company}}</h3>
                        <h4>{{work.content}}</h4>
                    </li>
                </ul>
        </section>
        <section v-if="filter(iresum.studyExpress).length > 0">
            <h2>学习经历</h2>
            <ul>
                <li v-for="study in filter(iresum.studyExpress)">
                    {{study.schoolName}}
                    {{study.onlineSchool}}
                    {{study.degree}}
                </li>
            </ul>
        </section>
        <section v-if="filter(iresum.itemsdemo).length > 0">
                <h2>项目和作品</h2>
                <ul>
                    <li v-for="idemo in filter(iresum.itemsdemo)">
                        <a :href="idemo.itemHrf">{{idemo.itemName}}</a>
                        <span>:{{idemo.itemCont}}</span>
                    </li>
                </ul>
        </section>
        <section v-if="filter(iresum.prizes).length > 0">
                <h2>获奖经历</h2>
                <ul>
                    <li v-for="prize in filter(iresum.prizes)">
                        <span>{{prize.prizeTime}}:</span>
                        <span>{{prize.prizeCont}}</span>
                    </li>
                </ul>
        </section>
        <section>
            <h2>联系方式</h2>
            <ul v-for="(call,index) in iresum.callme">
                <li v-if="call">{{iresum.labels[index] || call}}:{{call}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    props:['iresum'],
    methods:{
        filter(array){
            return array.filter(item=> !this.isEmpty(item))
        },
        isEmpty(object){
            let empty = true
            for(let key in object){
                if(object[key]){
                    empty = false
                    break
                }
            }
            return empty
        },
        
    },
    created:function(){

    }
}
</script>

<style lang="scss">
    #preview{
        background-color: #ffffff;
        flex: 1;
        margin-right: 16px;
        box-shadow: 0px 2px 12px #3333339c;  
        border-radius: 5px;
        > section{
            text-align: left;
            > ul{
                list-style: disc inside;
                > li{
                    > a {
                        color: #ec7175;
                        text-decoration: none;
                    }
                    > a:hover {
                        color: #d82030;
                    }
                }
                
            }
        }
        
        
    }
</style>
