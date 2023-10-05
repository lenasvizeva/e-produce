<template>
  <div class="home-page">

    <div class="hero" id="hero">

      <div class="hero__title">
        <h1>участвуй в акции и выигрывай призы!</h1>

        <button class="button button--blue" @click="showModal">участвовать</button>
      </div>


      <div class="promo promo--bottle">
        <img src="../assets/img/bottle.png" />
      </div>

      <div class="promo promo--prizes">
        <img src="../assets/img/super.png" />
      </div>

      <div class="promo promo--main">
        <img src="../assets/img/main_price.svg" />
      </div>

    </div>


    <div class="prizes">
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

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:body>

        <form id="regForm" name="regForm" class="form" @submit.prevent="submitForm">

          <span class="modal__title">регистрация</span>

          <div class="form__fieldset">

              <label for="name" class="label">ФИО</label>
              <input type="text" v-model="name" name="name" id="name" placeholder="Николаев Дмитрий Сергеевич" required />
              

              <label for="email" class="label">E-mail</label>
              <input type="email" v-model="email" name="email" id="email" placeholder="username@gmail.com" required />
              

              <label for="phone" class="label">Телефон</label>
              <input type="tel" v-model="phone" name="phone" id="phone" placeholder="+7" required />
              
              
              <div class="agreement">
                <input type="checkbox" v-model="agree" id="agree" name="agree" class="checkbox" required>
                <span class="checkmark"></span>
                <label for="agree" class="label">Я согласен с <a href="#">правилами акции</a>, <a href="#">пользовательским соглашением</a> и с <a href="#">положением о конфиденциальности</a></label>         
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
          <img src="../assets/img/check-circle.svg"  />
        </div>
       
        <span class="modal__title">Ваша регистрация прошла успешно!</span>

        <p>Добро пожаловать, ФИО, указанное при регистрации!</p>

        <button class="button button--blue button--submit" @click="closeModal">Закрыть окно</button>

      </template>
    </Modal>

  </div>
</template>


<script>
import axios from 'axios'
import Modal from '../components/Modal.vue'

export default {
  name: "homePage",
  components: { Modal },
  data() {
    return {
      isModalVisible: false,
      isRegFinish: false,
      success: false,
      errors: [],
      name: null,
      email: '',
      phone: '',
      agree: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    async submitForm() {
      console.log(this.name, this.email, this.agree)

      await axios.post('https://promo-test.emlsdr.ru/backend/api/registerByEmail',
      { login: this.email, 
        name: this.name, 
        phone: this.phone, 
        rules1: this.agree
      }).then(response => {
          console.log(response);

          if (response.status == 201) {
            alert('success')
          } else {
            alert('fail')
          }
      })
      // this.email = '',
      // this.name = '',
      // this.phone = '',
      // this.agree = ''
    }
  }
}
</script>




<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/base.scss";
@import "../styles/mixins.scss";

.home-page {
  .hero {
    width: 100%;
    height: 100vh;
    background-color: #B1C728;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

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

    @include mobile {
      padding-top: 5rem;
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

    &__title {
      font-size: 2.8rem;
      line-height: 1;
      margin: 0;
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