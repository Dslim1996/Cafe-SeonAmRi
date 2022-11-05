<script setup>

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <header>
    <div class="heder_content_wrap">
        <div class="header_image_wrap">
            <img class="header_image" :src="getImageUrl('assets/header/seonamri_logo_no_bg.png')" alt="">
        </div>
        <div class="nav_wrap">
            <div class="nav_menus">
                <div class="fw_700">HOME</div>
                <div>선암리</div>
                <div>메뉴</div>
                <div>매장</div>
                <div>가맹문의</div>
            </div>
        </div>
        <span class="material-symbols-outlined">menu</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';


@include mobile {
    .nav_wrap {
        display: none !important;
    }
}


header {
    position: fixed;
    top: 0;
    background-color: #ffffff;
    width: 100%;
    height: em(120);
    padding: em(20) 0;
    box-sizing: border-box;
    line-height: em(80);
    .heder_content_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: em(1200);
        margin: auto;
        & .header_image_wrap {
            width: 100%;
            height: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            
            & .header_image {
                width: 100px;
            }
        }
    
        & .nav_wrap {
            width: 100%;
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: end;
            & .nav_menus {
                display: flex;
                gap: em(10);
            }
        }
    }   
}

</style>
