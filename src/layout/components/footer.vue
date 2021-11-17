<template>
  <div class="copy-right">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-row>
          <el-col :span="8" class="logo">
            <div class="g-text-center g-m-t-20">
              <img src="@/assets/images/logo.png" alt="" style="width: 40%">
              <h2 class="g-m-t-30" style="font-size: 18px">广州共享数字农业科技限公司</h2>
            </div>
          </el-col>
          <el-col :span="15" :offset="1">
            <el-row>
              <el-col :span="4" class="g-flex g-flex-direction g-row-center">
                <div class="wx-box">
                  <img src="@/assets/images/mp.png" alt="">
                </div>
                <p class="g-m-t-25">小程序体验</p>
              </el-col>
              <el-col :span="4" class="g-flex g-flex-direction g-row-center">
                <div class="wx-box">
                  <img src="@/assets/images/public.png" alt="">
                </div>
                <p class="g-m-t-25">企业微信公众号</p>
              </el-col>
              <el-col :span="15" :offset="1" class="contact">
                <div class="g-font-22">联系方式</div>
                <div class="g-flex g-m-t-15">
                  <img src="@/assets/images/phone.png" alt="">
                  <p class="g-m-l-5">15915759983（林经理）</p>
                </div>
                <div class="g-flex g-m-t-10">
                  <img src="@/assets/images/address.png" alt="">
                  <p class="g-m-l-5">广州市天河区广东省农业科学院创业大楼212</p>
                </div>
                <div class="g-flex g-m-t-10">
                  <img src="@/assets/images/web.png" alt="">
                  <p class="g-m-l-5">www.gxszny.com</p>
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

</script>

<style lang="scss" scoped>
.copy-right {
  background: rgba($color: #000000, $alpha: .9);
  padding: 40px 0;
  color: #fff;
  .logo {
    border-right: 1px solid #313131;
  }
  h2 {
    font-size: 16px;
  }
  .wx-box {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .contact {
    img {
      width: 23px;
      height: 23px;
    }
  }
}
</style>
