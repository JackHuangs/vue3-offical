<template>
  <transition
    enter-active-class="animate__animated animate__bounceInUp"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="back-top g-flex g-row-center" v-if="status" @click="backTop">
      <i class="el-icon-top"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import { onMounted, defineComponent, ref, onUnmounted } from 'vue'

export default defineComponent({
  props: {
    height: {
      type: Number,
      default: 300
    }
  },

  setup(props) {
    onMounted(() => {
      window.addEventListener('scroll', scrollToTop, true)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', scrollToTop, true)
    })

    let status = ref(false)
    let scrollTop = ref(0)

    let scrollToTop = (): void => {
      scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop.value > props.height) {
        status.value = true
      } else {
        status.value = false
      }
    }

    let backTop = () : void => {
      window.requestAnimationFrame(() => {
        if (scrollTop.value > 0) {
          scrollTop.value -= 100
          document.documentElement.scrollTop = scrollTop.value
          backTop()
        }
      })
    }

    return {
      status,
      backTop
    }
  }
})
</script>

<style scoped lang="scss">
.back-top {
  position: fixed;
  right: 2%;
  bottom: 5%;
  width: 50px;
  height: 50px;
  background: #f2f2f2;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 3px 3px 0px rgba($color: #000000, $alpha: 0.3);
  i {
    font-size: 35px;
    color: #00a2bd;
  }
}
</style>
