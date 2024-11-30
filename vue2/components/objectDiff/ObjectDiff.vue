<template>
  <div class="object_diff_page">
    <div class="object_diff_page__filters">
      <div>
        <input v-model="filters.hideUnchanged" type="checkbox" id="hideUnchanged">
        <label for="hideUnchanged">Скрыть поля без изменений</label>
      </div>
      <div>
        <input v-model="filters.alignFields" type="checkbox" id="alignFields">
        <label for="alignFields">Выравнивать строки</label>
      </div>
    </div>
    <ShowObjectDiff :diff="objectsDiff" :filters="filters" />
    <ShowObjectDiff :diff="objectsDiff" :is-for-new="true" :filters="filters" />
  </div>
</template>

<script>
import ShowObjectDiff from "./ShowObjectDiff.vue";
import {STATES} from "../../app/src/constants/objectDiff";

export default {
  name: "ObjectDiff" ,
  components: {ShowObjectDiff},
  props: {
    newObject: {
      type: Object | Array,
      required: true,
    },
    oldObject: {
      type: Object | Array,
      required: true,
    },
    excluded: {
      type: Array,
      default: []
    }
  },
  computed: {
    objectsDiff() {
      return this.diff(this.newObject, this.oldObject);
    }
  },
  data() {
    return {
      filters: {
        hideUnchanged: false,
        alignFields: true,
      },
    }
  },
  methods: {
    getIsExcluded(fieldName) {
      return this.excluded.includes(fieldName);
    },
    // Возвращает пунктуацию для массива или объекта
    getWrap(entry, key) {
      let arrayWrap = key === false ? "]" : "[";
      let objectWrap = key === false ? "}" : "{";
      return {
        // На закрывающем символе, ключ не нужен
        name: key === false ? "" : key,
        newValue: Array.isArray(entry.newValue) ? arrayWrap : objectWrap,
        oldValue: Array.isArray(entry.oldValue) ? arrayWrap : objectWrap,
        state: entry.state,
        level: entry.level,
        // На открывающем символе, запятая не нужна
        disableComma: key !== false
      };
    },
    // Добавляет кавычки к строкам
    formatType(value) {
      if (typeof value === "string") {
        return `"${value}"`;
      } else {
        return value;
      }
    },
    diff(initialObject, newObject, level = 0) {
      let result = [];

      // Сохраняет объект или массив
      const wrapHelper = (entry, newVal, oldVal) => {
        result.push(this.getWrap(entry, entry.name));
        result = result.concat(this.diff(newVal, oldVal, level + 1));
        result.push(this.getWrap(entry, false));
      };

      for (const key in initialObject) {
        if(this.getIsExcluded(key)) {
          continue;
        }

        const entry = {
          name: Array.isArray(initialObject) ? "" : key,
          newValue: this.formatType(newObject[key]),
          oldValue: this.formatType(initialObject[key]),
          state: STATES.unchanged,
          level,
        };

        if (key in newObject) {
          // Если оба значения, объекты считаем разницу для них
          if (typeof entry.oldValue === "object" && typeof entry.newValue === "object") {
            wrapHelper(entry, entry.newValue, entry.oldValue);
            continue;
          } else if (entry.newValue !== entry.oldValue) {
            entry.state = STATES.changed;
          }
        } else {
          entry.state = STATES.removed;
        }

        // Если старое значение было в виде объекта, а новое удалено, выводим старое значение красиво
        // Если значение в виде объекта, было заменено на не объект, то выводим всё в упрощённом виде, иначе будут некрасивые отступы
        if (typeof entry.oldValue === "object" && entry.state !== STATES.changed) {
          wrapHelper(entry, entry.oldValue, {})
          continue;
        }

        result.push(entry);
      }

      // Отдельно сохраняем добавленные поля
      for(const key in newObject) {
        if(this.getIsExcluded(key)) {
          continue;
        }

        if(!(key in initialObject)) {
          const entry = {
            name: Array.isArray(newObject) ? "" : key,
            newValue: this.formatType(newObject[key]),
            oldValue: undefined,
            state: STATES.added,
            level,
          };

          if(typeof newObject[key] === "object") {
            wrapHelper(entry, {}, entry.newValue);
          } else {
            result.push(entry);
          }
        }
      }

      // У последней строки, запятая не нужна (Для красоты)
      result[result.length - 1].disableComma = true;

      return result;
    }
  }
}
</script>

<style scoped lang="less">
.object_diff_page {
  display: flex;
  background: #212121;
  color: #ECECEC;
  justify-content: center;

  &__filters {
    position: fixed;
    top: 50%;
    left: 100px;
    display: flex;
    flex-direction: column;
    background: #1f1f1f;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #1c1c1c;
    gap: 10px;
    font-size: 1.2rem;

    input {
      margin-right: 8px;
    }
  }
}
</style>