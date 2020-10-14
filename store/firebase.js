export const state = () => {
    authUser: {}
}


export const actions = {
    cleanupAction(ctx){
        ctx.commit("DEL_USER", )
    },
    async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
        if (!authUser) {
        //   await dispatch('cleanupAction')
        commit('DEL_USER')
          return
        }
      
        // you can request additional fields if they are optional (e.g. photoURL)
        const { uid, email, emailVerified, displayName, photoURL } = authUser
      
        commit('SET_USER', {
          uid,
          email,
          emailVerified,
          displayName,
          photoURL, // results in photoURL being undefined for server auth
          // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
        //   isAdmin: claims.custom_claim
        })
      }
}

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        // you can request additional fields if they are optional (e.g. photoURL)
        if (!authUser) {
            return
        }
        const { uid, email, emailVerified, displayName, photoURL } = authUser
        state.authUser = {
          uid: uid || null,
          displayName: displayName || null,
          email: email || null,
          emailVerified: emailVerified || null,
          photoURL: photoURL || null, // results in photoURL being null for server auth
          // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
          claims: claims
        }
      },
      SET_USER(state, user){
          state.authUser = user
      },
      DEL_USER(state){
          state.authUser = {}
      }
}