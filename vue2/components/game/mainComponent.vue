<template>
  <div class="main-container">
    <!-- Start Screen -->
    <div class="start-screen" v-if="!gameStarted">
      <h1 class="title">Добро пожаловать в Крестики-Нолики!</h1>

      <!-- Grid Size Selection -->
      <div class="option">
        <label for="grid-size">Размер сетки:</label>
        <select id="grid-size" v-model="gridSize" class="dropdown">
          <option v-for="size in [3, 4, 5]" :key="size" :value="size">{{ size }} x {{ size }}</option>
        </select>
      </div>

      <!-- Play Against Bot Option -->
      <div class="option">
        <label for="against-bot">Играть против бота:</label>
        <input id="against-bot" type="checkbox" v-model="againstBot" class="checkbox">
      </div>

      <!-- Difficulty Selection -->
      <div class="option" v-if="againstBot">
        <label for="difficulty">Сложность:</label>
        <select id="difficulty" v-model="difficulty" class="dropdown">
          <option value="easy">Легкая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </select>
      </div>

      <button @click="startGame" class="start-button">Начать игру</button>
    </div>

    <!-- Game Screen -->
    <div class="game-screen" v-if="gameStarted">
      <div :style="gridStyle" class="grid-container">
        <cell-component
          v-for="(cell, index) in cells"
          :key="index"
          :index="index"
          :value="cell"
          @cell-click="handleCellClick"
        />
      </div>

      <div v-if="winner" class="result">
        <p v-if="winner !== 'Ничья'">{{ winner }} победил!</p>
        <p v-else>{{ winner }}</p>
        <button @click="resetGame" class="reset-button">Сброс</button>
      </div>
    </div>
  </div>
</template>

<script>
import CellComponent from './cellComponent.vue';

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
        gap: '10px',
        padding: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
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
      if (this.cells[index] || this.winner) return;

      this.$set(this.cells, index, this.currentPlayer);

      if (this.checkWin(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        return;
      }

      if (this.isDraw()) {
        this.winner = 'Ничья';
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
        if (emptyCells.length === 0) return;
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
      // Adjust max depth to prevent freezing for larger grids
      if (this.difficulty === 'medium') {
        return this.gridSize === 3 ? 2 : this.gridSize === 4 ? 3 : 2;
      } else if (this.difficulty === 'hard') {
        return this.gridSize === 3 ? Infinity : this.gridSize === 4 ? 4 : 3; // Limit depth for large grids
      }
      return 1; // Easy difficulty with shallow search
    },
    minimax(newBoard, player, depth = 0, maxDepth = Infinity) {
      const availSpots = this.getEmptyIndices(newBoard);

      if (this.checkWinForMinimax(newBoard, 'X')) {
        return { score: -10 + depth }; // Penalize for player win
      } else if (this.checkWinForMinimax(newBoard, 'O')) {
        return { score: 10 - depth }; // Reward for bot win
      } else if (availSpots.length === 0) {
        return { score: 0 }; // Draw
      }

      if (depth >= maxDepth) {
        return { score: 0 }; // Return neutral score when depth limit is reached
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

<style scoped>
/* Main Container Styles */
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e1e;
}

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #263238;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.title {
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 20px;
}

.option {
  margin: 10px 0;
  color: #B0BEC5;
  font-size: 18px;
}

.dropdown,
input[type="checkbox"] {
  margin-left: 10px;
  color: #ffffff;
  background-color: #263238;
  border: 1px solid #616161;
  border-radius: 4px;
  padding: 4px 8px;
}

.dropdown:focus,
input[type="checkbox"]:focus {
  border-color: #FFC107;
}

.start-button,
.reset-button {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}

.start-button:hover,
.reset-button:hover {
  background-color: #388E3C;
  transform: scale(1.05);
}

.grid-container {
  margin: 20px;
}

.result {
  margin-top: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
}

.game-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1e1e1e;
  font-family: Arial, sans-serif;
}
</style>
