<template>
    <div class="footer">

        <!-- <Menu></Menu> -->

        <div class="menu">
            <ul>
                <li><a href ="/">главная</a></li>
                <li><a href ="#">призы</a></li>
                <li><a href ="#">как участвовать</a></li>
                <li><a href ="#">вопросы и ответы</a></li>
            </ul>
        </div>

    </div>
    
</template>


<script>
import Menu from './Menu.vue'

export default {
    name: "Footer",
    components: {
        Menu
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/base.scss";

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;

    @include mobile {
        padding-bottom: 1rem;
    }

    .menu ul {
        display: flex;
        align-items: center;

        @include mobile {
            flex-direction: column;
            align-items: center;
            padding: 0;
        }

        li {
            margin-right: 4rem;
            list-style: none;

            @include mobile {
                margin-right: 0;
                margin-bottom: 4rem;
            }

            a {
                font-size: 1.8rem;
                color: $color-black;
                text-transform: uppercase;
                font-weight: 700;
                transition: all .4s ease-out;
                
                &:hover {
                    color: $color-blue;
                    transition: all .4s ease-out;
                }
            }
        }
    }
}



</style>