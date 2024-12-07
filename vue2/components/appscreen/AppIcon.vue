<template>
    <div class="app-icon-card" :title="description" @click="openApp">
      <i :class="icon" class="app-icon"></i>
      <p class="app-title">{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppIcon",
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        default: "",
      },
      link: {
        type: String,
        required: true,
      },
    },
    methods: {
      openApp() {
        window.open(this.link, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .app-icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    transition: transform 0.3s ease;
    border: 2px solid transparent;
  
    &:hover {
      transform: scale(1.1);
      border: 2px solid #ffcc00;
    }
  
    .app-icon {
      font-size: 40px;
      margin-bottom: 10px;
    }
  
    .app-title {
      font-size: 14px;
      font-weight: bold;
    }
  }
  </style>
  