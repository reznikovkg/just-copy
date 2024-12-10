<template>
  <div class="tracker">
    <button class="tracker__add-btn" @click="addEntry">Добавить карточку</button>
    <table class="tracker__table">
      <template v-for="(entry, ri) in tracker">
        <tr class="tracker__table__row-start" :key="ri" @click.right="e => showContextMenu(e, ri)">
          <td>
            <button class="tracker__table__add-task" @click="addTask(ri)">Добавить трекер</button>
          </td>
          <td>
            <input type="text" v-model="entry.name">
          </td>
          <td>
            <input type="text" v-model="entry.description">
          </td>
        </tr>
        <tr v-for="(task, ti) in entry.tasks" :key="`${ri}${ti}`" class="tracker__table__row-end"
            @click.right="e => showContextMenu(e, ri, ti)">
          <td>
            <input type="text" v-model="task.comment">
          </td>
          <td>
            {{ formatDate(task.startTime) }}
          </td>
          <td>
            {{ formatTime(task.endTime) }}
          </td>
        </tr>
      </template>
    </table>
    <div tabindex="-1" ref="div" @blur="hideContextMenu">
      <div class="tracker__context-menu" :style="this.selectedPosition" v-if="selectedTask">
        <StopIcon v-if="selectedTask.state === STATE.COUNTING" @click="stopCounter(selectedTask)"/>
        <StartIcon v-else @click="resetCounter(selectedTask)"/>
        <DeleteIcon @click="removeTask(selectedEntryIndex, selectedTaskIndex)"/>
      </div>
      <div class="tracker__context-menu" :style="this.selectedPosition" v-else-if="selectedEntry">
        <DeleteIcon @click="removeEntry(selectedEntryIndex)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {CustomDate} from "../../../components/customDate/CustomDate";
import StopIcon from "../../../components/timeTracker/icons/StopIcon.vue";
import DeleteIcon from "../../../components/timeTracker/icons/DeleteIcon.vue";
import StartIcon from "../../../components/timeTracker/icons/StartIcon.vue";

const STATE = {
  COUNTING: 0,
  STOPPED: 1
}

export default {
  name: "TimeTrackerPage",
  components: {StopIcon, DeleteIcon, StartIcon},
  computed: {
    STATE() {
      return STATE;
    },
    selectedTaskIndex() {
      return this.selectedIndexes[1];
    },
    selectedEntryIndex() {
      return this.selectedIndexes[0];
    },
    selectedTask() {
      return this.selectedEntry?.tasks[this.selectedTaskIndex];
    },
    selectedEntry() {
      return this.tracker[this.selectedEntryIndex];
    }
  },
  data() {
    return {
      tracker: [],
      timerId: null,
      selectedIndexes: [],
      selectedPosition: { top: 0, left: 0 },
    }
  },
  methods: {
    pad(number) {
      return String(number).padStart(2, "0");
    },
    formatDate(date) {
      let minutes = this.pad(date.getMinutes());
      let hours = this.pad(date.getHours());
      return (new CustomDate(date).format("YYYY-MM-DD")) + ` ${hours}:${minutes}`;
    },
    formatTime(date) {
      let seconds = this.pad(date % 60);
      let minutes = this.pad(Math.floor(date / 60) % 60);
      let hours = this.pad(Math.floor(date / 3600) % 60);
      return `${hours}:${minutes}:${seconds}`;
    },
    updateTimer() {
      this.tracker.forEach((entry) => {
        entry.tasks.forEach((task) => {
          if (task.state === STATE.COUNTING) {
            task.endTime = Math.floor(((new Date()) - task.countFromDate) / 1000);
          }
        })
      })
    },
    updateOnInterval() {
      this.timerId = setInterval(() => {
        this.updateTimer();
        localStorage.setItem("tracker", JSON.stringify(this.tracker));
      }, 1000);
    },
    removeTask(rowIndex, taskIndex) {
      this.tracker[rowIndex].tasks.splice(taskIndex, 1);
      this.hideContextMenu();
    },
    addTask(rowIndex) {
      this.tracker[rowIndex].tasks.push({
        state: STATE.COUNTING,
        comment: "",
        startTime: new Date(),
        countFromDate: new Date(),
        endTime: 0
      });
    },
    removeEntry(rowIndex) {
      this.tracker.splice(rowIndex, 1);
      this.hideContextMenu();
    },
    addEntry() {
      this.tracker.push({name: "Имя", description: "Описание", tasks: []});
      this.hideContextMenu();
    },
    stopCounter(task) {
      task.state = STATE.STOPPED;
    },
    resetCounter(task) {
      task.state = STATE.COUNTING;
      task.countFromDate = new Date(Date.now() - (task.endTime * 1000));
    },
    showContextMenu(e, entryIndex, taskIndex) {
      e.preventDefault();
      this.selectedIndexes = [entryIndex, taskIndex];
      this.selectedPosition = { top: `${e.pageY}px`, left: `${e.pageX}px` };
      this.$refs.div.focus();
    },
    hideContextMenu() {
      this.selectedIndexes = [];
    }
  },
  created() {
    let stored = JSON.parse(localStorage.getItem("tracker"));
    for (const entry of stored) {
      for (const task of entry.tasks) {
        task.countFromDate = new Date(task.countFromDate);
        task.startTime = new Date(task.startTime);
      }
    }
    this.tracker = stored;
    this.updateTimer();
    this.updateOnInterval();
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  }
}
</script>

<style scoped lang="less">
.tracker {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  * {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
  }

  &__add-btn {
    margin-bottom: 20px;
    background: #f8f9fa;
    color: #212529;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  &__table {
    width: 800px;
    border-collapse: collapse;

    td {
      padding: 10px;

      input {
        background: none;
        border: none;
        outline: none;
      }
    }

    &__add-task {
      border: none;
      outline: none;
      cursor: pointer;
      background: none;
    }

    &__row-start {
      font-weight: bold;
    }

    &__row-end {
      background: rgba(0, 0, 0, .05);
    }
  }

  &__context-menu {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
    box-shadow: #3b3b3b12 1px 1px 12px 2px;

    svg {
      height: 1em;
      width: 1em;
    }
  }
}
</style>