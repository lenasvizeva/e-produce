<template>
    <div class="overlay">
        <div class="modal">

            <button type="button" class="button button--close" @click="close"></button>

            <slot name="body" class="modal__body"></slot>
    
           
        </div>
    </div>
</template>


<script>

export default {
    name: "Modal",
    // data: {
    //     errors: [],
    //     name: '',
    //     email: '',
    //     phone: ''
    // },
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>



<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import "../styles/base.scss";


.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @include mobile {
        align-items: end;
    }
}

.modal {
    max-width: 58rem;
    background: $color-yellow;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 3.5rem;
    border-radius: 36px;
    position: relative;

    @include mobile {
        width: 100%;
        padding: 4rem 2rem;
        border-radius: 14px 14px 0 0;
    }
   
    &__body {
        position: relative;
    }

    &__title {
        font-size: 4.4rem;
        line-height: 5rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 2rem;
        text-align: center;

        @include mobile {
            font-size: 2.8rem;
            line-height: 1;
        }
    }

    &__icon {
        width: 12.6rem;
        height: 12.6rem;
        border-radius: 50%;
        background-color: $color-white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;

        img {
            width: 8.1rem;
            height: 8.1rem;
            object-fit: contain;
        }
    }

    .form {
        width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include mobile {
            width: 100%;
        }

        &__fieldset {
            display: flex;
            flex-direction: column;
            
            .label {
                margin-bottom: 1rem;

                @include mobile {
                    font-size: 1.4rem;
                    font-weight: bold;
                }
            }

            input {
                width: 100%;
                background-color: $color-white;
                border: 2px solid $color-blue;
                border-radius: 14px;
                height: 6rem;
                padding: 1.6rem 6.4rem 1.6rem 2rem;
                display: flex;
                align-items: center;
                font-size: 1.8rem;
                color: $color-black;
                margin-bottom: 1.4rem;

                @include mobile {
                    height: 4.8rem;
                    border-radius: .8rem;
                    padding: 1.5rem .7rem 1.5rem 1.2rem;
                }

                &::placeholder {
                    color: #444444;
                }
            }

            .agreement {
                display: flex;

                .checkbox {
                    width: 2.4rem;
                    height: 2.4rem;
                    display: flex;
                    margin-bottom: 0;
                    appearance: none;
                    padding: 0;
                    border: none;
                    border-radius: 8px;
                    margin-right: 1rem;
                    justify-content: center;
                    align-items: center;

                    &::after {
                        content: '';
                        display: none;
                        width: 11px;
                        height: 9px;
                        background-image: url('../assets/img/check.svg');
                        background-repeat: no-repeat;
                    }

                    &:checked {
                        background-color: $color-blue;
                        
                        &::after {
                            display: block;
                        }
                    }
                }

                .label {
                    max-width: 32.2rem;

                    @include mobile {
                        max-width: 31rem;
                    }

                    a {
                        color: $color-blue;
                        text-decoration: underline;
                    }

                    @include mobile {
                        font-size: 1.6rem;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    .button {
        height: 6rem;
        width: 100%;
        max-width: 40rem;
        font-size: 2.4rem;
        margin-top: 2rem;
        line-height: 2rem;
        font-weight: 700;

        &--close {
            position: absolute;
            top: 2.3rem;
            right: 3rem;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            background-image: url('../assets/img/close.svg');
            background-repeat: no-repeat;
            background-size: 100% 100%;

            @include mobile {
                top: 0;
                right: 1.5rem;
            }
        }

        &--submit {
            margin: 2rem 0;

            @include mobile {
                height: 4.8rem;
                border-radius: .8rem;
                font-size: 1.8rem;
            }
        }
    }

    p {
        font-size: 2.4rem;
        line-height: 3.2rem;
        text-align: center;
        margin: 0;

        @include mobile {
            font-size: 1.6rem;
            font-weight: 400;
        }

        span {
            color: $color-blue;
            text-decoration: underline;
        }
    }
}



</style>