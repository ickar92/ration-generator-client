<template>
  <div id="app">
    <aside>
      <navigation></navigation>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "app",
  components: { Navigation }
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  
}
main {
  height: 100vh;
  background: #ccc;
  flex: 2;
  text-align: center;
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
