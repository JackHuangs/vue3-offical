<template>
  <div class="case">
    <h2 class="g-text-center g-font-36">应用案例</h2>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-row>
          <el-col :span="22" :offset="1" class="list">
            <el-row>
              <el-col
                v-for="(item,index) in list"
                :key="item.id"
                class="item"
                :span="index === currentIndex ? 9 : 5"
                @mouseenter="handleMantle(index)">
                <div class="g-rela">
                  <img src="@/assets/images/case.png" alt="">
                  <transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div class="g-abso mantle g-flex g-flex-direction g-row-center" v-show="index === currentIndex">
                      <div class="g-font-14">{{ item.tag }}</div>
                      <div class="g-font-22 g-m-t-15">{{ item.name }}</div>
                      <div class="g-font-14 g-m-t-60 g-line-height">{{ item.desc }}</div>
                    </div>
                  </transition>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

let currentIndex = ref(0)
const list = reactive([
  { id: 1, tag: '农场种植案例', name: '揭阳卅岭农场', desc: '该基地种植草莓和葡萄，使用智慧农场系统' },
  { id: 2, tag: '农场种植案例', name: '揭阳卅岭农场', desc: '该基地种植草莓和葡萄，使用智慧农场系统' },
  { id: 3, tag: '农场种植案例', name: '揭阳卅岭农场', desc: '该基地种植草莓和葡萄，使用智慧农场系统' },
  { id: 4, tag: '农场种植案例', name: '揭阳卅岭农场', desc: '该基地种植草莓和葡萄，使用智慧农场系统' },
])
const handleMantle = (index: number): void => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.case {
  background: #f5f5f5;
  padding: 50px 0 100px 0;
  .list {
    margin-top: 70px;
    .item {
      transition: all 0.5s;
      img {
        width: 100%;
        height: 350px;
        display: flex;
      }
      .mantle {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba($color: #000000, $alpha: 0.6);
        color: #fff;
        padding: 0 50px;
      }
    }

  }
}
</style>
