export const state = () => ({
  counter: 0,
  mountains: []
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setMountains (state, payload) {
    state.mountains = payload
  }
}
