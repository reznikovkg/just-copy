<template>
  <div class="calendar">
    <input
      v-model="inputDate"
      type="text"
      placeholder="YYYY-MM-DD"
      class="calendar__input"
      @focus="() => openCalendar()"
      @input="() => validateAndUpdateDate()"
      @keydown.enter="() => handleEnter()"
    />
    <button class="clear-button" @click="() => clearInput()">✖</button>

    <div v-if="showCalendar" class="calendar__dropdown">
      <div class="calendar__header">
        <template v-if="showYearPicker">
          <button class="calendar__button" @click="() => changeYearRange(-1)">‹</button>
          <span>{{ yearRangeStart }} - {{ yearRangeEnd }}</span>
          <button class="calendar__button" @click="() => changeYearRange(1)">›</button>
        </template>

        <template v-else-if="showMonthPicker">
          <button class="calendar__button" @click="() => changeYear(-1)">«</button>
          <span>{{ currentYear }}</span>
          <button class="calendar__button" @click="() => changeYear(1)">»</button>
        </template>

        <template v-else>
          <button class="calendar__button" @click="() => changeYear(-1)">«</button>
          <button
             v-if="!showMonthPicker && !showYearPicker"
            class="calendar__button"
            @click="() => changeMonth(-1)"
          >
            ‹
          </button>
          <span @click="() => toggleYearPicker()">{{ monthNames[currentMonth] }} {{ currentYear }}</span>
          <button
            v-if="!showMonthPicker && !showYearPicker"
            class="calendar__button"
            @click="() => changeMonth(1)"
          >
            ›
          </button>
          <button class="calendar__button" @click="() => changeYear(1)">»</button>
        </template>
      </div>

      <div v-if="showYearPicker" class="calendar__grid-mini">
        <div
          v-for="year in yearRange"
          class="day"
          :key="year"
          @click="() => selectYear(year)"
        >
          {{ year }}
        </div>
      </div>

      <div v-if="showMonthPicker" class="calendar__grid-mini">
        <div
          class="day"
          v-for="(month, index) in monthNames"
          :key="index"
          @click="() => selectMonth(index)"
        >
          {{ month }}
        </div>
      </div>

      <div v-if="!showMonthPicker && !showYearPicker" class="calendar__grid">
        <div class="day__name" v-for="day in dayNames" :key="day">{{ day }}</div>
        <div
          class="day"
          v-for="(date, index) in fullMonthDays"
          :key="index"
          :class="{
            'day--other-month': date.isOtherMonth,
            'day--selected': isSelectedDay(date.day) && !date.isOtherMonth
          }"
          @click="() => handleDateClick(date)"
        >
          {{ date.day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      inputDate: '',
      selectedDay: null,
      showCalendar: false,
      showMonthPicker: false,
      showYearPicker: false,
      yearRangeStart: new Date().getFullYear() - 4,
      yearRangeEnd: new Date().getFullYear() + 5
    }
  },
  computed: {
    dayNames() {
      return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', "Вс"]
    },
    monthNames() {
      return ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']
    },
    daysInMonth() {
      const date = new Date(this.currentYear, this.currentMonth + 1, 0)
      return Array.from({ length: date.getDate() }, (_, i) => ({
        day: i + 1,
        isOtherMonth: false
      }))
    },
    blanks() {
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const adjustedFirstDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
      return Array.from({ length: adjustedFirstDay });
    },
    fullMonthDays() {
      const previousMonthDays = this.getPreviousMonthDays()
      const currentMonthDays = this.daysInMonth
      const nextMonthDays = this.getNextMonthDays()
      return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays]
    },
    yearRange() {
      const years = []
      for (let i = this.yearRangeStart; i <= this.yearRangeEnd; i++) {
        years.push(i)
      }
      return years
    }
  },
  mounted() {
    this.inputDate = ''
  },
  methods: {
    openCalendar() {
      this.showCalendar = true
    },
    closeCalendar() {
      this.showCalendar = false
      this.showMonthPicker = false
      this.showYearPicker = false
    },
    handleEnter() {
      this.closeCalendar()
    },
    changeMonth(amount) {
      this.currentMonth += amount
      if (this.currentMonth < 0) {
        this.currentMonth = 11
        this.currentYear--
      } else if (this.currentMonth > 11) {
        this.currentMonth = 0
        this.currentYear++
      }
    },
    changeYear(amount) {
      this.currentYear += amount
    },
    changeYearRange(amount) {
      this.yearRangeStart += amount * 9
      this.yearRangeEnd += amount * 9
    },
    handleDateClick(date) {
      if (!date.isOtherMonth) {
        this.selectDate(date.day)
        this.closeCalendar()
      }
    },
    selectDate(day) {
      this.selectedDay = day
      this.inputDate = this.formatDate(day)
    },
    formatDate(day) {
      return `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    },
    isSelectedDay(day) {
      return this.selectedDay === day
    },
    validateAndUpdateDate() {
      const regex = /^(\d{0,4})-(\d{0,2})-(\d{0,2})$/
      const match = regex.exec(this.inputDate)

      if (match) {
        const year = parseInt(match[1], 10)
        const month = parseInt(match[2], 10) - 1
        const day = parseInt(match[3], 10)

        if (!isNaN(year) && year > 0) {
          this.currentYear = year
        }
        if (!isNaN(month) && month >= 0 && month <= 11) {
          this.currentMonth = month
        }
        if (!isNaN(day) && day > 0 && day <= new Date(this.currentYear, this.currentMonth + 1, 0).getDate()) {
          this.selectedDay = day
        }
      }
    },
    getPreviousMonthDays() {
        const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay()
        const adjustedFirstDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1
        const prevMonth = new Date(this.currentYear, this.currentMonth, 0)
        const daysInPrevMonth = prevMonth.getDate()
        return Array.from({ length: adjustedFirstDay }, (_, i) => ({
          day: daysInPrevMonth - adjustedFirstDay + 1 + i,
          isOtherMonth: true
        }));
      },
    getNextMonthDays() {
      const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDay()
      const adjustedLastDay = (lastDayOfMonth === 0) ? 6 : lastDayOfMonth - 1
      const remainingDays = 6 - adjustedLastDay
      return Array.from({ length: remainingDays }, (_, i) => ({
        day: i + 1,
        isOtherMonth: true
      }))
    },
    toggleYearPicker() {
      this.showYearPicker = !this.showYearPicker
      this.showMonthPicker = false
    },
    selectYear(year) {
      this.currentYear = year
      this.showYearPicker = false
      this.showMonthPicker = true
    },
    selectMonth(month) {
      this.currentMonth = month
      this.showMonthPicker = false
      this.showCalendar = true
    },
    clearInput() {
      this.inputDate = ''
      this.selectedDay = null
    }
  }
}
</script>

<style scoped lang="less">
@import "styles.less";
</style>
