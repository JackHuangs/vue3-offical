<template>
  <div class="about-us">
    <h2 class="g-text-center g-font-36">关于我们</h2>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-row>
          <el-col :span="22" :offset="1" class="list">
            <el-row :gutter="96">
              <el-col :span="12">
                <div>
                  <div class="g-font-24">公司简介</div>
                  <div class="decorate g-m-t-5 g-m-l-5"></div>
                </div>
                <div class="info">
                  <p class="g-m-t-40">广州共享数字农业科技有限公司专注于通过“物联网、大数据、云计算”技术为现代农业产业经营方提供数字化系统解决方案。基于“农、牧、渔”物联网建设提升农业产业数字化能力的同时，以搭建单品全产业链大数据为核心，完善以县域农业产业大数据为基本面的农业大数据资源体系，通过产业数字化数据运营，为农业金融、农业保险、农资物料等提供数据授信服务，帮助当地产业发展。</p>
                  <div class="g-text-center g-font-36 g-m-t-100">科技创新助力数字农业</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="overflow: hidden">
                  <img src="@/assets/images/about.png" alt="" style="width: 100%" class="scale-img">
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style lang="scss" scoped>
.about-us {
  padding: 100px 0;
  .list {
    margin-top: 50px;
    .decorate {
      width: 50px;
      height: 4px;
      background: #3dccc4;
    }
    .info {
      color: #5e5f64;
      line-height: 30px;
    }
    .scale-img {
      cursor: pointer;
      transition: all 0.6s;
    }
    .scale-img:hover {
      transform: scale(1.5);
    }
  }
}
</style>
