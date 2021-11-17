<template>
  <div class="layout">
    <navbar />
    <router-view />
    <copyright />
    <backtop :height="200" />
  </div>
</template>

<script lang="ts" setup>
import navbar from './components/navbar.vue'
import copyright from './components/footer.vue'
import backtop from '@/components/backtop.vue'

</script>

<style scoped lang="scss">
.layout {
  height: 100%;
}
</style>
