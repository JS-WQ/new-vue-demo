<template>
    <div id="preview">
      <section>
        <h2></h2>
        <ul v-for="(mess,index) in iresum.imx">
            <li>{{mess}}</li>
        </ul>
      </section>
      
      <section v-if="filter(iresum.workExpress).length > 0">
          <h2>工作经验</h2>
          <ul>
              <li v-for="work in filter(iresum.workExpress)">
                  {{work.company}}
                  {{work.content}}
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
        }
    },
    created:function(){
         console.log(this.iresum.labels)
         console.log(1)
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
    }
</style>
