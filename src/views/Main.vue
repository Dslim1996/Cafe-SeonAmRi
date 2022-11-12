<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function movPage(pageName) {
  router.push({name : pageName})
}

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <div class="main_wrap">
    <div class="title_img">
      <img :src="getImageUrl('assets/main/seonamri_logo.PNG')" alt="">
      <span class="text_nowrap fw_600">카페 선암리는 늘 정성으로 준비합니다</span>
    </div>
    <div class="main_img_wrap mb_2">
      <img class="main_img" :src="getImageUrl('assets/main/seonamri_logo2.jpeg')" alt="">
    </div>
    <div class="content_box ptb_4 w_full">
      <span class="" style="font-size: 1.5em;">하나하나 그 무엇도 정성이<br/>들어가지 않은 것은 없습니다.</span><br/><br/><br/>
      <span class="color_gray">공간도 음식도 그 무엇하나 정성이 들어가지</span><br/>
      <span class="color_gray">않은 것은 백금당에 없습니다.</span><br/>
      <span class="color_gray">찾아주시는 모든 발걸음이 소중하고 귀함을 알기에</span><br/>
      <span class="color_gray">우리는 그 감사함을 잊지 않겠습니다.</span> <br/>
    </div>
    <div class="content_box ptb_4 w_full">
      <div class="flex align_items_center justify_content_sb">
        <h2 style="flex: 2; text-align: left;">MENU</h2>
        <div style="flex: 4; text-align: left;">
          <span class="fw_600 color_gray">Homemade-style desserts and drinks Coffe</span><br/><br/>
          <span>매장에서 매일 만들어내는 신선한 디저트와 음료</span><br/>
          <span>그리고 카페 선암리 만의 레시피로 만들어지는 시그니처 커피</span><br/>
          <span class="pointer" @click="movPage('menu')">메뉴보기></span>
        </div>
      </div>
    </div>
    <div class="content_box ptb_4 w_full">
      <div class="flex align_items_center justify_content_sb">
        <h2 style="flex: 2; text-align: left;">STORE</h2>
        <div style="flex: 4; text-align: left;">
          <span class="fw_600">Our space Our store</span><br/>
          <span class="color_gray">가까운곳의 카페 선암리를 만나보세요</span><br/>
          <span class="pointer" @click="movPage('store')">매장보기></span>
        </div>
      </div>
    </div>
    <div class="content_box ptb_4 w_full">
      <div class="flex align_items_center justify_content_sb">
        <h2 style="flex: 2; text-align: left;">FRANCHISE</h2>
        <div style="flex: 4; text-align: left;">
          <span class="fw_600">Let's be together</span><br/>
          <span class="color_gray">카페 선암리와 함께하실 예비 점주님을 기다립니다</span><br/>
          <span class="pointer" @click="movPage('franchise')">가맹문의></span>
        </div>
      </div>
    </div>
    <div class="content_box ptb_4 w_full">

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';

  .main_wrap {
    width: 100%;
    max-width: em(1600);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    & .title_img {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 2em;
    }

    & .main_img_wrap {
      margin-bottom: 2em;
      & .main_img {
        width: 100%;
        height: 700px;
      }
    }
  }

  .content_box {
    text-align: center;
    border-top: 1px solid rgb(128, 128, 128, 0.6);
  }
  
</style>
