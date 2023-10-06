<template>
    <header class="header">

        <div class="wrapper">
            <a href="#" class="logo">
                <img src="../assets/img/logo.svg">
            </a>

            <nav class="nav" :class="isMobileMenu ? 'mobile' : ''">

                <Menu @closeMenu="closeMenu"></Menu>

                <button class="button button--white button--reg" @click="showModal">Личный кабинет</button>

                <button type="button" 
                        class="button button--close" 
                        @click="closeMenu"
                        v-show="isMobileMenu">
                </button>
            </nav>

            <button class="button button--mobile" @click="showMobileMenu">
                <img src="../assets/img/burger.svg" alt="mobile menu button" />
            </button>  

        </div>

    </header>
</template>

<script>
import Menu from './Menu.vue'
import { EventBus } from '../event-bus.js';

export default {
    name: "Header",
    components: {
        Menu
    },
    data() {
        return {
            isMobileMenu: false,
            isModalOpen: false
        };
    },
    methods: {
        showModal() {
            EventBus.$emit('showModal', this.isModalOpen = true);
        },
        showMobileMenu() {
            EventBus.$emit('showMobileMenu', this.isMobileMenu = true)
        },
        closeMenu() {
            EventBus.$emit('showMobileMenu', this.isMobileMenu = false)
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

    @include mobile {
        padding-top: 2rem;
    }

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include mobile {
            align-items: flex-start;
        }
    }

    .logo {
        padding: .6rem 0;
    }

    .nav {
        display: flex;

        &::after {
            content: '';
            display: none;
            background-image: url('../assets/img/leaf2.png');
            background-repeat: no-repeat;
            background-size: cover;
            width: 20.2rem;
            height: 18.2rem;
            position: absolute;
            bottom: 9rem;
            right: 0;
            z-index: 20;
            animation: fadeInScale .5s ease-in-out 1 both;

            @include mobile {
                display: block;
            }
        }

        @include mobile {
            display: none;
        }
        @include tablet {
            display: none;
        }

        &.mobile {
            display: flex;
            flex-direction: column;
            background-color: $color-white;
            position: absolute;
            top: -2rem;
            right: 0;
            width: 90vw;
            height: 100vh;
            z-index: 20;
            padding: 0 2rem;
            padding-top: 7rem;
            align-items: flex-start;

            @include tablet {
                top: -3rem;
            }

            
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
            width: 100%;
        }
        @include tablet {
            background-color: $color-blue;
            color: $color-white;
            width: 50%;
        }
    }

    .button--close {
        display: block;
        position: absolute;
        width: 3rem;
        height: 3rem;
        background-image: url('../assets/img/close.svg');
        background-repeat: no-repeat;
        top: 2rem;
        right: 2rem;
        background-size: contain;
    }
}

</style>
