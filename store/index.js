export const actions = {
    // Store action called nuxtServerInit:
async nuxtServerInit({ commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
      commit('firebase/ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
}

export const state = () => ({
  products: []
})

export const mutations = {
  ADD_TO_CART(state, product){
    state.products.push(product);
  }
}

export const getters = {
  itemCount(state) {
    return state.products.length
  }
}