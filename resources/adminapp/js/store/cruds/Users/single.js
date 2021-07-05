function initialState() {
    return {
      entry: {
        id: null,
        name: '',
        surname: '',
        gender: null,
        date_of_birth: '',
        email: null,
        email_verified_at: '',
        password: null,
        remember_token: '',
        roles: [],
        created_at: '',
        updated_at: '',
        deleted_at: ''
      },
      lists: {
        gender: [],
        roles: []
      },
      loading: false
    }
  }
  
  const route = 'users'
  
  const getters = {
    entry: state => state.entry,
    lists: state => state.lists,
    loading: state => state.loading
  }
  
  const actions = {
    storeData({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })
  
      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        axios
          .post(route, params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            let message = error.response.data.message || error.message
            let errors = error.response.data.errors
  
            dispatch(
              'Alert/setAlert',
              { message: message, errors: errors, color: 'danger' },
              { root: true }
            )
  
            reject(error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    },
    updateData({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })
  
      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        params.set('_method', 'PUT')
        axios
          .post(`${route}/${state.entry.id}`, params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            let message = error.response.data.message || error.message
            let errors = error.response.data.errors
  
            dispatch(
              'Alert/setAlert',
              { message: message, errors: errors, color: 'danger' },
              { root: true }
            )
  
            reject(error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    },
    setName({ commit }, value) {
      commit('setName', value)
    },
    setSurname({ commit }, value) {
      commit('setSurname', value)
    },
    setGender({ commit }, value) {
      commit('setGender', value)
    },
    setDateOfBirth({ commit }, value) {
      commit('setDateOfBirth', value)
    },
    setEmail({ commit }, value) {
      commit('setEmail', value)
    },
    setEmailVerifiedAt({ commit }, value) {
      commit('setEmailVerifiedAt', value)
    },
    setPassword({ commit }, value) {
      commit('setPassword', value)
    },
    setRememberToken({ commit }, value) {
      commit('setRememberToken', value)
    },
    setRoles({ commit }, value) {
      commit('setRoles', value)
    },
    setCreatedAt({ commit }, value) {
      commit('setCreatedAt', value)
    },
    setUpdatedAt({ commit }, value) {
      commit('setUpdatedAt', value)
    },
    setDeletedAt({ commit }, value) {
      commit('setDeletedAt', value)
    },
    fetchCreateData({ commit }) {
      axios.get(`${route}/create`).then(response => {
        commit('setLists', response.data.meta)
      })
    },
    fetchEditData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}/edit`).then(response => {
        commit('setEntry', response.data.data)
        commit('setLists', response.data.meta)
      })
    },
    fetchShowData({ commit, dispatch }, id) {
      axios.get(`${route}/${id}`).then(response => {
        commit('setEntry', response.data.data)
      })
    },
    resetState({ commit }) {
      commit('resetState')
    }
  }
  
  const mutations = {
    setEntry(state, entry) {
      state.entry = entry
    },
    setName(state, value) {
      state.entry.name = value
    },
    setSurname(state, value) {
      state.entry.surname = value
    },
    setGender(state, value) {
      state.entry.gender = value
    },
    setDateOfBirth(state, value) {
      state.entry.date_of_birth = value
    },
    setEmail(state, value) {
      state.entry.email = value
    },
    setEmailVerifiedAt(state, value) {
      state.entry.email_verified_at = value
    },
    setPassword(state, value) {
      state.entry.password = value
    },
    setRememberToken(state, value) {
      state.entry.remember_token = value
    },
    setRoles(state, value) {
      state.entry.roles = value
    },
    setCreatedAt(state, value) {
      state.entry.created_at = value
    },
    setUpdatedAt(state, value) {
      state.entry.updated_at = value
    },
    setDeletedAt(state, value) {
      state.entry.deleted_at = value
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    resetState(state) {
      state = Object.assign(state, initialState())
    }
  }
  
  export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
  }
  