<template>
    <div>
        <van-nav-bar
        title="标题"
        left-arrow
        >
            <template #left>
                <van-icon name="cross" size="18" @click="closeFilterMask" />
            </template>
        </van-nav-bar>
        <div class="gridTitle">学历要求</div>
        <van-grid :column-num="3" :gutter="10">
            <van-grid-item @click="addFocusClassFn($event)" text="大专" />
            <van-grid-item @click="addFocusClassFn($event)"  text="全部" />
            <van-grid-item @click="addFocusClassFn($event)" text="本科" />
            <van-grid-item @click="addFocusClassFn($event)" text="研究生" />
            <van-grid-item @click="addFocusClassFn($event)" text="博士生" />
        </van-grid>
        <div class="gridTitle">薪资待遇</div>
        <van-grid :column-num="3" :gutter="10">
            <van-grid-item @click="addFocusClassFn($event)" text="全部" />
            <van-grid-item @click="addFocusClassFn($event)" text="8k" />
            <van-grid-item @click="addFocusClassFn($event)" text="10k" />
            <van-grid-item @click="addFocusClassFn($event)" text="15k" />
            <van-grid-item @click="addFocusClassFn($event)" text="20k" />
        </van-grid>

        <div class="filter_footer">
            <van-button plain type="default">清除</van-button>
            <van-button plain type="info">确定</van-button>
            
        </div>


    </div>

</template>

<script>
import '../assets/reset_vant.css'
export default {
    name : 'filterMask',
    data(){
        return {
            msg : '筛选面板'

        }
    },
    methods : {
        //关闭筛选面板
        closeFilterMask(){
            this.$emit('closeFilterMask');

        },
        //为选中的筛选条目增加获取消样式
        addFocusClassFn($e){
            let targetDom = $e.target;
            let targetClass = targetDom.getAttribute('class');
            let classArr = targetClass.split(' ');
           // console.log(classArr)
           //判断目标是否选中
           for (let i = 0 ; i < classArr.length ; i++) {
               if (classArr[i] === "van_grid_item_focus") {
                   classArr.splice(i,1);
                   targetDom.setAttribute('class',classArr.join(' '));
                   return;
               }
           }
           // 目标未被选中时
           classArr.push('van_grid_item_focus');
           targetDom.setAttribute('class',classArr.join(' '));

        }
               
}
}
</script>
<style scoped>
.gridTitle{
	padding: .2rem .2rem;clear: both;font-size: .3rem;font-weight: bold;
}
.gridTitle label{font-weight: normal;font-size: .2rem;padding: 0 10px;}
.filter_footer{
	text-align: center;margin-top: 1rem;
	width: 100%;
}

</style>