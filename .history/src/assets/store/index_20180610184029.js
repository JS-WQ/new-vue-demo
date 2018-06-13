export default new Vuex.store({
    state:{
        count:0,
        selected:'imx',
        iresum:{
            config:[
                {field:'imx',icon:'shenfenzheng1'},
                {field:'workExpress',icon:'gongzuo'},
                {field:'studyExpress',icon:'xuexi1'},
                {field:'itemsdemo',icon:'xiangmu'},
                {field:'prizes',icon:'jiangbei'},
                {field:'callme',icon:'dianhua'},
                {field:'labels'}
            ],
            imx: {name: '',birth: '',worktime:'',dreamPosition:'',expectedSalary:'',Blog:'',Github:'',city: ''},
            workExpress: [{company:'',content:''}],
            studyExpress: [{schoolName:'',onlineSchool:'',degree:''}],
            itemsdemo:[{itemName:'',itemCont:"",itemHrf:""}],
            prizes:[{prizeTime:'',prizeCont:''}],
            callme:{telephone:'',QQ:'',weixin:'',mail:'',address:''},
            labels:{name:'姓名',city:'期望城市',birth:'出生年月',worktime:'工作年限',dreamPosition:'期望职位',expectedSalary:'期望薪资',Blog:'技术博客',Github:'Github',company:'公司',content:'工作内容',schoolName:'学校名称',onlineSchool:'学习时间',degree:'学位',itemName:'项目名称',itemCont:'项目内容',itemHrf:'项目链接',prizeTime:'奖杯名',prizeCont:'奖杯内容',telephone:'电话号码',weixin:'微信',mail:'邮箱',address:'地址'},
          },
    },
    mutations:{
        increment(state){}
    }
})