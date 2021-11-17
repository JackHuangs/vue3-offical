<template>
  <div class="recruit">
    <h2 class="g-text-center g-font-36">人才招聘</h2>
    <el-row>
      <el-col :span="14" :offset="5" class="list g-m-t-30">
        <el-row :gutter="48">
          <el-col :span="12" v-for="item in recruitList" :key="item.id">
            <div class="item g-border-bottom g-flex g-row-center">
              <div>
                <div class="g-flex g-row-between">
                  <div class="g-font-24" style="color: #3e3f46">{{ item.name }}</div>
                  <div class="g-font-18">{{ item.time }}</div>
                </div>
                <div>
                  <p class="g-m-t-15">岗位职责</p>
                  <div class="g-m-t-15" style="line-height: 30px">
                    <p v-for="item2 in item.desc" :key="item2.title">{{ item2.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="item g-flex g-row-center g-border-bottom">MORE+</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

let recruitList = reactive([
  { id: 1, name: '小程序开发实习生', time: '2021-07-08', desc: [
    { title: '1、负责协助公司小程序的前端研发；' },
    { title: '2、与项目团队中各方面人员能够紧密结合，改进公司产品的易用性、用性、优化'}
  ] },
  { id: 2, name: '小程序开发实习生', time: '2021-07-08', desc: [
    { title: '1、负责协助公司小程序的前端研发；' },
    { title: '2、与项目团队中各方面人员能够紧密结合，改进公司产品的易用性、用性、优化'}
  ] },
  { id: 3, name: 'PM产品经理实习生', time: '2021-07-08', desc: [
    { title: '1.负责产品规划、设计与产品生命周期管理，提供产品需求分析、功能描述、详细设计方案等文档，完成产品的调研、定义和需求细化；' }
  ] },
])

</script>

<style lang="scss" scoped>
.recruit {
  padding: 80px 0;
  height: 100%;
  .list {
    .item {
      height: 230px;
      color: #787981;
      cursor: pointer;
    }
  }
}
</style>
