<template>
  <div>
    <h1>{{ title }}</h1>
    <add-dish-form @dishAdding="onAddDish"></add-dish-form>
    <card-list :dishes="dishes"></card-list>
  </div>
</template>


<script>
import CardList from "../components/CardList.vue";
import AddDishForm from "../components/AddDishForm.vue";

export default {
  components: { CardList, AddDishForm },
  props: ['title', 'id'],
  computed: {
    dishes () {
      return this.$store.getters.meal(this.id)
    }
  },
  methods: {
    onAddDish(newDish) {
      this.$store.commit('addMealItem', {
        mealId: this.id,
        dish: newDish
      })
    }
  },
  created () {
    this.$store.dispatch('getMeal', this.id)
  }
  
}
</script>