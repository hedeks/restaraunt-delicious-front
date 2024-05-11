<template>
    <div class="header-wrapper">
        <div class="header-links left">
            <router-link class="link" to="/news">НОВОСТИ</router-link>
            <router-link class="link" to="/contacts">КОНТАКТЫ</router-link>
        </div>
        <router-link to="/news"> <img src="../assets/logo.png" alt="logo"></router-link>
        <div class="header-links right">
            <router-link class="link" to="/menu">МЕНЮ</router-link>
            <router-link class="link" to="/cart">КОРЗИНА</router-link>
        </div>
    </div>
</template>

<script setup>

import { computed } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();

const path = computed(() => {
    return route.path;
});


</script>

<style scoped>
.header-wrapper {
    z-index: 1000;
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
}

.router-link-active {
    color: red !important;
}

.left {
    justify-content: end;
}

.right {
    justify-content: start;
}

.header-links {
    display: flex;
    height: 60px !important;
    padding: 0 50px;
    gap: 50px;
    background-color: rgba(0, 0, 0, 0.80);
    width: 100%;
    align-items: center;
    color: white;
    font-size: 16px;
}

.link {
    text-decoration: none;
    color: white;
    transition: all .3s linear;
}

.link:hover {
    opacity: 0.7;
}
</style>