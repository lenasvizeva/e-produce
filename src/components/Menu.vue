<template>
    <div class="menu">
        <ul >
            <li><a href ="/">главная</a></li>
            <li><a href ="#">призы</a></li>
            <li><a href ="#">как участвовать</a></li>
            <li><a href ="#">вопросы и ответы</a></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "Menu"
}

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/base.scss";

.menu ul {
    display: flex;
    align-items: center;

    li {
        margin-right: 4rem;
        list-style: none;

        a {
            font-size: 1.8rem;
            color: $color-black;
            text-transform: uppercase;
            font-weight: 700;
        }
    }
}
</style>