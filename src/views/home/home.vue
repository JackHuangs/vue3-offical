<template>
  <div class="home">
    <!-- 业务板块 -->
    <business id="business" />
    <!-- 大数据平台 -->
    <bigData />
    <!-- 核心优势 -->
    <core />
    <!-- 智能水质监测设备 -->
    <device />
    <!-- 应用案例 -->
    <app id="case" />
    <!-- 关于我们 -->
    <aboutUs id="aboutUs" />
  </div>
</template>

<script lang="ts" setup>
import business from './components/business.vue';
import bigData from './components/bigdata.vue';
import core from './components/core.vue';
import device from './components/device.vue';
import app from './components/case.vue';
import aboutUs from './components/about-us.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
