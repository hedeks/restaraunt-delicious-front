<template>
    <div class="news-slider-wrapper">
        <img :src=currentPath ref="img" @click="changeSlide" class="slider-img" alt="">
    </div>
</template>

<script setup>

import { ref } from 'vue';

const slides = [
    "src/assets/images/slider/1.png",
    "src/assets/images/slider/2.jpg",
    "src/assets/images/slider/3.webp",
    "src/assets/images/slider/4.jpg",
    "src/assets/images/slider/5.jpg",
]

const img = ref();
let currentSlide = 0;
let currentPath = ref(slides[currentSlide]);
let timeout;
const changeSlide = async ()=>{
    clearTimeout(timeout);
    img.value.style.opacity = 0;
    if (slides[currentSlide + 1]) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    timeout = setTimeout(()=>{
        currentPath.value = slides[currentSlide];
        setTimeout(()=>{
            img.value.style.opacity = 1;
        },200)
    }, 510)
};

</script>

<style scoped>
.news-slider-wrapper {
    height: 650px;
}
.slider-img{
    object-fit:cover;
    width: 100vw;
    height: 650px;
    transition: all .5s linear;
}
</style>