<template>
	<div>
        <van-area
        :title='titleName'
        :area-list="areaList"
        @change="changAreaFn"
        :visible-item-count=8
        @cancel='cancelCityMaskFn'
        @confirm='confirmCityFn' />
	</div>
</template>

<script>
import area from '../assets/area'
export default{
	name:'selectArea',
	components:{},
    data(){
        return {
            areaList : area,
            titleName : '请选择省市区'

        }

    },
    methods : {
        //标题显示选中的省市区
        changAreaFn(_d) {
            let data = _d.getValues();
            this.titleName = data[0].name +'-'+ data[1].name +'-'+ data[2].name;

        },
        //取消城市选择框
        cancelCityMaskFn(){
            this.$emit('cancelCityMask');
        },
        //确认选中城市
        confirmCityFn(_d){
            this.$emit('cancelCityMask',_d[1].name);
        }
       
     
    }
}
</script>

