<template>
  <div class="custom_date">
    <div class="custom_date__row">
      <span>Pattern from</span>
      <input type="text" v-model="patternFrom">
    </div>
    <div class="custom_date__row">
      <span>Date from</span>
      <input type="text" :value="formattedDateFrom" @input="changeDateFrom">
    </div>
    <div class="custom_date__row">
      <button @click="sub(1, 'year')">-1 year</button>
      <button @click="add(1, 'year')">+1 year</button>
    </div>
    <div class="custom_date__row">
      <button @click="sub(1, 'month')">-1 month</button>
      <button @click="add(1, 'month')">+1 month</button>
    </div>
    <div class="custom_date__row">
      <button @click="sub(1, 'day')">-1 day</button>
      <button @click="add(1, 'day')">+1 day</button>
    </div>
    <div class="custom_date__row custom_date__decoded">
      <span>Decoded date: {{dateFrom.format("YYYY MM DD")}}</span>
    </div>
    <div class="custom_date__row">
      <span>Pattern to</span>
      <input type="text" v-model="patternTo">
    </div>
    <div class="custom_date__row">
      <span>Date to</span>
      <input type="text" readonly v-model="dateTo">
    </div>
  </div>
</template>

<script>
import {CustomDate} from "../../../components/customDate/CustomDate";

export default {
  name: "CustomDatePage",
  data() {
    return {
      patternFrom: "YYYY-MM-DD",
      dateFrom: new CustomDate("2024-12-10", "YYYY-MM-DD"),
      formattedDateFrom: "2024-12-10",
      patternTo: "YYYY MM DD",
      dateTo: "2024 12 10"
    }
  },
  watch: {
    patternTo(newVal) {
      this.dateTo = this.dateFrom.format(newVal);
    },
    patternFrom(newVal) {
      this.formattedDateFrom = this.dateFrom.format(newVal);
    }
  },
  methods: {
    /**
     * Тоже можно сделать и через computed и/или watch. Но сложностей с реактивностью и объектами класса больше, чем с
     * таким костылём
     */
    updateDates() {
      this.dateFrom.format(this.patternTo);
      this.formattedDateFrom = this.dateFrom.format(this.patternFrom);
      this.dateTo = this.dateFrom.format(this.patternTo);
    },
    changeDateFrom(e) {
      try {
        this.dateFrom = new CustomDate(e.target.value, this.patternFrom);
        this.updateDates();
      } catch (error) {
        // Входная дата не верна, игнорируем
      }
    },
    add(value, unit) {
      this.dateFrom.add(value, unit);
      this.updateDates();
    },
    sub(value, unit) {
      this.dateFrom.sub(value, unit);
      this.updateDates();
    }
  }
}
</script>

<style scoped lang="less">
.custom_date {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 300px;

  * {
    font-size: 20px;
  }

  &__row {
    display: flex;
    width: 100%;
    align-items: center;

    span {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 10px 10px;
      border: 1px solid #707070;
      border-radius: 5px;
    }

    button {
      width: 100%;
      margin: 0 10px;
    }
  }

  &__decoded {
    border-top: 1px solid #222222;
    border-bottom: 1px solid #222222;
    padding: 5px;
  }
}
</style>