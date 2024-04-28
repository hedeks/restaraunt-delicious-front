<template>
    <div class="menu-block-wrapper">
        <MenuFiltersPanel />
        <MenuItemsPanel />
    </div>
</template>

<script setup>
import MenuFiltersPanel from './MenuFiltersPanel.vue';
import MenuItemsPanel from './MenuItemsPanel.vue';

</script>

<style scoped>
.menu-block-wrapper {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 50px;
    width: 100%;
    height: 100%;
}
</style>