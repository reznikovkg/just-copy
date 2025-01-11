<template>
  <div class="game">
    <h1>Игра: Переливатор</h1>
    <div 
      v-if="!gameStarted" 
      class="game__setup">
      <label>
        Количество цветов:
        <input 
          class="setup__input" 
          type="number" 
          v-model="colorCount" 
          min="2" />
      </label>
      <label>
        Количество колб:
        <input 
          class="setup__input" 
          type="number" 
          v-model="tubeCount" 
          :min="Number(colorCount) + 1" />
      </label>
      <button 
        class="setup__start-button" 
        @click="() => startGame()">
        Начать игру
      </button>
    </div>
    <div v-else>
      <div class="game__test-tubes">
        <TestTube 
          v-for="(tube, index) in tubes" 
          :key="index" 
          :layers="tube" 
          :capacity="MAX_LAYERS"
          :selected="selectedTube === index" 
          @click="() => selectTube(index)" />
      </div>
      <button 
        class="game__reset-button" 
        @click="() => resetGame()">
        Перезапустить
      </button>
      <button 
        class="game__back-button" 
        @click="() => backToSetup()">
        Вернуться к настройкам
      </button>
      <p v-if="isGameOver">
        Игра завершена! Все цвета разделены!
      </p>
    </div>
  </div>
</template>

<script>
import TestTube from "./TestTube.vue";
export default {
  name: "Game",
  components: {
    TestTube
  },
  data() {
    return {
      MAX_LAYERS: 4,
      tubes: [],
      selectedTube: null,
      gameStarted: false,
      colorCount: 2,
      tubeCount: 3
    };
  },
  computed: {
    isGameOver() {
      return this.tubes.every(
        (tube) => tube.length === 0 || new Set(tube).size === 1
      );
    },
  },
  methods: {
    generateRandomColor() {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
      }
      return color;
    },
    generateColors(count) {
      const colors = [];
      for (let i = 0; i < count; i++) {
        colors.push(this.generateRandomColor());
      }
      return colors;
    },
    generateTubes() {
      const colors = this.generateColors(this.colorCount);
      const layers = [];
      colors.forEach((color) => {
        for (let i = 0; i < this.MAX_LAYERS; i++) {
          layers.push(color);
        }
      });

      layers.sort(() => Math.random() - 0.5);

      this.tubes = Array.from({ length: this.tubeCount }, () => []);

      let tubeIndex = 0;

      while (layers.length > 0) {
        if (this.tubes[tubeIndex].length < this.MAX_LAYERS) {
          this.tubes[tubeIndex].push(layers.pop());
        } else {
          tubeIndex++;
        }
      }
    },
    selectTube(index) {
      if (this.selectedTube === null) {
        this.selectedTube = index;
      } else {
        this.pourLayer(this.selectedTube, index);
        this.selectedTube = null;
      }
    },
    pourLayer(from, to) {
      const source = this.tubes[from];
      const target = this.tubes[to];

      if (source.length === 0 || target.length >= this.MAX_LAYERS) return;

      const layerColor = source[source.length - 1];

      const targetFillPercentage = (target.length / this.MAX_LAYERS) * 100;

      const layersToPour = [];

      while (source.length > 0 && source[source.length - 1] === layerColor) {
        layersToPour.push(source.pop());
      }

      const targetSpaceLeftPercentage = 100 - targetFillPercentage;

      if (layersToPour.length * 100 / this.MAX_LAYERS > targetSpaceLeftPercentage) {
        const layersToMove = Math.floor(targetSpaceLeftPercentage * this.MAX_LAYERS / 100);
        const remainingLayers = layersToPour.slice(layersToMove);
        target.push(...layersToPour.slice(0, layersToMove));
        source.push(...remainingLayers);
      } else {
        target.push(...layersToPour);
      }
    },
    resetGame() {
      this.selectedTube = null;
      this.generateTubes();
    },
    startGame() {
      if (this.colorCount >= this.tubeCount) {
        alert("Количество цветов не может превышать количество колб!");
        return;
      }
      this.gameStarted = true;
      this.resetGame();
    },
    backToSetup() {
      this.gameStarted = false;
    },
  },
};
</script>

<style scoped lang="less">
.game {
  text-align: center;

  &__setup {
    margin-bottom: 1em;

    &__input {
      margin-left: 0.5em;
      width: 3em;
    }

    &__button {
      margin-left: 1em;
      padding: 0.5em 1em;
    }
  }

  &__test-tubes {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  &__reset-button {
    padding: 1em 2em;
    cursor: pointer;
  }

  &__back-button {
    padding: 1em 2em;
    margin: 1em;
    cursor: pointer;
  }
}
</style>
