<template>
    <div class="menu-filters-panel-wrapper">
        <div class="menu-filters-panel-category-names">
            <div class="menu-filters-panel-first-category category">
                <h3 class="category-header">Status</h3>
                <h4 class="category-link status" @click="selectCategory" ref="best_seller" id="best seller">Best seller</h4>
                <h4 class="category-link status" @click="selectCategory" ref="online_only" id="online only">Online Only</h4>
                <h4 class="category-link status" @click="selectCategory" ref="sale_off" id="sale off">Sale Off</h4>
                <h4 class="category-link status" @click="selectCategory" ref="seasonal_dishes" id="seasonal dishes">Seasonal Dishes</h4>
                <h4 class="category-link status" @click="selectCategory" ref="new_dishes" id="new dishes">New Dishes</h4>
            </div>
            <div class="menu-filters-panel-second-category category">
                <h3 class="category-header">Price</h3>
                <h4 class="category-link price" @click="selectCategory" ref="f2t5" id="f2t5">$2 - $5</h4>
                <h4 class="category-link price" @click="selectCategory" ref="f2t10" id="f2t10">$5 - $10</h4>
                <h4 class="category-link price" @click="selectCategory" ref="f10t12" id="f10t12">$10 - $12</h4>
                <h4 class="category-link price" @click="selectCategory" ref="m12" id="m12"> > $12</h4>
            </div>
            <div class="menu-filters-panel-third-category category">
                <h3 class="category-header">Type</h3>
                <h4 class="category-link type" @click="selectCategory" ref="vegan" id="vegan">Vegan</h4>
                <h4 class="category-link type" @click="selectCategory" ref="meat" id="meat">Meat</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const best_seller = ref();
const online_only = ref();
const sale_off = ref();
const seasonal_dishes = ref();
const new_dishes = ref();
const f2t5 = ref();
const f2t10 = ref();
const f10t12 = ref();
const m12 = ref();
const vegan = ref();
const meat = ref();

let priceArray = [f2t5, f2t10, f10t12, m12];

const selectCategory = (e) => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
    } else {
        if (e.target.classList.contains('price')) {
            priceArray.forEach((item)=>item.value.classList.remove('active'));
        }
        e.target.classList.add('active');
    }
};


</script>

<style scoped>
.menu-filters-panel-wrapper {
    width: 30%;
    border: 1px solid white;
    height: 561px;
}
.menu-filters-panel-category-names {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    gap: 20px;
    align-items: center;
    width: 100% !important;
    text-transform: none;
}
.active {
    background-color: white;
    color: black;
}
.category-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    padding: 2px 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.category-header{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    width: 100% !important;
    font-weight: 300;
    font-size: 20px;
    padding: 5px 20px;
    text-transform: uppercase;
}
.category{
    width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>