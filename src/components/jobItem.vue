<template>
	<div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="wrap">
                <div class="jobItems" v-for="(jobObj,index) in jobsData" :key="index">
                    <h1>{{jobObj.title}}</h1>
                    <p>{{jobObj.h2_txt}}</p>
                    <ul class="areaUl">
                        <li v-for="(item,index) in jobObj.area" :key="index">{{item}}</li>
                    </ul>
                    <label>{{jobObj.hr.hr_txt}}</label>
                    <span>{{jobObj.salary}}</span>
                </div>
            </div>
        </van-pull-refresh>
	</div>
</template>

<script>


export default{
	name:'jobList',
	components:{},
    props : ['jobsData'],
    data(){
        return {
            isLoading : false,
        }
    },
    methods : {
          onRefresh(){
            this.isLoading = false;
            this.$toast('加载完成');
        },
    }
}
</script>

<style scoped>
.jobItems{
	padding: .3rem 0;border-bottom: .1rem solid #eaeaea;position: relative;
}
ul.areaUl{height: .3rem;margin: 0 0 .2rem .2rem;}
ul.areaUl li{float: left;margin-right: .1rem;
background: #f2f3f5;padding:.02rem .07rem;color: #666;}

.jobItems h1{font-size: .25rem;font-weight: bold;margin:0 0 .1rem .2rem;}
.jobItems p{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems label{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems span{font-size: .25rem;color: #14c1bb;position: absolute;top: .3rem;right: .3rem;}
</style>