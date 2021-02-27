<template>
	<div>
		<!-- header -->
        <van-sticky >
            <van-nav-bar class='bar_sty van-nav-bar__text ' left-text="web前端">
                <van-icon name="plus" @click="openJobStateMaskFn" slot="right" />
                <van-icon name="search" slot="right" />
            </van-nav-bar>
            <div class="wrapDiv title_menu">
                <van-button type="primary" size="mini" class="miniBtn" @click="notifyBtn">最新</van-button>
                <van-button type="primary" size="mini" class="miniBtn" @click="notifyBtn">推荐</van-button>

                <van-button type="primary" size="mini" class="filterBtn" @click="openfilterMaskFn">筛选</van-button>
                <van-button type="primary" size="mini" class="filterBtn" @click="openMaskFn">{{cityName}}</van-button>
            </div>
            <notify v-show="notifyShow"></notify>
        </van-sticky>

        <!--职位列表-->
        <job-item :jobsData='jobsData' ></job-item>

       <!--城市选择-->
        <div :class="maskClassName"
        @touchmove.prevent
        @mouseWheel.prevent
        v-show="is_cityMaskObj"
        >
            <selectArea @cancelCityMask='hideMaskFn($event)'></selectArea>
        </div>
        <!--筛选面板-->
        <div 
        @touchmove.prevent
        @mouseWheel.prevent
        :class="filterMask"
        v-show="is_filterMaskObj">
            <filterMask @closeFilterMask='hideFilterMaskFn'></filterMask>
        </div>

        <!--工作状态面板-->
        <div
        v-show="isJobStateShow"
        :class="jobStateClassName">
            <jobState @closeJobStateMask='hideJobStateMask'></jobState>
        </div>

        <footBar></footBar>
	</div>
</template>

<script>
import jobItem from './jobItem'
import footBar from './footBar'
import notify from './notify'
import selectArea from './selectArea'
import filterMask from './filterMask'
import jobState from './jobState'


export default{
	name:'jobList',
    data(){
		return{
			msg:'职位列表',
            notifyShow : false,
            isLoading : false,
            //用于定位城市面板
            maskClassName : 'mask_aaaa',
            //用于定位筛选面板
            filterMask : 'filter_mask',
            jobStateClassName : 'mask_animation',
            is_cityMaskObj : false,
            cityName : '城市',
            is_filterMaskObj : false,
            isJobStateShow : false,
			jobsData:[{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			},{
				title:'软件开发工程师',
				h2_txt:'牛万科技 未融资',
				area:['沈阳 沈河区','1-3年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'3-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端开发工程师',
				h2_txt:'师福教育 未融资',
				area:['沈阳 沈河区','3-5年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'杨女士 - 人事'
				},
				salary:'5-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端技术经理',
				h2_txt:'星擎科技 未融资',
				area:['沈阳 铁西区','5-10年','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'潘舒-CEO'
				},
				salary:'6-11K'
			},{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			}]
		}
	},
	components:{jobItem,footBar,notify,selectArea,filterMask,jobState},
    methods : {
        notifyBtn(){
            this.notifyShow = true;

            let _rect = document.querySelector('.notify');
            // console.log(_rect)
            _rect.addEventListener('webkitAnimationEnd', ()=>{
            this.notifyShow = false;
            }, false);


        },
        onRefresh(){
            this.isLoading = false;
            this.$toast('加载完成');
        },
        // 城市切换打开，先切为true，再等css3动画结束之后重置为true
		// 否则，将响应 hideMaskFn 函数的css3事件监听
		openMaskFn(){
			this.is_cityMaskObj = true;
			this.maskClassName = 'mask_aaaa cityEditWrapObj_open';

			// css3动画运行结束之后，
			// console.log(_rect)
			let _rect = document.querySelector('.mask_aaaa');
			_rect.addEventListener('webkitAnimationEnd', ()=>{
				this.is_cityMaskObj = true;
			}, false);
		},
        hideMaskFn(_cityName){
            this.cityName = _cityName?_cityName : '城市';
			this.maskClassName = 'mask_aaaa cityEditWrapObj_close';
            let _rect = document.querySelector('.mask_aaaa');
			_rect.addEventListener('webkitAnimationEnd', ()=>{
				this.is_cityMaskObj = false;
			}, false);
            
            
        },
        //打开筛选面板
        openfilterMaskFn(){
            this.is_filterMaskObj = true;
            this.filterMask = 'filter_mask filterEditWrapObj_open';

            // css3动画运行结束之后，
            // console.log(_rect)
            let _rect = document.querySelector('.filter_mask');
            _rect.addEventListener('webkitAnimationEnd', ()=>{
            this.is_filterMaskObj = true;
            }, false);

        },
        //关闭筛选面板
        hideFilterMaskFn(){
            this.filterMask = 'filter_mask filterEditWrapObj_close';

            // css3动画运行结束之后，
            // console.log(_rect)
            let _rect = document.querySelector('.filter_mask');
            _rect.addEventListener('webkitAnimationEnd', ()=>{
            this.is_filterMaskObj = false;
            }, false);
        },
        //打开工作状态面板
        openJobStateMaskFn(){
            this.isJobStateShow = true;
            this.jobStateClassName = 'mask_animation animation_open ';
            let _rect = document.querySelector('.mask_animation');
            _rect.addEventListener('webkitAnimationEnd',()=>{
                this.isJobStateShow = true;
            });
            

        },
        hideJobStateMask(){
            this.jobStateClassName = 'mask_animation animation_close ';
            let _rect = document.querySelector('.mask_animation');
            _rect.addEventListener('webkitAnimationEnd',()=>{
            this.isJobStateShow = false;
            });
            
        }
    }
}
</script>

<style scoped>
.bar_sty{
	background: #14c1bb;
    color:#fff;
}
.van-icon-plus:before{
	color: #fff;font-size: .4rem;margin-right: .1rem;
	border-right: 1px solid #c1c1c1;padding-right: .1rem;
}
.van-icon-search:before{
	color: #fff;font-size: .4rem;
}
.van-nav-bar__text{
	font-size: .35rem;color: #fff;
}
.miniBtn{
	border:0;margin:.1rem 0 0 0;
    background-color: #dee1e6;
    color:black;
;
}
.filterBtn{
	float: right;border:0;margin:.1rem .1rem 0 0;
	background: #dee1e6;
    color: black;
}
.title_menu{background: #fff;}
.wrapDiv {
    height: .6rem;
}
.cityEditWrapObj_open{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;animation: cityEditWrapObjAnimation_open .7s;
}
.cityEditWrapObj_close{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;animation: cityEditWrapObjAnimation_close .7s;
}
.filterEditWrapObj_open{
    width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;animation: cityEditWrapObjAnimation_open .7s;

}
.filterEditWrapObj_close{
    width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;animation: cityEditWrapObjAnimation_close .7s;

}
@keyframes cityEditWrapObjAnimation_open{
	from {height:0;}
	to {height:100%;}
}
@keyframes cityEditWrapObjAnimation_close{
	from {height:100%;}
	to {height:0;}
}
.mask_animation{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
}
.animation_open{
	animation: open_Animation .7s;
}
.animation_close{
	animation: close_Animation .7s;
}

@keyframes open_Animation{
	from {width:0;left:100%;}
	to {width:100%;left:0;}
}
@keyframes close_Animation{
	from {width:100%;left:0;}
	to {width:0;left:100%;}
}
</style>