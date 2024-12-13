<template>
  <div id="app">
    <AppHeader />
    <AppNavigation />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNavigation from './components/AppNavigation.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppNavigation,
    AppFooter
  },
  mounted() {
    document.title = "CO₂ Emissionen - Übersicht";
    this.setFavicon("logo.png");
  },
  methods:{
    setFavicon(iconName) {
      const link = document.querySelector("link[rel='icon']") || document.createElement('link');
      link.type = 'image/jpeg';
      link.rel = 'icon';
      link.href = `/${iconName}`;
      document.head.appendChild(link)
    }
  }
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}


footer {
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: white;
}

a {
  color: #ffdd57;
  text-decoration: none;
}
</style>
