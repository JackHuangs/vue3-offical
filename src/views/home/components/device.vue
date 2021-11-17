<template>
  <div class="device">
    <h2 class="g-text-center g-font-36">智能水质监测设备</h2>
    <el-row>
      <el-col :span="16" :offset="4" class="g-m-t-60">
        <el-row>
          <el-col :span="1" class="g-rela swiper-left-arrow">
            <div class="arrow g-flex g-row-center g-abso">
              <i class="el-icon-arrow-left"></i>
            </div>
          </el-col>
          <el-col :span="22" class="swiper-container swiper1">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide g-p-r-15"
                v-for="item in deviceList"
                :key="item.id"
              >
                <img
                  src="@/assets/images/device.png"
                  alt=""
                  style="width: 100%;height: 260px"
                />
                <div style="color: #5e5f64" class="g-p-10">
                  <div class="g-font-18">{{ item.name }}</div>
                  <div class="g-font-14 g-m-t-10 g-line-height">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="1" class="g-rela swiper-right-arrow">
            <div class="arrow g-flex g-row-center g-abso arrow-right">
              <i class="el-icon-arrow-right"></i>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

onMounted(() => {
  new Swiper(".swiper1", {
    pagination: {
      el: ".swiper-pagination"
    },
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-right-arrow",
      prevEl: ".swiper-left-arrow",
      hideOnClick: true
    },
    autoplay: false
  });
});

let deviceList = reactive([
  { id: 1, name: "鱼之翼专业版", desc: "实时查看数据  可支持7种数据探头" },
  { id: 2, name: "鱼之翼基础版", desc: "全天候监测  标配三种数据" },
  {
    id: 3,
    name: "4G智能控制器",
    desc: "定时开关 手动开关 断电报警 自带网络 电路保护 电流保护"
  },
  { id: 4, name: "测试", desc: "测试测试测试测试" }
]);
</script>

<style lang="scss" scoped>
.device {
  padding: 80px 0;
  .arrow {
    width: 50%;
    height: 50px;
    background: #f8f4f4;
    top: 33%;
    cursor: pointer;
  }
  .arrow-right {
    right: 0;
  }
}
</style>
