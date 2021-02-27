<template>
    <div>
        <van-nav-bar
        title="工作状态"
        left-arrow
        >
            <template #left>
                <van-icon name="arrow-left" size="18" @click="closeJobStateMaskFn" />
            </template>
        </van-nav-bar>
        <div class="titleSty">管理求职意向</div>
        <van-nav-bar
        left-text="求职状态"
        :right-text='jobStateObj'
        @click-right="openJobStateFn"
        />

        <van-action-sheet v-model="jobSheetShow" :actions="actions" @select="onSelect" />
    </div>
</template>

<script>
export default {
    name : 'jobState',
    data(){
        return {
            jobStateObj:'请选择>>',
            jobSheetShow : false,
            actions : [{ 
					name: '离职-随时到岗',
					is_state:0
				},{ 
					name: '在职-月内到岗',
					is_state:1
				},{ 
					name: '在职-考虑机会',
					is_state:2
				},{
					name:'在职-暂不考虑',
					is_state:3
				}],

        }
    },
    methods : {
        //关闭工作状态面板
        closeJobStateMaskFn(){
            this.$emit('closeJobStateMask')
        },
         //选择工作状态
        openJobStateFn(){
            this.jobSheetShow = true;

        },
        onSelect(item){
            this.jobSheetShow = false;
            this.jobStateObj = item.name + '>>';
        }
        
        
        
    }

}
</script>

<style scoped>
.titleSty{font-size: .3rem;font-weight: bold;margin-left: .3rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

.div_p{
	font-size: .1rem;color: #969696;margin-left: .25rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.jobState{
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.jobState_footer{text-align: center;margin: 2rem 0;}
</style>