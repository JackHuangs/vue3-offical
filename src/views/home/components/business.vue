<!--
 * @Author: your name
 * @Date: 2021-08-02 17:19:41
 * @LastEditTime: 2021-08-06 09:24:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jieyang-chuanlingd:\dev\vue-digital-agriculture-web\src\views\home\components\business.vue
-->
<template>
  <div class="business">
    <h2 class="g-text-center g-font-36">业务板块</h2>
    <el-row>
      <el-col :span="16" :offset="4" class="list">
        <el-row :gutter="36">
          <el-col
            :span="6"
            v-for="(item,index) in 4"
            :key="item">
            <div class="g-rela" @mouseleave="handleMantle(-1)" @mouseenter="handleMantle(index)">
              <img
                src="@/assets/images/block.png"
                alt=""
                style="width: 100%"
                class="g-img"
              />
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  class="g-abso mantle g-flex g-flex-direction g-row-center"
                  v-if="currentIndex === index"
                >
                  <img
                    src="@/assets/images/icon.png"
                    alt=""
                    style="width: 72px; height: 65px"
                  />
                  <h3 class="g-m-t-40">智慧农场系统</h3>
                  <p class="g-line-height g-font-14 g-m-t-25">
                    智慧农业/水产设备，助力现代产业园建设
                  </p>
                </div>
              </transition>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentIndex = ref(-1)

const handleMantle = (index: number): void => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.business {
  padding: 60px 0;
  .list {
    margin-top: 80px;
    color: #fff;
    .mantle {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.6);
      padding: 0 30px;
    }
  }

}
</style>
