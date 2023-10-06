<template>
    <div class="menu">
        <ul>
            <li><a href ="/">главная</a></li>
            <li><a href ="#prizes">призы</a></li>
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

    @include mobile {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }

    @include tablet {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }

    li {
        margin-right: 4rem;
        list-style: none;

        @include mobile {
            margin-bottom: 4rem;
        }
        @include tablet {
            margin-bottom: 4rem;
        }

        a {
            font-size: 1.8rem;
            color: $color-black;
            text-transform: uppercase;
            font-weight: 700;
            transition: all .4s ease-out;

            &:hover {
                color: $color-white;
                transition: all .4s ease-out;
            }
        }
    }
}

</style>