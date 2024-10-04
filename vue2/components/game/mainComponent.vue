<template>
  <div>
    <div v-if="!gameStarted" class="start-screen">
      <h3>Выберите режим игры</h3>
      <select v-model="gridSize">
        <option v-for="size in [3, 4, 5]" :key="size" :value="size">{{ size }} x {{ size }}</option>
      </select>

      <div>
        <input type="checkbox" v-model="againstBot" id="againstBot">
        <label for="againstBot">Против бота</label>
      </div>

      <div v-if="againstBot">
        <label>Уровень сложности:</label>
        <select v-model="difficulty">
          <option value="easy">Легкий</option>
          <option value="medium">Средний</option>
          <option value="hard">Сложный</option>
        </select>
      </div>

      <button @click="startGame">Начать игру</button>
    </div>

    <div v-else class="game-screen">
      <div class="grid" :style="gridStyle">
        <CellComponent
          v-for="(cell, index) in cells"
          :key="index"
          :value="cell"
          :index="index"
          @cell-click="handleCellClick"
        />
      </div>
      <div v-if="winner" class="result">
        <h3>{{ winner }} победил!</h3>
        <button @click="resetGame">Начать сначала</button>
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
        border: '1px solid #000',
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
        let randomIndex =
          emptyCells[Math.floor(Math.random() * emptyCells.length)];
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
        return this.gridSize === 4 ? 3 : this.gridSize === 5 ? 2 : 4;
      } else if (this.difficulty === 'hard' && this.gridSize >= 4) {
        return this.gridSize === 4 ? 4 : 3;
      }
      return Infinity;
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
      return board
        .map((cell, index) => (cell === '' ? index : null))
        .filter((val) => val !== null);
    },
    checkWinForMinimax(board, player) {
      const lines = this.getWinningLines();
      return lines.some((line) =>
        line.every((index) => board[index] === player)
      );
    },
    togglePlayer() {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    checkWin(player) {
      const lines = this.getWinningLines();
      return lines.some((line) =>
        line.every((index) => this.cells[index] === player)
      );
    },
    getWinningLines() {
      let lines = [];
      let size = this.gridSize;
      let winCondition = this.gridSize;

      for (let row = 0; row < size; row++) {
        for (let col = 0; col <= size - winCondition; col++) {
          let line = [];
          for (let k = 0; k < winCondition; k++) {
            line.push(row * size + col + k);
          }
          lines.push(line);
        }
      }

      for (let col = 0; col < size; col++) {
        for (let row = 0; row <= size - winCondition; row++) {
          let line = [];
          for (let k = 0; k < winCondition; k++) {
            line.push((row + k) * size + col);
          }
          lines.push(line);
        }
      }

      for (let row = 0; row <= size - winCondition; row++) {
        for (let col = 0; col <= size - winCondition; col++) {
          let line = [];
          for (let k = 0; k < winCondition; k++) {
            line.push((row + k) * size + (col + k));
          }
          lines.push(line);
        }
      }

      for (let row = 0; row <= size - winCondition; row++) {
        for (let col = winCondition - 1; col < size; col++) {
          let line = [];
          for (let k = 0; k < winCondition; k++) {
            line.push((row + k) * size + (col - k));
          }
          lines.push(line);
        }
      }

      return lines;
    },
    isDraw() {
      return this.cells.every((cell) => cell !== '');
    },
    resetGame() {
      this.gameStarted = false;
      this.winner = null;
      this.currentPlayer = 'X';
      this.cells = [];
    },
  },
};
</script>

<style scoped>
.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result {
  margin-top: 10px;
}
</style>
