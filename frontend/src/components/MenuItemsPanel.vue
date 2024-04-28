<template>
    <div class="menu-items-panel-wrapper">
        <div class="menu-items-panel-category-names">
            <p ref="all" id="all" @click="selectCategory" class="category-name">All</p>
            <p ref="taco" id="taco" @click="selectCategory" class="category-name">Taco</p>
            <p ref="burrito" id="burrito" @click="selectCategory" class="category-name">Burrito</p>
            <p ref="nachos" id="nachos" @click="selectCategory" class="category-name">Nachos</p>
            <p ref="sides" id="sides" @click="selectCategory" class="category-name">Sides</p>
            <p ref="dessert" id="dessert" @click="selectCategory" class="category-name">Dessert</p>
            <p ref="drink" id="drink" @click="selectCategory" class="category-name">Drink</p>
        </div>
        <div v-if="isLoading" class="loader">

        </div>
        <div v-else class="menu-items-panel-items-wrapper">
            <MenuItem v-for="i in foods" :item_id="i.food_id" :item_img="i.food_src" :item_stars="i.food_star" :item_votes="i.food_vote" :item_price="i.food_price" :item_title="i.food_name" :key="i.food_id" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";
const all = ref();
const taco = ref();
const burrito = ref();
const nachos = ref();
const sides = ref();
const dessert = ref();
const drink = ref();

const namesArray = [all, taco, burrito, nachos, sides, dessert, drink];

const selectCategory = (e) => {
    namesArray.forEach((item) => {
        item.value.classList.remove("active");
    })
    e.target.classList.add('active');
};
let isLoading = ref(true);
let api = "http://localhost:8081/api";
let foods = ref([]);

onMounted(() => {
    fetch(api + "/foods").then((res) => {
        return res.json();
    }).then((data) => {
        setTimeout(() => {
            isLoading.value = false;
            foods.value = data;
            console.log(data)
        }, 1000)
    })
});


</script>

<style scoped>
.loader {
    width: 30px;
    height: 30px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: auto;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.menu-items-panel-wrapper {
    display: flex;
    flex-direction: column;
    width: 60%;
    border: 1px solid white;
    height: 561px;
}

.menu-items-panel-category-names {
    width: 100%;
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    border-bottom: 1px solid white;
}

.menu-items-panel-items-wrapper {
    display: flex;
    padding: 20px;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    overflow-y: scroll;
}

.category-name {
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s ease;
}

.category-name:hover {
    background-color: white;
    color: black;
}

.active {
    background-color: white;
    color: black;
}
</style>