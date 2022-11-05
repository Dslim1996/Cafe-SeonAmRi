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
