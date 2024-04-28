<template>
  <div class="menu-wrapper">
    <img class="menu-img" src="/src/assets/images/blog-1.jpg" alt="dwadw">
    <h1 class="menu-header">Наши специальные блюда</h1>
    <div class="hr"></div>
    <MenuBlock />
  </div>
</template>


<script setup>
import MenuBlock from '../components/MenuBlock.vue';

</script>

<style scoped>
.menu-wrapper {
  color: white;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}
.hr {
    width: 100px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4)
}
.menu-img {
  object-fit: cover;
  width: 100vw;
  height: 150px;
}
.menu-header{
  display:flex;
}
</style>