<template>
  <div class="app-container">
    <div
      class="carousel"
      @mousedown="startSwipe"
      @mousemove="onSwipe"
      @mouseup="endSwipe"
      @mouseleave="endSwipe"
      @touchstart="startSwipe"
      @touchmove="onSwipe"
      @touchend="endSwipe"
    >
      <div
        class="carousel-wrapper"
        :style="{ transform: `translateX(-${currentPage * 100}%)` }"
      >
        <div v-for="(page, pageIndex) in paginatedApps" :key="pageIndex" class="page">
          <div class="apps-container">
            <a
              v-for="(app, index) in page"
              :key="index"
              :href="app.link"
              class="app-item"
              target="_blank"
              :title="app.title"
            >
              <div class="icon">
                <i :class="app.icon"></i>
              </div>
              <p class="app-name">{{ app.title }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <span
        v-for="(page, index) in paginatedApps"
        :key="index"
        :class="{ active: index === currentPage }"
        @click="goToPage(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: [
        { icon: "fas fa-envelope", title: "Messages", description: "Check your messages", link: "https://exampleoflink.com" },
        { icon: "fas fa-calendar-alt", title: "Calendar", description: "View your calendar", link: "https://exampleoflink.com" },
        { icon: "fas fa-map-marker-alt", title: "Maps", description: "Find locations", link: "https://exampleoflink.com" },
        { icon: "fas fa-clock", title: "Clock", description: "View the time", link: "https://exampleoflink.com" },
        { icon: "fas fa-camera", title: "Camera", description: "Take photos", link: "https://exampleoflink.com" },
        { icon: "fas fa-music", title: "Music", description: "Listen to music", link: "https://exampleoflink.com" },
        { icon: "fas fa-video", title: "Videos", description: "Watch videos", link: "https://exampleoflink.com" },
        { icon: "fas fa-book", title: "Books", description: "Read books", link: "https://exampleoflink.com" },
        { icon: "fas fa-gamepad", title: "Games", description: "Play games", link: "https://exampleoflink.com" },
        { icon: "fas fa-shopping-cart", title: "Shop", description: "Buy items", link: "https://exampleoflink.com" },
        { icon: "fas fa-file-alt", title: "Docs", description: "View documents", link: "https://exampleoflink.com" },
        { icon: "fas fa-calculator", title: "Calculator", description: "Perform calculations", link: "https://exampleoflink.com" },
        { icon: "fas fa-bell", title: "Notifications", description: "View notifications", link: "https://exampleoflink.com" },
        { icon: "fas fa-paint-brush", title: "Art", description: "Create art", link: "https://exampleoflink.com" },
        { icon: "fas fa-heart", title: "Health", description: "Track health", link: "https://exampleoflink.com" },
        { icon: "fas fa-car", title: "Ride", description: "Book a ride", link: "https://exampleoflink.com" },
        { icon: "fas fa-hotel", title: "Hotels", description: "Book hotels", link: "https://exampleoflink.com" },
        { icon: "fas fa-train", title: "Trains", description: "Book train tickets", link: "https://exampleoflink.com" },
        { icon: "fas fa-plane", title: "Flights", description: "Book flights", link: "https://exampleoflink.com" },
        { icon: "fas fa-utensils", title: "Food", description: "Order food", link: "https://exampleoflink.com" },
        { icon: "fas fa-tv", title: "TV", description: "Watch TV", link: "https://exampleoflink.com" },
        { icon: "fas fa-laptop", title: "Work", description: "Work from home", link: "https://exampleoflink.com" },
        { icon: "fas fa-cloud", title: "Cloud", description: "Cloud storage", link: "https://exampleoflink.com" },
        { icon: "fas fa-code", title: "Code", description: "Write code", link: "https://exampleoflink.com" },
        { icon: "fas fa-camera-retro", title: "Photos", description: "View photos", link: "https://exampleoflink.com" },
        { icon: "fas fa-chart-line", title: "Finance", description: "Track finances", link: "https://exampleoflink.com" },
        { icon: "fas fa-thermometer-half", title: "Weather", description: "Check weather", link: "https://exampleoflink.com" },
        { icon: "fas fa-shopping-bag", title: "Deals", description: "Find deals", link: "https://exampleoflink.com" },
        { icon: "fas fa-users", title: "Social", description: "Social media", link: "https://exampleoflink.com" },
        { icon: "fas fa-headphones", title: "Podcasts", description: "Listen to podcasts", link: "https://exampleoflink.com" },
        { icon: "fas fa-film", title: "Cinema", description: "Watch movies", link: "https://exampleoflink.com" },
        { icon: "fas fa-newspaper", title: "News", description: "Read news", link: "https://exampleoflink.com" },
        { icon: "fas fa-running", title: "Fitness", description: "Track fitness", link: "https://exampleoflink.com" },
        { icon: "fas fa-hiking", title: "Travel", description: "Explore places", link: "https://exampleoflink.com" },
        { icon: "fas fa-puzzle-piece", title: "Puzzle", description: "Solve puzzles", link: "https://exampleoflink.com" },
        { icon: "fas fa-comment-dots", title: "Chat", description: "Chat with friends", link: "https://exampleoflink.com" },
        { icon: "fas fa-address-book", title: "Contacts", description: "View contacts", link: "https://exampleoflink.com" },
        { icon: "fas fa-wifi", title: "WiFi", description: "Connect to WiFi", link: "https://exampleoflink.com" },
        { icon: "fas fa-home", title: "Home", description: "Smart home control", link: "https://exampleoflink.com" },
        { icon: "fas fa-credit-card", title: "Payments", description: "Make payments", link: "https://exampleoflink.com" },
        { icon: "fas fa-link", title: "Links", description: "Manage links", link: "https://exampleoflink.com" },
        { icon: "fas fa-shield-alt", title: "Security", description: "Enhance security", link: "https://exampleoflink.com" },
        { icon: "fas fa-clipboard", title: "Clipboard", description: "Copy items", link: "https://exampleoflink.com" },
        { icon: "fas fa-life-ring", title: "Help", description: "Get help", link: "https://exampleoflink.com" },
        { icon: "fas fa-book-reader", title: "Learning", description: "Online courses", link: "https://exampleoflink.com" },
        { icon: "fas fa-edit", title: "Notes", description: "Write notes", link: "https://exampleoflink.com" },
        { icon: "fas fa-smile", title: "Emoji", description: "Emoji stickers", link: "https://exampleoflink.com" },
      ],
      currentPage: 0,
      startX: 0,
      endX: 0,
      isDragging: false,
    };
  },
  computed: {
    paginatedApps() {
      const appsPerPage = 20; 
      const pages = [];
      for (let i = 0; i < this.apps.length; i += appsPerPage) {
        pages.push(this.apps.slice(i, i + appsPerPage));
      }
      return pages;
    },
  },
  methods: {
    startSwipe(event) {
      this.isDragging = true;
      this.startX = event.touches ? event.touches[0].clientX : event.clientX;
    },
    onSwipe(event) {
      if (!this.isDragging) return;
      this.endX = event.touches ? event.touches[0].clientX : event.clientX;
    },
    endSwipe() {
      if (!this.isDragging) return;
      const diff = this.startX - this.endX;
      if (diff > 50 && this.currentPage < this.paginatedApps.length - 1) {
        this.currentPage++;
      } else if (diff < -50 && this.currentPage > 0) {
        this.currentPage--;
      }
      this.isDragging = false;
    },
    goToPage(index) {
      this.currentPage = index;
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  background-color: black;
  color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.carousel {
  width: 100%;
  height: 90%;
  position: relative;
  overflow: hidden;
  cursor: grab;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.page {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.apps-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  height: 100%;
}

.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: yellow;
}

.icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.app-name {
  font-size: 1rem;
  text-align: center;
}

.pagination {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.pagination span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;
}

.pagination .active {
  background-color: yellow;
}
</style>
