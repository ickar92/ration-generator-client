<template>
  <div class="add-dish-form">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="newDish">
      <button type="submit" :disabled="!newDish">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newDish: ''
    }
  },
  methods: {
    onSubmit() {
      
      this.$emit('dishAdding', this.newDish)
      this.newDish = ''
    }
  }
}
</script>
