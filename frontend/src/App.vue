<script setup>

</script>

<template>
  <HeaderComponent />
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterComponent />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
body {
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  font-family: "P22 Underground";
  text-transform: uppercase;
  letter-spacing: .2em;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.25;
}
</style>
