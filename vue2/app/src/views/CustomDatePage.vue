<template>
  <div class="custom_date">
    <div class="custom_date__row">
      <span>Pattern from</span>
      <input type="text" v-model="patternFrom">
    </div>
    <div class="custom_date__row">
      <span>Date from</span>
      <input type="text" v-model="dateFrom">
    </div>
    <div class="custom_date__row custom_date__decoded">
      <span>Decoded date: {{decodedDateFrom.getFullYear()}} {{decodedDateFrom.getMonth() + 1}} {{ decodedDateFrom.getDate()}}</span>
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
export default {
  name: "CustomDatePage",
  data() {
    return {
      patternFrom: "YYYY-MM-DD",
      dateFrom: "2024-12-10",
      patternTo: "YYYY MM DD",
    }
  },
  computed: {
    decodedDateFrom() {
      const regexMap = {
        YYYY: '(\\d{4})',
        YY: '(\\d{2})',
        MM: '(\\d{2})',
        M: '(\\d{1,2})',
        DD: '(\\d{2})',
        D: '(\\d{1,2})',
      };

      // Создаём regex со всеми паттернами
      let regexPattern = this.patternFrom;
      for (const [key, value] of Object.entries(regexMap)) {
        regexPattern = regexPattern.replace(new RegExp(key, 'g'), value);
      }
      const regex = new RegExp(`^${regexPattern}$`);
      const match = this.dateFrom.match(regex);

      if (!match) {
        return;
      }

      // Вытаскиваем части даты
      let year, month, day;
      let matchIndex = 1; // match[0] это полная совпавшая строка

      if (this.patternFrom.includes('YYYY')) {
        year = parseInt(match[matchIndex++], 10);
      } else if (this.patternFrom.includes('YY')) {
        year = 2000 + parseInt(match[matchIndex++], 10); // Считаем 2000 год для годов из 2 цифр
      }

      if (this.patternFrom.includes('MM')) {
        month = parseInt(match[matchIndex++], 10) - 1; // Месяцы начинаются с 0
      } else if (this.patternFrom.includes('M')) {
        month = parseInt(match[matchIndex++], 10) - 1;
      }

      if (this.patternFrom.includes('DD')) {
        day = parseInt(match[matchIndex++], 10);
      } else if (this.patternFrom.includes('D')) {
        day = parseInt(match[matchIndex++], 10);
      }

      return new Date(year, month, day);
    },
    dateTo() {
      const date = this.decodedDateFrom;
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Месяцы начинаются с 0
      const day = date.getDate();

      return this.patternTo
          .replace(/YYYY/g, year)
          .replace(/YY/g, String(year).slice(-2))
          .replace(/MM/g, String(month).padStart(2, '0'))
          .replace(/M/g, month)
          .replace(/DD/g, String(day).padStart(2, '0'))
          .replace(/D/g, day);
    }
  },
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
  }

  &__decoded {
    border-top: 1px solid #222222;
    border-bottom: 1px solid #222222;
    padding: 5px;
  }
}
</style>