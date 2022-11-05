<script setup>

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <div class="main_wrap">
    <div class="ptb_4 w_full"></div>
    <div class="content_box ptb_4 w_full">
        <div class="about flex align_items_center justify_content_sb">
            <div style="flex: 2; text-align: left;" class="title_wrap">
                <h2>선암리</h2>
                <span>Seonamri</span>
            </div>
            <div style="flex: 4; text-align: left;">
                <span class="color_gray">카페 선암리는 전부 김제 [전북 김제시 금구면 선암5길 109] 을</span><br/>
                <span class="color_gray">2022년 오픈한 이후 한결같이 감사한 마음으로 편안한 공간과</span><br/>
                <span class="color_gray">정성담은 음료와 디저트를 준비하도록 노력하고 있습니다.</span><br/>
                <span class="color_gray">저희는 언제나 찾아주시는 모든분들의 행복을 기원합니다.</span><br/>
            </div>
        </div>
    </div>
    <div class="content_box ptb_4 w_full">
        <div class="about flex align_items_center justify_content_sb" style="gap: 1em;">
            <img style="flex: 1;" :src="getImageUrl('assets/about/seonamri_about_1.jpeg')" alt="">
            <img style="flex: 1;" :src="getImageUrl('assets/about/seonamri_about_2.jpeg')" alt="">
            <img style="flex: 1;" :src="getImageUrl('assets/about/seonamri_coffe.jpg')" alt="">
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';


@include mobile {
    .about {
        flex-direction: column;
        gap: 1em;
        & .title_wrap {
            text-align: center !important; 
        }
    }

    img {
        width: 100% !important;
        height: 100% !important;
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
