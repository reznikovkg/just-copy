<template>
  <div class="main-container">
    <!-- Start Screen -->
    <div class="start-screen" v-if="!gameStarted">
      <h1 class="start-screen__title">Добро пожаловать в Крестики-Нолики!</h1>

      <!-- Grid Size Selection -->
      <div class="start-screen__option">
        <label for="grid-size">Размер сетки:</label>
        <select id="grid-size" v-model="gridSize" class="start-screen__dropdown">
          <option v-for="size in [3, 4, 5]" :key="size" :value="size">{{ size }} x {{ size }}</option>
        </select>
      </div>

      <!-- Play Against Bot Option -->
      <div class="start-screen__option">
        <label for="against-bot">Играть против бота:</label>
        <input id="against-bot" type="checkbox" v-model="againstBot" class="start-screen__checkbox">
      </div>

      <!-- Difficulty Selection -->
      <div class="start-screen__option" v-if="againstBot">
        <label for="difficulty">Сложность:</label>
        <select id="difficulty" v-model="difficulty" class="start-screen__dropdown">
          <option value="easy">Легкая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </select>
      </div>

      <button @click="startGame" class="start-screen__start-button">Начать игру</button>
    </div>

    <!-- Game Screen -->
    <div class="game-screen" v-if="gameStarted">
      <div :style="gridStyle" class="game-screen__grid-container">
        <CellComponent v-for="(cell, index) in cells" :key="index" :index="index" :value="cell"
          @cell-click="handleCellClick" />
      </div>

      <div v-if="winner" class="game-screen__result">
        <p v-if="winner !== DRAW_MESSAGE">{{ winner }} победил!</p>
        <p v-else>{{ winner }}</p>
        <button @click="resetGame" class="game-screen__reset-button">Сброс</button>
      </div>
    </div>
  </div>
</template>

<script>
import CellComponent from './cellComponent.vue';

const DRAW_MESSAGE = "Ничья";

export default {
  components: {
    CellComponent,
  },
  data() {
    return {
      gameStarted: false,
      gridSize: 3,
      againstBot: false,
      difficulty: 'easy',
      cells: [],
      currentPlayer: 'X',
      winner: null,
    };
  },
  computed: {
    gridStyle() {
      const cellSize = 90;
      const gridDimension = this.gridSize * cellSize;
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.gridSize}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${this.gridSize}, ${cellSize}px)`,
        width: `${gridDimension}px`,
        height: `${gridDimension}px`,
      };
    },
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.cells = Array(this.gridSize * this.gridSize).fill('');
      this.currentPlayer = 'X';
      this.winner = null;

      if (this.againstBot && this.currentPlayer === 'O') {
        this.botMove();
      }
    },
    handleCellClick(index) {
      if (this.cells[index] || this.winner) {
        return;
      }

      this.cells[index] = this.currentPlayer;


      if (this.checkWin(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        return;
      }

      if (this.isDraw()) {
        this.winner = DRAW_MESSAGE;
        return;
      }

      this.togglePlayer();

      if (this.againstBot && this.currentPlayer === 'O' && !this.winner) {
        this.botMove();
      }
    },
    botMove() {
      const maxDepth = this.getMaxDepthForDifficulty();

      if (this.difficulty === 'easy') {
        let emptyCells = this.getEmptyIndices(this.cells);
        if (emptyCells.length === 0) {
          return;
        }
        let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        setTimeout(() => {
          this.handleCellClick(randomIndex);
        }, 500);
      } else if (this.difficulty === 'medium') {
        const bestMove = this.minimax(this.cells.slice(), 'O', 0, maxDepth);
        setTimeout(() => {
          this.handleCellClick(bestMove.index);
        }, 500);
      } else {
        const bestMove = this.minimax(this.cells.slice(), 'O', 0, maxDepth);
        setTimeout(() => {
          this.handleCellClick(bestMove.index);
        }, 500);
      }
    },

    getMaxDepthForDifficulty() {
      if (this.difficulty === 'medium') {
        return this.gridSize === 3 ? 2 : this.gridSize === 4 ? 3 : 2;
      } else if (this.difficulty === 'hard') {
        return this.gridSize === 3 ? Infinity : this.gridSize === 4 ? 4 : 3;
      }
      return 1;
    },
    minimax(newBoard, player, depth = 0, maxDepth = Infinity) {
      const availSpots = this.getEmptyIndices(newBoard);

      if (this.checkWinForMinimax(newBoard, 'X')) {
        return { score: -10 + depth };
      } else if (this.checkWinForMinimax(newBoard, 'O')) {
        return { score: 10 - depth };
      } else if (availSpots.length === 0) {
        return { score: 0 };
      }

      if (depth >= maxDepth) {
        return { score: 0 };
      }

      const moves = [];
      for (let i = 0; i < availSpots.length; i++) {
        const move = {};
        move.index = availSpots[i];

        newBoard[availSpots[i]] = player;

        if (player === 'O') {
          const result = this.minimax(newBoard, 'X', depth + 1, maxDepth);
          move.score = result.score;
        } else {
          const result = this.minimax(newBoard, 'O', depth + 1, maxDepth);
          move.score = result.score;
        }

        newBoard[availSpots[i]] = '';
        moves.push(move);
      }

      let bestMove;
      if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }

      return moves[bestMove];
    },
    getEmptyIndices(board) {
      return board.map((cell, index) => (cell === '' ? index : null)).filter(val => val !== null);
    },
    checkWinForMinimax(board, player) {
      const lines = this.getWinningLines();
      return lines.some(line => line.every(index => board[index] === player));
    },
    togglePlayer() {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    checkWin(player) {
      const lines = this.getWinningLines();
      return lines.some(line => line.every(index => this.cells[index] === player));
    },
    isDraw() {
      return this.cells.every(cell => cell !== '');
    },
    resetGame() {
      this.gameStarted = false;
      this.winner = null;
      this.currentPlayer = 'X';
      this.cells = [];
    },
    getWinningLines() {
      const size = this.gridSize;
      let lines = [];

      for (let i = 0; i < size; i++) {
        lines.push([...Array(size).keys()].map(key => key + i * size));
        lines.push([...Array(size).keys()].map(key => i + key * size));
      }

      lines.push([...Array(size).keys()].map(key => key * (size + 1)));
      lines.push([...Array(size).keys()].map(key => (key + 1) * (size - 1)));

      return lines;
    },
  },
};
</script>

<style scoped lang="less">
@primary-color: #4CAF50;
@secondary-color: #388E3C;
@background-color: #1e1e1e;
@screen-background: #263238;
@font-color: #B0BEC5;
@highlight-color: #FFC107;

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: @background-color;

  .start-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: @screen-background;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

    &__title {
      color: #ffffff;
      font-size: 32px;
      margin-bottom: 20px;
    }

    &__option {
      margin: 10px 0;
      color: @font-color;
      font-size: 18px;

      &__dropdown,
      &__checkbox {
        margin-left: 10px;
        color: #ffffff;
        background-color: @screen-background;
        border: 1px solid #616161;
        border-radius: 4px;
        padding: 4px 8px;

        &:focus {
          border-color: @highlight-color;
        }
      }
    }

    &__start-button {
      padding: 12px 24px;
      background-color: @primary-color;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: @secondary-color;
        transform: scale(1.05);
      }
    }
  }

  .game-screen {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__grid-container {
      margin: 20px;
      display: grid;
      gap: 10px;
      padding: 20px;
      background-color: transparent;
      border: none;
      outline: none;
    }

    &__result {
      margin-top: 20px;
      text-align: center;
      color: #ffffff;
      font-size: 24px;

      &__reset-button {
        padding: 12px 24px;
        background-color: @primary-color;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s, transform 0.3s;

        &:hover {
          background-color: @secondary-color;
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
