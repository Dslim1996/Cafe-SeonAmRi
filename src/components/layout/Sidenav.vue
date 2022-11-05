<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routerName = ref('main');

function movPage(name) {
    routerName.value = name;
    router.push({
        name: routerName.value,
    });
    emit('closeSidenav')
}

const emit = defineEmits(['closeSidenav']);

function getImageUrl(name) {
  return import.meta.env.BASE_URL + name;
}
</script>

<template>
  <div class="sidenav_wrap"  @click.self="emit('closeSidenav')">
    <div class="sidenav">
        <div class="flex justify_content_end">
            <div @click.self="emit('closeSidenav')">닫기</div>
        </div>
        <div class="flex flex_col gap_1">
            <div :class="`${routerName === 'main' ? 'fw_700' : ''}`" @click="movPage('main')">HOME</div>
            <div :class="`${routerName === 'about' ? 'fw_700' : ''}`" @click="movPage('about')">선암리</div>
            <div :class="`${routerName === 'menu' ? 'fw_700' : ''}`" @click="movPage('menu')">메뉴</div>
            <div :class="`${routerName === 'store' ? 'fw_700' : ''}`" @click="movPage('store')">매장</div>
            <div :class="`${routerName === 'franchise' ? 'fw_700' : ''}`" @click="movPage('franchise')">가맹문의</div>
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
        width: em(500);
        height: 100%;
        padding: em(50) em(50);
        box-sizing: border-box;
        background-color: #ffffff;
        > div {
            font-size: 3em;
        }
    }
}
</style>
