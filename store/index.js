export const actions = {
    // Store action called nuxtServerInit:
async nuxtServerInit({ commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
      commit('firebase/ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
}