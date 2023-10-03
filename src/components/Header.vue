<template>
    <header class="header">

        <div class="wrapper">
            <div class="logo">
                <img src="../assets/img/logo.svg">
            </div>

            <nav class="nav">
                <ul class="menu">
                    <li><a href ="/">главная</a></li>
                    <li><a href ="#">призы</a></li>
                    <li><a href ="#">как участвовать</a></li>
                    <li><a href ="#">вопросы и ответы</a></li>
                </ul>

                <button class="button button--white button--reg">Личный кабинет</button>
            </nav>
        </div>

    </header>
</template>

<script>

export default {
    name: "Header"
}
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.header {
    position: absolute;
    width: 100%;
    padding-top: 3rem;
    z-index: 2;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        padding: .6rem 0;
    }

    .nav {
        display: flex;

    }

    .menu {
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

    .button--reg {
        width: 21.2rem;
        height: 4.8rem;
        font-size: 1.8rem;
        line-height: 2rem;
        font-weight: 700;
    }
}

</style>
