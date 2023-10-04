<template>
    <header class="header">

        <div class="wrapper">
            <div class="logo">
                <img src="../assets/img/logo.svg">
            </div>

            <nav class="nav">

                <Menu></Menu>

                <button class="button button--white button--reg" @click="showModal">Личный кабинет</button>
            </nav>

            

            <button class="button button--mobile" @click="mobileMenuToggle">
                <img src="../assets/img/burger.svg" alt="mobile menu button" />
            </button>  

        </div>

    </header>
</template>

<script>
import Menu from './Menu.vue'

export default {
    name: "Header",
    components: {
        Menu
    },
    methods: {
        showModal() {
            this.$emit('showModal');
        },
        mobileMenuToggle() {
            this.$emit('showMobileMenu')
        }
    },

}
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/base.scss";

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

        @include mobile {
            flex-direction: column;
            background-color: $color-white;
            position: absolute;
            top: -3rem;
            right: 0;
            width: 90vw;
            height: 100vh;
            z-index: 20;
            padding: 0 2rem;
            padding-top: 7rem;
            align-items: flex-start;
            
        }
    }

    .button--reg {
        width: 21.2rem;
        height: 4.8rem;
        font-size: 1.8rem;
        line-height: 2rem;
        font-weight: 700;

        @include mobile {
            background-color: $color-blue;
            color: $color-white;
        }
    }
}

</style>
