<template>
  <div class="news-box">
    <h2 class="g-text-center g-font-36">农业资讯</h2>
    <el-row>
      <el-col :span="14" :offset="5">
        <div class="g-text-right g-font-18" style="color: #787981;cursor: pointer">MORE+</div>
        <el-row class="list" :gutter="24">
          <el-col :span="8" v-for="item in newsList" :key="item.id">
            <div class="item">
              <img src="@/assets/images/case.png" alt="">
              <div class="info">
                <p class="g-font-20 g-m-t-20 g-line-1">{{ item.title }}</p>
                <p class="g-font-18 g-line-height g-m-t-20 g-line-3" style="color: #5e6064">{{ item.desc }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
let newsList = reactive([
  { id: 1, title: '“智慧农业”撑起乡村振新的希望', desc: '乡村振新，农业为本' },
  { id: 2, title: '智慧水产养殖，开启养殖模式新时代!', desc: '乡村振新，农业为本' },
  { id: 3, title: '智慧渔业是水产养殖新风', desc: '智慧渔业是结合物联网技术，通过数据化管理平台，达到更高效，更健康的生产效果。' }
])
</script>

<style lang="scss" scoped>
.news-box {
  padding: 80px 0;
  .list {
    margin-top: 20px;
    background: #fff;
    .item {
      box-shadow: 0px 3px 21px 0px rgba($color: #000000, $alpha: 0.1);
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      cursor: pointer;
      img {
        width: 100%;
        // height: 335px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      .info {
        height: 150px;
        padding: 0 20px;
      }
    }
  }
}
</style>
