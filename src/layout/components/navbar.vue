<template>
    <div class="nav-bar g-p-t-20">
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="g-flex">
            <img src="@/assets/images/logo.png" alt="" class="logo" @click="handleLogo">
            <ul class="g-flex g-flex-1">
              <li
                v-for="(item, index) in navList"
                :key="index"
                :class="currentNav === index ? 'active':''"
                @click="handleNav(index, item)">{{ item.name }}</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface InavItem {
  name: string,
  anchor: string,
  url?: string
}

const currentNav = ref(0)
const router = useRouter()
let navList = reactive([
  { name: '首页', anchor: '', url: '/' },
  { name: '业务板块', anchor: '#business' },
  { name: '产品与服务', anchor: '' },
  { name: '应用案例', anchor: '#case' },
  { name: '关于我们', anchor: '#aboutUs' },
  { name: '农业资讯', anchor: '', url: '/news' },
  { name: '人才招聘', anchor: '', url: '/recruit' }
])

/**
 * @description: 刷新页面重置路由
 * @param {*}
 * @return {*}
 */
onMounted(() => {
  const route = useRoute()
  let path = computed(() =>route.path).value
  if (path === '/home') {
    currentNav.value = 0
  } else if (path === '/news') {
    currentNav.value = 5
  } else if (path === '/recruit') {
    currentNav.value = 6
  }
})

/**
 * @description: 导航处理
 * @param {*}
 * @return {*}
 */
let handleNav = (index: number, item: InavItem) :void => {
  if (item.url) {
    router.push(item.url)
  } else {
    const nodes = item.anchor && document.querySelector(item.anchor)
    if (nodes) {
      nodes.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
  currentNav.value = index
}

/**
 * @description: logo首页
 * @param {*}
 * @return {*}
 */
let handleLogo = () :void => {
  currentNav.value = 0
  router.push('/')
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 750px;
  background: url(../../assets/images/banner.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .logo {
    width: 231px;
    height: 65px;
    cursor: pointer;
  }
  ul {
    margin-left: 60px;
    li {
      list-style-type: none;
      margin: 0 30px;
      cursor: pointer;
    }
    li.active {
      color: #00a2bd;
    }
  }
}
</style>

