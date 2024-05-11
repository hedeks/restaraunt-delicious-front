<template>
    <div class="news-item-wrapper" ref="wrapper" @mouseover="toWhite" @mouseout="toBlack">
        <div class="news-item-image-wrapper">
            <img class="news-item-image" height="auto" src="https://rappoport.restaurant/upload/65b8f46c3c677.jpg" alt="dwadw">
        </div>
        <div class="news-item-post">
            <h3>
                10 лет. Грандиозное празднование юбилея ресторана “Китайская Грамота. Бар и Еда” в Китайский Новый год
            </h3>
        </div>
        <div ref="button" class="news-item-button">Подробнее</div>
    </div>
</template>

<script setup>

import {ref} from "vue"

const wrapper = ref();
const button = ref();

const toBlack = ()=>{
    button.value.style.color = "black";
    wrapper.value.style.backgroundColor = "black";
    wrapper.value.style.color = "white";
};

const toWhite = ()=>{
    button.value.style.color = "white";
    wrapper.value.style.backgroundColor = "white";
    wrapper.value.style.color = "black";
};
</script>

<style scoped>
.news-item-wrapper{
    width: 392px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    transition: all 0.3s ease;
    gap: 20px;
}
.news-item-button {
    background-color: black;
    border: 1px solid black;
    color: black;
    border-radius: 30px;
    padding: 15px 25px 12px;
    align-self: start;
    width: 156px;
    height: 41px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
};
.news-item-post {
    display: flex;
    width: calc(392px - 50px);
}
.news-item-image {
    width: calc(392px - 50px);
}
</style>