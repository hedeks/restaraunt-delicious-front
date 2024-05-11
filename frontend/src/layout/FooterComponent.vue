<template>
    <div class="footer-wrapper">
        <div class="review-wrapper">
            <h3 class="review-header">Поделитесь своим впечатлениями</h3>
            <p class="review-label">Оставить отзыв</p>
        </div>
        <div class="alert-wrapper">
            Уважаемые гости! При расчетах в ресторане Вам должны выдать кассовый чек! Если из-за недобросовестности
            нашего сотрудника Вам не выдали кассовый чек, мы вернем Вам деньги.<br>
            Проверить кассовый чек можно по QR-коду через приложение ФНС России «Проверка чека».
        </div>
        <div class="links-list-wrap">
            <router-link class="link" to="/news">НОВОСТИ</router-link>
            <router-link class="link" to="/contacts">КОНТАКТЫ</router-link>
            <router-link class="link" to="/menu">МЕНЮ</router-link>
            <router-link class="link" to="/cart">КОРЗИНА</router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<script>

</script>

<style scoped>
.footer-wrapper {
    margin: 50px 0;
    width: 100%;
    padding: 5px 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.alert-wrapper {
    font-size: 10px;
    text-transform: none;
    text-align: center;
}

.link {
    text-decoration: none;
    color: white;
    transition: all .3s linear;
}

.router-link-active {
    color: red !important;
}

.link:hover {
    opacity: 0.7;
}

.links-list-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.review-wrapper::before {
    width: 33px;
    height: 30px;
    background-position: -16px 0;
    content: '';
    top: 0;
    left: -40px;
    position: absolute;
    background-image: url("src/assets/images/sprite.png");
    background-repeat: no-repeat;
}
.review-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
}
.review-label {
    text-decoration: underline;
}

</style>