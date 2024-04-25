<template>
    <div class="header-wrapper">
        <div class="header-links left">
            <router-link class="link" to="/news">НОВОСТИ</router-link>
            <router-link class="link" to="/contacts">КОНТАКТЫ</router-link>
        </div>
        <router-link to="/"> <img src="../assets/logo.png" alt="logo"></router-link>
        <div class="header-links right">
            <router-link class="link" to="/menu">МЕНЮ</router-link>
            <router-link class="link" to="/cart">КОРЗИНА</router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

.header-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
}
.left {
    justify-content: end;
}
.right {
    justify-content: start;
}
.header-links {
    display: flex;
    height: 65px;
    gap: 50px;
    background-color: rgba(0, 0, 0, 0.70);
    width: 100%;
    align-items: center;
    color: white;
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