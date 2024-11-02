<template>
  <div style="display: flex; width: 500px; justify-content: space-between">
      <div style="max-width: 150px">
          <Calendar
              :show-quick-options="true"
              selector-variant="day"
          />
          <Calendar
              :show-quick-options="true"
              selector-variant="week"
          />
          <Calendar
              :show-quick-options="true"
              selector-variant="month"
          />
          <Calendar
              :show-quick-options="true"
              selector-variant="year"
          />
      </div>
      <div style="max-width: 150px">
          <select v-model="rightSelectorsVariant">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
          </select>
          <Calendar
              :show-quick-options="true"
              selector-mode="single"
              :selector-variant="rightSelectorsVariant"
          />
          <Calendar
              :show-quick-options="true"
              selector-mode="range"
              :selector-variant="rightSelectorsVariant"
          />
          <Calendar
              :show-quick-options="true"
              selector-mode="several"
              :selector-variant="rightSelectorsVariant"
          />
      </div>
  </div>
</template>

<script>
import Calendar from "../../../components/Calendar/Calendar.vue";

export default {
  name: "CalendarPage",
  components: {
      Calendar
  },
  data() {
      return {
          rightSelectorsVariant: "day"
      }
  }
}
</script>

<style scoped>

</style>