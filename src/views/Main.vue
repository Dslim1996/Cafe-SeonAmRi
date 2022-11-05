<script setup>

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
    <div class="content_box mb_2">
      <span class="" style="font-size: 1.5em;">하나하나 그 무엇도 정성이<br/>들어가지 않은 것은 없습니다.</span><br/><br/><br/>
      <span class="color_gray">공간도 음식도 그 무엇하나 정성이 들어가지</span><br/>
      <span class="color_gray">않은 것은 백금당에 없습니다.</span><br/>
      <span class="color_gray">찾아주시는 모든 발걸음이 소중하고 귀함을 알기에</span><br/>
      <span class="color_gray">우리는 그 감사함을 잊지 않겠습니다.</span> <br/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';

@include mobile {
    * {
      font-size: 13px;
    }
}

  .main_wrap {
    width: 100%;
    max-width: em(960);
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
  }
  
</style>
