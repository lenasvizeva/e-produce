<template>
  <div class="home-page">

    <!-- page header  -->
    <header class="header">

      <div class="wrapper">
        <a href="#" class="logo">
            <img src="../assets/img/logo.svg" alt="logo">
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

        <div class="overlay" v-show="isMobileMenu"></div>

        <button class="button button--mobile" @click="showMobileMenu">
            <img src="../assets/img/burger.svg" alt="mobile menu button" />
        </button>  

      </div>

    </header>

    <!-- page content -->

    <div class="hero" id="hero">

      <div class="hero__title">
        <h1>участвуй в акции и выигрывай призы!</h1>

        <button class="button button--blue" @click="showModal">участвовать</button>
      </div>


      <div class="promo promo--bottle">
        <picture>
            <source srcset="../assets/img/bottle_mobile.webp" media="(max-width: 767px)">
            <source srcset="../assets/img/bottle.webp">
            <img src="../assets/img/bottle.webp" alt="promo image">
        </picture>
      </div>

      <div class="promo promo--prizes">
        <picture>
            <source srcset="../assets/img/super_mobile.webp" media="(max-width: 767px)">
            <source srcset="../assets/img/super.webp">
            <img src="../assets/img/super.webp" alt="promo image">
        </picture>
      </div>

      <div class="promo promo--main">
        <img src="../assets/img/main_price.svg" alt="promo image" />
      </div>

    </div>


    <div class="prizes" id="prizes">
      <div class="wrapper">

        <h2 class="prizes__title h2">Выигрывай призы</h2>

        <h3 class="h3">Гарантированный приз</h3>

        <div class="two-column">
          <div class="two-column__img">
            <img src="../assets/img/subs.png" width="295" height="214" alt="subscribes icon" />
          </div>
          
          <div class="two-column__text">
            <p>Зарегистрируйте один чек и получите подписку Яндекс Плюс на 1 год</p>
          </div>
        </div>

        <h3 class="h3">Ежемесячный приз</h3>

        <div class="cards">

          <div class="cards__item">
            <img src="../assets/img/scooter.png" alt="scooter" />
            <p>Электросамокат</p>
          </div>

          <div class="cards__item">
            <img src="../assets/img/alisa.png" alt="alisa" />
            <p>Колонка</p>
          </div>

          <div class="cards__item">
            <img src="../assets/img/watch.png" alt="watch" />
            <p>Смарт часы</p>
          </div>

        </div>

        <button class="button button--blue button--check" @click="showModal">Загрузить чек</button>
        
      </div>
    </div>


    <!-- modals -->

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:body>

        <form v-show="isModalVisible && !isRegFinish" id="regForm" name="regForm" class="form" @submit.prevent="submitForm" novalidate>

          <span class="modal__title">регистрация</span>

          <div class="form__fieldset">

            <label for="name" class="label">ФИО</label>
            
            <input type="text" 
                    v-model="userData.name.value" 
                    name="name" 
                    id="name" 
                    :class="userData.name.error ? 'invalid' : ''" 
                    placeholder="Николаев Дмитрий Сергеевич" 
                    @focus="userData.name.error = ''"
                    @blur="onBlur"
                    required />
            
            <p v-show="userData.name.error" class="error">{{ `${userData.name.error}` }}</p>
            
          
            <label for="email" class="label">E-mail</label>
            <input type="email" 
                    v-model="userData.email.value" 
                    name="email" 
                    id="email"
                    :class="userData.email.error ? 'invalid' : ''" 
                    placeholder="username@gmail.com"
                    @blur="onBlur"
                    @focus="userData.email.error = ''"
                    required />
            
            <p v-show="userData.email.error" class="error">{{ `${userData.email.error}` }}</p>
          
             
            <label for="phone" class="label">Телефон</label>
            <input type="tel" 
                    v-model="userData.phone.value" 
                    name="phone" 
                    id="phone"
                    :class="userData.phone.error ? 'invalid' : ''" 
                    placeholder="+7"
                    @focus="userData.phone.error = ''"
                    @blur="onBlur"
                    required />
            
            <p v-show="userData.phone.error" class="error">{{ `${userData.phone.error}` }}</p>
            
            
            <div class="agreement">
              <input type="checkbox" 
                      v-model="userData.agree.value" 
                      id="agree" 
                      name="agree" 
                      class="checkbox" 
                      :class="userData.agree.error ? 'invalid' : ''"
                      @focus="userData.agree.error = ''"
                      @blur="onBlur" 
                      required>

              <span class="checkmark"></span>
              <label for="agree" class="label">Я согласен с <a href="#">правилами акции</a>, 
                                                            <a href="#">пользовательским соглашением</a> и с 
                                                            <a href="#">положением о конфиденциальности</a>                                         
              </label>
              <p v-show="userData.agree.error" class="error">{{ `${userData.agree.error}` }}</p>   
              
              
            </div>

            <button type="submit" class="button button--blue button--submit">Зарегистрироваться</button>

            <p>Есть аккаунт? <span>Авторизуйся</span></p>
          </div>
        </form>

      </template>
    </Modal>


    <Modal v-show="isRegFinish" @close="closeModal">
      <template v-slot:body>

        <div class="modal__icon">
          <img src="../assets/img/check-circle.svg" alt="ok icon" />
        </div>
       
        <span class="modal__title">Ваша регистрация прошла успешно!</span>

        <p>Добро пожаловать, {{ userData.name.value }}!</p>

        <button class="button button--blue button--submit" @click="closeModal">Закрыть окно</button>

      </template>
    </Modal>

  </div>
</template>


<script>
import axios from 'axios'
import Modal from '../components/Modal.vue'
import Menu from '../components/Menu.vue'

export default {
  name: "homePage",
  components: { 
    Modal, 
    Menu 
  },
  data() {
    return {
      isMobileMenu: false,
      isModalVisible: false,
      isRegFinish: false,
      userData: {
        name: {
          value: '',
          error: ''
        },
        email: {
          value: '',
          error: ''
        },
        phone: {
          value: '',
          error: ''
        },
        agree: {
          value: false,
          error: ''
        }
      },
      result: false
    }
  },
  methods: {
    showMobileMenu() {
      this.isMobileMenu = true
      document.getElementById('body').classList.add('fixed')
    },
    closeMenu() {
      this.isMobileMenu = false
      document.getElementById('body').classList.remove('fixed')
    },
    showModal() {
      this.isModalVisible = true

      document.getElementById('body').classList.add('fixed')
    },
    closeModal() {
      this.isModalVisible = false
      this.isRegFinish = false

      this.userData.email.value = '',
      this.userData.name.value = '',
      this.userData.phone.value = '',
      this.userData.agree.value = ''

      this.resetErrors()

      document.getElementById('body').classList.remove('fixed')
    },
    resetErrors() {
      this.userData.email.error = ''
      this.userData.name.error = ''
      this.userData.phone.error = ''
      this.userData.agree.error = ''
    },

    onBlur(e) {
      let fieldValue = e.target.value;
      if (!fieldValue) {
        e.target.classList.add('invalid')
      }
    }, 
    
    async submitForm() {

      const url = 'https://promo-test.emlsdr.ru/backend/api/registerByEmail'

      let data = {
        login: this.userData.email.value, 
        name: this.userData.name.value, 
        phone: this.userData.phone.value, 
        rules1: this.userData.agree.value,
      }
      let options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded", "accept": "application/json"},
        data: data,
        url
      }
      await axios(options)
        .then(res => {
          
          if (res.data.result) {
            this.isRegFinish = true
            
            this.resetErrors()
          } 
          
          let { login, name, phone, rules1 } = res.data.error

          this.userData.email.error = login
          this.userData.name.error = name
          this.userData.phone.error = phone
          this.userData.agree.error = rules1

        }).catch(er => {
          console.log(er);
        })
        
      }
    }
}
</script>


<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/base.scss";
@import "../styles/mixins.scss";

.home-page {

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

        &::after {
          content: '';
          display: block;
          background-image: url('../assets/img/leaf2.png');
          background-repeat: no-repeat;
          background-size: cover;
          width: 20.2rem;
          height: 30.3rem;
          position: absolute;
          bottom: 2vw;
          right: 0;
          z-index: 0;
          animation: fadeInScale .5s ease-in-out 1 both;

          @include tablet {
            width: 30vw;
            height: 50vw;
            bottom: 6vw;
          }

        }

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

  .hero {
    width: 100%;
    height: 100vh;
    background-color: #B1C728;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    &::before {
      content: '';
      display: block;
      background-image: url('../assets/img/leaf.png');
      background-repeat: no-repeat;
      background-size: cover;
      width: 14.8rem;
      height: 14.8rem;
      position: absolute;
      top: 9.8rem;
      right: 1.6rem;
      z-index: 0;
      animation: fadeInScale .5s ease-in-out 1 both;

      @include mobile {
        display: none;
      }
    }

    &::after {
      content: '';
      display: block;
      background-image: url('../assets/img/bubbles.png');
      background-repeat: no-repeat;
      background-size: cover;
      width: 38.8rem;
      height: 16.4rem;
      position: absolute;
      bottom: 30rem;
      right: -1.6rem;
      z-index: 0;
      animation: fadeInScale .5s ease-in-out 1 both;

      @include mobile {
        display: none;
      }
    }

    @include tablet {
      max-height: 100vw;
    }

    &__title {
      margin-top: 6.8vw;
      max-width: 23vw;
      text-align: center;
      color: $color-white;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      animation: fadeInScale .5s ease-in-out .5s 1 both;

      @include mobile {
        width: 100%;
        margin: auto;
      }
      @include tablet {
        margin-top: 11rem;
        max-width: 30rem;
        
      }

      h1 {
        font-size: 3.5vw;
        line-height: 4.5vw;

        @include mobile {
          font-size: 2.8rem;
          line-height: 110%;
          width: 79vw;
          margin-top: 28vw;
          margin-bottom: 1rem;
        }
        @include tablet {
          font-size: 4rem;
          line-height: 5rem;

        }
      }
    }
    .button {
      width: 29.6rem;
      height: 8rem;
      font-size: 3rem;
      font-weight: bold;
      margin-top: 2.7rem;

      @include mobile {
        width: 90vw;
        height: 5.2rem;
        margin: 0;
        font-size: 2rem;
      }
      @include tablet {
        height: 7rem;
        font-size: 2.7rem;
      }
    }

    .promo  {
      position: absolute;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &--bottle {
        height: 42vw;
        width: auto;
        bottom: 0;
        left: 8vw;
        animation: slidingUpLeft .7s ease-in-out 1 both;

        @include mobile {
          height: 30%;
          left: 20vw;
          top: auto;
        }

        @include tablet {
          height: 45vh;
          left: -15rem;
        }
      }

      &--prizes {
        width: 29vw;
        height: auto;
        bottom: 6.3rem;
        right: 8vw;
        animation: slidingRight .5s ease-in-out .6s 1 both;

        @include mobile {
          width: 33vh;
          top: 22vw;
          left: 5vw;
          bottom: auto;
          right: auto;
        }

        @include tablet {
          width: 37vw;
          bottom: 5rem;
          right: 5vw;      
        }
      }

      &--main {
        width: 19vw;
        height: auto;
        top: 12.5rem;
        right: 14vw;
        animation: slidingRight .5s ease-in-out 1s 1 both;

        @include mobile {
          width: 17rem;
          height: auto;
          top: 15vh;
          right: 2rem;
        }

        @include tablet {
          width: 25vw;
          right: 5vw;
          top: 20rem;
        }
      }
    }

    &::-webkit-scrollbar {
      opacity: 0;
    }
  }

  .prizes {
    padding-top: 10rem;
    position: relative;

    @include mobile {
      padding-top: 5rem;
    }

    &::before {
      content: '';
      display: block;
      background-image: url('../assets/img/el3.svg');
      background-repeat: no-repeat;
      background-size: cover;
      width: 14.7rem;
      height: 12.2rem;
      position: absolute;
      top: 9rem;
      left: 19.6rem;
      z-index: 0;
      animation: fadeInScale .5s ease-in-out 1 both;

      @include mobile {
        display: none;
      }
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .h3 {
        margin: 4rem 0 3rem 0;

        @include mobile {
          font-size: 2rem;
          margin: 0;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }
      }
    }

    .two-column {
      width: 100%;
      background-color: #F6F6F6;
      border-radius: 3.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4.2rem 0 4.4rem 0;

      &__text {
        max-width: 28.3rem;
        margin-left: 13.3rem;

        @include mobile {
          width: 46%;
          margin-left: 2.4rem;
        }

        p {
          @include mobile {
            font-size: 1.6rem;
            line-height: 120%;
          }
        }
      }

      &__img {
        
        @include mobile {
          width: 33%;
        }

        img {
          @include mobile {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }
    }

    .cards {
      display: flex;
      gap: 4rem;
      width: 100%;
      margin-bottom: 9.6rem;

      @include mobile {
        flex-direction: column;  
        gap: 3rem;
        margin-bottom: 5rem;  
      }

      &__item {
        flex-basis: auto;
        flex-grow: 1;
        flex-shrink: 1;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @include mobile {
          width: 100%;
          align-items: center;
          flex-direction: row;
          
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 30rem;
          border-radius: 3.6rem;
          background-color: $color-yellow;
          position: absolute;
          bottom: -4.8rem;
          z-index: -1;

          @include mobile {
            height: 11rem;
            border-radius: 2rem;
            bottom: -1.8rem;
          }
        }

        img {
          height: 28.3rem;
          width: auto;
          object-fit: contain;
          margin-bottom: 4.3rem;

          @include mobile {
            height: 33vw;
            width: 11.5rem;
            margin: 0 2.4rem;
          }

          @include tablet {
            height: 26vw;
          }
        }

        p {
          @include mobile {
            font-size: 1.6rem;
            line-height: 1.8rem;
            margin-top: 5rem;
          }
        }
      }
    }

    .button--check {
      width: 30rem;
      height: 6rem;
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 8rem;

      @include mobile {
        width: 100%;
        height: 5.2rem;
        margin-bottom: 5rem;
        font-size: 2rem;
      }
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin: 0;    
    }
  }

}
</style>