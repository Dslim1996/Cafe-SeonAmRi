<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function movPage(name) {
    router.push({
        name: name,
    });
    emit('closeSidenav')
}

const emit = defineEmits(['closeSidenav']);
const props = defineProps({
    sidenavToggle: Boolean
})

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <div class="sidenav_wrap text_nowrap"  @click.self="emit('closeSidenav')">
    <div :class="`sidenav ${props.sidenavToggle ? 'open' : 'close'}`">
        <div class="flex justify_content_end">
            <span @click.self="emit('closeSidenav')" class="material-icons pointer">close</span>
        </div>
        <div class="flex flex_col gap_1">
            <div :class="`pointer ${route.name === 'main' ? 'fw_700' : ''}`" @click="movPage('main')">HOME</div>
            <div :class="`pointer ${route.name === 'about' ? 'fw_700' : ''}`" @click="movPage('about')">선암리</div>
            <div :class="`pointer ${route.name === 'menu' ? 'fw_700' : ''}`" @click="movPage('menu')">메뉴</div>
            <div :class="`pointer ${route.name === 'store' ? 'fw_700' : ''}`" @click="movPage('store')">매장</div>
            <div :class="`pointer ${route.name === 'franchise' ? 'fw_700' : ''}`" @click="movPage('franchise')">가맹문의</div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/utils.scss';

.sidenav_wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.3);
    & .sidenav {
        // // width: em(450);
        // width: 0;
        // height: 100%;
        // box-sizing: border-box;
        // background-color: #ffffff;
        // padding: em(50) 0;
        // overflow: hidden;
        // transition: 1s;
        // &.open {
        //     width: em(450);
        //     padding: em(50) em(50);
        //     transition:1s;
        // }
        width: em(450);
        transform: translate3d(-28.125em, 0, 0);
        height: 100%;
        box-sizing: border-box;
        background-color: #ffffff;
        padding: em(50) em(50);
        overflow: hidden;
        transition: 1s;
        > div {
            font-size: 3em;
        }
    }
}

.open {
    animation: open 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(-28.125em, 0, 0);
}

@keyframes open {
    0% {
        transform: translate3d(-28.125em, 0, 0);
    }
    100%{
        transform: translate3d(0, 0, 0);
    }
}

.close {
    animation: close 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes close {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100%{
        transform: translate3d(-28.125em, 0, 0);
    }
}
</style>
