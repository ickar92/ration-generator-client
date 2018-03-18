import http from '../services/http'

const actions = {
  getMenu ({ commit }) {
    http.get('/menu')
      .then(({ data }) => {
        commit('loadMenu', data)
      })
  },
  getMeal ({ commit }, mealId) {
    http.get('/meal')
      .then(({ data }) => {
        commit('loadMeal', {
          mealId,
          meal: data[mealId]
        })
      })
  }
}

export default actions 