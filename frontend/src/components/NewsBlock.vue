<template>
    <div class="news-block-wrapper">
        <div class="news-header-wrapper">
            <h2 class="news-header">Новости и события</h2>
            <div class="hr"></div>
        </div>
        <div class="news-block-content">
            <NewsItem v-for="i in 10"/>
        </div>
    </div>
</template>

<script setup>
import NewsItem from './NewsItem.vue';

</script>

<style scoped>
.hr {
    width: 100px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4)
}
.news-header-wrapper{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 20px;
}
.news-block-content {
    display: flex;
    padding: 0 50px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.news-block-wrapper{
    color: white;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 50px;
}
.news-header {
    font-size: 30px;
}
</style>