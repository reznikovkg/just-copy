export class CustomDate {
  /** @var {Date} */
  _date;

  /**
   *
   * @param date {string|null}
   * @param pattern {string|null}
   */
  constructor(date = null, pattern = null) {
    if (date === null) {
      this.date = new Date();
    } else if (pattern === null) {
      this.date = new Date(date);
    } else {
      this.date = this._decodeDate(pattern, date);
    }
  }

  /**
   * Расшифровывает дату по паттерну
   * @param pattern {string}
   * @param date {string}
   * @return {Date}
   * @throws Error Дата не совпадает с паттерном
   */
  _decodeDate(pattern, date) {
    const regexMap = {
      YYYY: '(\\d{4})',
      YY: '(\\d{2})',
      MM: '(\\d{2})',
      M: '(\\d{1,2})',
      DD: '(\\d{2})',
      D: '(\\d{1,2})',
    };

    // Создаём regex со всеми паттернами
    let regexPattern = pattern;
    for (const [key, value] of Object.entries(regexMap)) {
      regexPattern = regexPattern.replace(new RegExp(key, 'g'), value);
    }
    const regex = new RegExp(`^${regexPattern}$`);
    const match = date.match(regex);

    if (!match) {
      throw new Error("Date doesn't match")
    }

    // Вытаскиваем части даты
    let year, month, day;
    let matchIndex = 1; // match[0] это полная совпавшая строка

    if (pattern.includes('YYYY')) {
      year = parseInt(match[matchIndex++], 10);
    } else if (pattern.includes('YY')) {
      year = 2000 + parseInt(match[matchIndex++], 10); // Считаем 2000 год для годов из 2 цифр
    }

    if (pattern.includes('MM')) {
      month = parseInt(match[matchIndex++], 10) - 1; // Месяцы начинаются с 0
    } else if (pattern.includes('M')) {
      month = parseInt(match[matchIndex++], 10) - 1;
    }

    if (pattern.includes('DD')) {
      day = parseInt(match[matchIndex++], 10);
    } else if (pattern.includes('D')) {
      day = parseInt(match[matchIndex++], 10);
    }

    return new Date(year, month, day);
  }

  /**
   * Кодирует дату в соответствии с паттерном
   * @param pattern {string}
   * @returns {string}
   */
  format(pattern) {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1; // Месяцы начинаются с 0
    const day = this.date.getDate();

    return pattern
      .replace(/YYYY/g, year)
      .replace(/YY/g, String(year).slice(-2))
      .replace(/MM/g, String(month).padStart(2, '0'))
      .replace(/M/g, month)
      .replace(/DD/g, String(day).padStart(2, '0'))
      .replace(/D/g, day);
  }

  /**
   * Добавляет указанный промежуток к текущей дате
   * @param value {number}
   * @param unit {'day'|'week'|'month'|'year'}
   * @returns {CustomDate}
   */
  add(value, unit) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Value must be a non-negative number.");
    }
    this._manipulateDate(value, unit);
    return this;
  }

  sub(value, unit) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Value must be a non-negative number.");
    }
    this._manipulateDate(-value, unit);
    return this;
  }

  /**
   * Изменяет дату на указанную величину.
   * @param value {number}
   * @param unit {'day'|'week'|'month'|'year'}
   * @returns {CustomDate}
   */
  _manipulateDate(value, unit) {
    switch (unit) {
      case "day":
        this.date.setDate(this.date.getDate() + value);
        break;
      case "week":
        this.date.setDate(this.date.getDate() + value * 7);
        break;
      case "month":
        const currentDate = this.date.getDate();
        this.date.setMonth(this.date.getMonth() + value);

        // Adjust for shorter months
        if (this.date.getDate() < currentDate) {
          this.date.setDate(0); // Moves to the last day of the previous month
        }
        break;
      case "year":
        this.date.setFullYear(this.date.getFullYear() + value);
        break;
      default:
        throw new Error(`Unsupported unit: ${unit}. Use 'day', 'week', 'month', or 'year'.`);
    }
  }

  /**
   * Устанавливает год и возвращает новое значение. Если year = null, то просто возвращает текущее значение
   * @param year {number|null} - от 1 до 31
   */
  year(year = null) {
    if (year !== null) {
      this.date.setFullYear(year);
    }

    return this.date.getFullYear();
  }

  /**
   * Устанавливает месяц и возвращает новое значение. Если month = null, то просто возвращает текущее значение
   * @param month {number|null} - от 1 до 12
   */
  month(month = null) {
    if (month !== null) {
      this.date.setMonth(month - 1);
    }

    return this.date.getMonth() + 1;
  }

  /**
   * Устанавливает день месяца и возвращает новое значение. Если day = null, то просто возвращает текущее значение
   * @param day {number|null} - от 1 до 31
   */
  day(day = null) {
    if (day !== null) {
      this.date.setDate(day);
    }

    return this.date.getDate();
  }
}