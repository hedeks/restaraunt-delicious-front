<template>
  <div class="news-wrapper">
    <NewsSlider />
    <NewsBlock />
  </div>
</template>

<script setup>
import NewsSlider from '../components/NewsSlider.vue';
import NewsBlock from "../components/NewsBlock.vue";
</script>

<style scoped>
.news-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>