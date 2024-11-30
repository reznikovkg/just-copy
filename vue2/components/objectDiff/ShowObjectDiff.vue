<template>
  <div class="object_diff">
    <template v-for="(row, index) in diff">
      <div v-if="shouldDrawRow(row)"
           :key="index"
           :class="{
            'object_diff__row': true,
            'object_diff__row--changed': row.state === STATES.changed,
            'object_diff__row--removed': row.state === STATES.removed && !isForNew,
            'object_diff__row--added': row.state === STATES.added && isForNew,
          }">
        <span class="object_diff__row__number" :style="{ marginRight: row.level + 'em' }">
          {{ index }}
        </span>
        &nbsp;
        <span v-if="shouldDrawText(row)">
          {{
            row.name
          }}{{
            row.name === "" ? "" : ": "
          }}{{
            isForNew ? row.newValue : row.oldValue
          }}{{
            row.disableComma ? "" : ","
          }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import {STATES} from "../../app/src/constants/objectDiff";

export default {
  name: "ShowObjectDiff",
  computed: {
    STATES() {
      return STATES
    }
  },
  props: {
    diff: {
      type: Array,
      required: true
    },
    isForNew: {
      type: Boolean,
      default: false,
    },
    filters: {
      type: Object,
      required: true,
    }
  },
  methods: {
    shouldDrawRow(row) {
      if (this.filters.hideUnchanged && row.state === STATES.unchanged) {
        return false;
      } else if (!this.filters.alignFields && this.isForNew && row.state === STATES.removed) {
        return false;
      } else if (!this.filters.alignFields && !this.isForNew && row.state === STATES.added) {
        return false;
      }
      return true;
    },
    shouldDrawText(row) {
      if (this.isForNew && row.state === STATES.removed) {
        return false;
      } else if (!this.isForNew && row.state === STATES.added) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="less">
.object_diff {
  min-width: 400px;
  font-size: 1rem;
  padding: 10px 0;
  font-family: monospace;
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: " ";
    }

    &--changed::after {
      background: rgba(255, 193, 7, 0.25);
    }

    &--added::after {
      background: rgba(40, 167, 69, 0.25);
    }

    &--removed::after {
      background: rgba(220, 53, 69, 0.25);
    }

    &__number {
      background: #2F2F2F;
      width: 2.5em;
      display: block;
      text-align: right;
      padding-right: 10px;
    }
  }
}
</style>