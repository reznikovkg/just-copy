<template>
  <div class="audio-player">
    <div class="file-upload" v-if="!audioFile">
      <label>
        Загрузите аудиофайл
        <input type="file" @change="loadFile" accept="audio/*" hidden />
      </label>
    </div>
    <div v-else>
      <div class="track-info">
        <h2>🎵 {{ audioFile.name }}</h2>
      </div>

      <div class="controls">
        <button @click="rewind" class="control-button">
          <span class="material-icons">replay</span>
        </button>
        <button @click="togglePlay" class="play-pause">
          <span class="material-icons">
            {{ isPlaying ? "pause_circle_filled" : "play_circle_filled" }}
          </span>
        </button>
        <button @click="forward" class="control-button">
          <span class="material-icons">forward</span>
        </button>
      </div>

      <div class="progress-bar">
        <span>{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          class="slider"
          v-model="currentTime"
          :max="duration"
          @input="seek"
        />
        <span>{{ formatTime(duration) }}</span>
      </div>
    </div>

    <audio ref="audio" @timeupdate="updateTime" @loadedmetadata="loadMetadata" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioFile: null,
      audioUrl: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
  },
  methods: {
    loadFile(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("audio/")) {
        this.audioFile = file;
        this.audioUrl = URL.createObjectURL(file);
        const audio = this.$refs.audio;
        audio.src = this.audioUrl;
        audio.play();
        this.isPlaying = true;
      } else {
        alert("Выберите правильный аудиофайл!");
      }
    },
    togglePlay() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    rewind() {
      const audio = this.$refs.audio;
      audio.currentTime = Math.max(0, audio.currentTime - 15); 
    },
    forward() {
      const audio = this.$refs.audio;
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 15); 
    },
    updateTime() {
      const audio = this.$refs.audio;
      this.currentTime = audio.currentTime;
    },
    loadMetadata() {
      const audio = this.$refs.audio;
      this.duration = audio.duration;
    },
    seek() {
      const audio = this.$refs.audio;
      audio.currentTime = this.currentTime;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    },
  },
};
</script>

<style lang="less">
.audio-player {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 20px;
  background: #f8faff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;

  .track-info {
    margin-bottom: 20px;

    h2 {
      font-size: 18px;
      color: #4f6d92;
    }

    p {
      font-size: 14px;
      color: #8693ab;
    }
  }

  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    margin: 20px 0;

    .control-button,
    .play-pause {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 30px; 
      color: #4f6d92;
      transition: transform 0.2s;
    }

    .control-button:hover,
    .play-pause:hover {
      transform: scale(1.2); 
    }

    .material-icons {
      font-size: 40px; 
    }

    .play-pause {
      color: #5271ff;
    }
  }

  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .slider {
      width: 80%; 
      margin: 0 10px;
    }

    span {
      font-size: 14px;
      color: #4f6d92;
    }
  }

  .file-upload {
    label {
      display: inline-block;
      padding: 10px 20px;
      font-size: 14px;
      background: #5271ff;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #355dcf;
      }
    }
  }
}
</style>