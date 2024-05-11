<template>
    <div class="menu-item" :id="props.item_id">
        <img class="item-img" :src="'src/assets/images/' + props.item_img" :alt="props.item_img">
        <h3 class="item-title">{{ props.item_title }}</h3>
        <span class="item-stars">stars: {{ props.item_stars }}</span>
        <span class="item-votes">votes: {{ props.item_votes }}</span>
        <h3 class="item-price">price: <b>{{ props.item_price }}</b></h3>
        <div class="item-button">Добавить в корзину</div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    item_id: Number,
    item_img: String,
    item_title: String,
    item_stars: String,
    item_votes: String,
    item_price: String,
});

</script>

<style scoped>
.item-price {
    font-weight: 500;
}
.item-title{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 41px;
    font-weight: 400;
}
.menu-item {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    gap: 10px;
    padding: 10px 20px;
    text-align: center;
    background-color: black;
    color: white;
    border: 1px solid white;
}
.item-img {
    width: auto;
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    border: 1px solid white;
    border-radius: 20px;
    background-color: grey;
}
.item-button {
    border: 1px solid white;
    background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 35px;
    font-size: 12px;
    letter-spacing: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
}
.item-button:hover {
    color:white;
    background-color: black;
    border: 1px solid white;
}
</style>