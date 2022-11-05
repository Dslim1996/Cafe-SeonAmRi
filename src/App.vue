<script setup>
import Header from '@/components/layout/Header.vue';
</script>

<template>
  <div>
    <Header/>
    <div class="layout">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';
@import '@/scss/utils.scss';

@include mobile {
    * {
      font-size: 13px;
    }
}

body {
  margin: 0;
}

.layout {
  margin: em(120) 0 0 0;
} 
</style>
