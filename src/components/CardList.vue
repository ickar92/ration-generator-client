<template>
  <ol class="card-list">
    <li v-for="(dish, index) of dishes" :key="index">
      {{ dish }}
    </li>
  </ol>
</template>

<script>
export default {
  props: ['dishes']
}
</script>


<style scoped>
  .card-list {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    margin-top: 100px;
    text-align: left;
  }
</style>
