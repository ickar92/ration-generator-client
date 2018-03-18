<template>
  <div class="menu">
    <button id="menu-btn" @click="onStart" :disabled="!canGenerateMenu">Start</button>
    <ul>
      <li v-for="(item, idx) of menu" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    menu () {
      return this.$store.getters.menu
    },
    canGenerateMenu () {
      return this.$store.getters.canGenerateMenu
    }
  },
  methods: {
    onStart () {
      this.$store.commit('generateMenu')
    }
  },
  created () {
    this.$store.dispatch('getMenu')
  }
}
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#menu-btn {
  background: red;
  border-width: 0;
  padding: 15px 30px;
  border-radius: 15px;
  font-size: 30px;
  color: white;

}
#menu-btn[disabled] {
  opacity: .3;
}
</style>
