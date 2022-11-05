<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import Sidenav from '@/components/layout/Sidenav.vue';

const router = useRouter();
const routerName = ref('main');
const sidenavToggle = ref(false);

function movPage(name) {
    routerName.value = name;
    router.push({
        name: routerName.value,
    });
}

function openSidenav() {
    sidenavToggle.value = true;
}

function closeSidenav() {
    sidenavToggle.value = false;
}

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <header>
    <div class="heder_content_wrap">
        <div class="header_image_wrap">
            <img class="header_image" @click="movPage('main')" :src="getImageUrl('assets/header/seonamri_logo_no_bg.png')" alt="">
        </div>
        <div class="nav_wrap">
            <div class="nav_menus">
                <div :class="`${routerName === 'main' ? 'fw_700' : ''}`" @click="movPage('main')">HOME</div>
                <div :class="`${routerName === 'about' ? 'fw_700' : ''}`" @click="movPage('about')">선암리</div>
                <div :class="`${routerName === 'menu' ? 'fw_700' : ''}`" @click="movPage('menu')">메뉴</div>
                <div :class="`${routerName === 'store' ? 'fw_700' : ''}`" @click="movPage('store')">매장</div>
                <div :class="`${routerName === 'franchise' ? 'fw_700' : ''}`" @click="movPage('franchise')">가맹문의</div>
            </div>
        </div>
        <span class="material-symbols-outlined mobile_menu" @click="openSidenav">menu</span>
    </div>
  </header>
  <Sidenav v-if="sidenavToggle" @closeSidenav="closeSidenav"/>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';


@include mobile {
    .nav_wrap {
        display: none !important;
    }

    .mobile_menu {
        display: block !important;
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
                gap: em(15);
            }
        }

        & .mobile_menu {
            display: none;
        }
    }   
}

</style>
