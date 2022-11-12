<script setup>

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <div class="main_wrap">
    <div class="ptb_4 w_full"></div>
    <div class="content_box ptb_4 w_full">
        <div class="about flex align_items_center justify_content_center">
           <div>
                <h1>Franchise</h1>
                <span>카페 선암리와 함께하실 예비 점주님을 기다립니다.</span>
           </div>
        </div>
        <div class="flex justify_content_center gap_1 ptb_4 flex_wrap">
          <img :src="getImageUrl('assets/franchise/seonamri_logo2.jpeg')" alt="">
          <div class="ptb_4">
            <span>카페 백금당의 가맹사업에 관한 문의사항은 </span><br/>
            <span>이메일 혹은 전화 문의로 주시면 상세히 안내 해드리겠습니다.</span><br/><br/>
            <span>temp@temp.com</span><br/>
            <span>010.1234.1234[홍길동]</span>
            <div class="flex w_full gap_1 justify_content_center">
              <span>phone</span>
              <span>Mail</span>
              <span>instagram</span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';


@include mobile {
  img {
    width: 100% !important;
  }
}

.main_wrap {
    width: 100%;
    max-width: em(1600);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}

.content_box {
    text-align: center;
    border-bottom: 1px solid rgb(128, 128, 128, 0.6);
}

img {
    width: calc(100%/3);
    height: em(500);
}

</style>
