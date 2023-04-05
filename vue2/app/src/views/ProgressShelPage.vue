<template>
  <div class="about">
    <h1>Прогресс линии</h1>
      <div style="max-width: 600px;">
      <h2>Первая прогресс линия</h2>
      <h3>Отсутствуют параметры, но использовано хранилище</h3> 
      <ProgressShl v-model="firstProgress" ref="ProgressFirst" />
      <ButtonShl @click="ChangeFirstProgress(-10)">
          -10
      </ButtonShl>
      <ButtonShl @click="ChangeFirstProgress(10)">
          +10
      </ButtonShl>
      <h2>Вторая прогресс линия</h2>
      <h3>Отсутствует текст процентов</h3>
      <ProgressShl v-model="secondProgress" :showPercentage="false" ref="ProgressSecond" />
      <ButtonShl @click="ChangeSecondProgress(-15)">
          -15
      </ButtonShl>
      <ButtonShl @click="ChangeSecondProgress(15)">
          +15
      </ButtonShl>
      <h2>Третья прогресс линия</h2>
      <h3>Изменена высота, ширина и с функцией анимации: cubic-bezier(.29, 1.01, 1, -0.68)</h3>
      <ProgressShl
          v-model="thirdProgress"
          :progressHeight="30"
          :progressWidth="500"
          :timingFunction="'cubic-bezier(.29, 1.01, 1, -0.68)'"
          ref="ProgressThird"
      />
      <ButtonShl @click="ChangeThirdProgress(-20)">
          -20
      </ButtonShl>
      <ButtonShl @click="ChangeThirdProgress(20)">
          +20
      </ButtonShl>
      <h2>Четвертая прогресс линия</h2>
      <h3>Изменена скорость анимации, с функцией анимации: steps(6, end), изменен цвет прогресс линии</h3>
      <ProgressShl
          v-model="fourthProgress"
          :changeTime="1"
          :timingFunction="'steps(6, end)'"
          :colorFunc=CustomColorMethod
          ref="ProgressFourth"
      />
      <ButtonShl @click="ChangeFourthProgress(-25)">
          -25
      </ButtonShl>
      <ButtonShl @click="ChangeFourthProgress(25)">
          +25
      </ButtonShl>
      <h2>Пятая прогресс линия</h2>
      <h3>Изменен цвет подложки</h3>
      <ProgressShl
          v-model="fifthProgress"
          :innerStrokeColor="'#ffa500'"
          ref="ProgressFifth"
      />
      <ButtonShl @click="ChangeFifthProgress(-30)">
          -30
      </ButtonShl>
      <ButtonShl @click="ChangeFifthProgress(30)">
          +30
      </ButtonShl>
    </div>
  </div>
</template>
  
  <script>
  import ButtonShl from "../../../components/button/Button.vue";
  import ProgressShl from "../../../components/progressShel/ProgressShel.vue";
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    name: "SelectPage",
    components: {
      ProgressShl,
      ButtonShl
    },
    data() {
      return {
        secondProgress: 44,
        thirdProgress: 78,
        fourthProgress: 19,
        fifthProgress: 56
      }
    },
    computed: {
      ...mapGetters('progress', [
        'getProgressValue'
      ]),
      firstProgress: {
        get() {
          return this.getProgressValue;
        },
        set(val) {
          this.setProgressValue(val);
        }
      }
    },
    methods: {
      ...mapActions('progress', [
        'setProgressValue'
      ]),
      ChangeFirstProgress(changeValue) {
        this.$refs.ProgressFirst.changePercentage(changeValue);
      },
      ChangeSecondProgress(changeValue) {
        this.$refs.ProgressSecond.changePercentage(changeValue);
      },
      ChangeThirdProgress(changeValue) {
        this.$refs.ProgressThird.changePercentage(changeValue);
      },
      ChangeFourthProgress(changeValue) {
        this.$refs.ProgressFourth.changePercentage(changeValue);
      },
      ChangeFifthProgress(changeValue) {
        this.$refs.ProgressFifth.changePercentage(changeValue);
      },
      CustomColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399'
        }
        if (percentage < 70) {
          return '#e6a23c'
        }
        return '#67c23a'
      }
    }
  }
  </script>