<template>
    <div>
        <h2>{{title}}</h2>
        <el-form>
            <div v-for="(work,index) in items">
                <el-form-item v-for="key in keys" v-bind:label="labels[key] || key">
                    <el-input v-model="work[key]"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close-outline" v-on:click="removeitem(index)"></i>
                <hr>
            </div>
            <el-button type="primary" v-on:click="additem()">新建一个</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    props:['items','labels','title'],
    computed:{
        keys(){
            return Object.keys(this.items[0])
        }
    },
    methods:{
        additem(){
            console.log(this.items)
             const arr = {}
             console.log(this.keys)
             this.keys.map((key)=>{
                 arr[key] = ''
             })
            this.items.push(arr)
        },
        removeitem(index){
            this.items.splice(index,1)
        }
    }
}
</script>
<style lang="scss">
    template{
        > div{
            > el-form{
                > div{
                    position: relative;
                    > i{
                        position:absolute;
                    }
                }
            }
        }        
    }
</style>

