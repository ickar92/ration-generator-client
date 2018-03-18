import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state = {
  meal: {
    breakfast: [],
    snack1: [],
    lunch: [],
    snack2: [],
    dinner: []
  },
  menu: []
}

const getters = {
  meal (state) {
    return (id) => {
      return state.meal[id]
    }
  },
  menu (state) {
    return state.menu
  },
  canGenerateMenu (state) {
    const meals = Object.values(state.meal)
    for (const meal of meals) {
      if (!meal.length) {
        return false
      }
    }
    return true
  }
}

const mutations = {
  addMealItem (state, { mealId, dish }) {
    state.meal[mealId].push(dish)
  },
  loadMenu (state, menu) {
    state.menu.splice(0, state.menu.length)
    state.menu.push(...menu)
  },
  loadMeal (state, { mealId, meal }) {
    state.meal[mealId].splice(0, state.meal[mealId].length)
    state.meal[mealId].push(...meal)
  },
  generateMenu (state) {
    const menu = []
    Object.keys(state.meal).forEach(mealId => {
      const menuItem = state.meal[mealId].shift()
      menu.push(menuItem)

    }) 
    state.menu.splice(0, state.menu.length)
    state.menu.push(...menu)
  }
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})