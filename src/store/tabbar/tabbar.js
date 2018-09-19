import * as types from '../mutation-types'

// state
const state = {
  tabbar: {
    TextColor: '#333',
    selectedTextColor: '#f12c20',
    selectNavIndex: 0,
    navList: [
    ]
  }
}

// getters
const getters = {
  tabbar: state => {
    return state.tabbar
  }
}

// mutations
const mutations = {
  [types.SELECTED_NAV_INDEX] (state, index) {
    state.tabbar.selectNavIndex = index
  },
  [types.TABBAR_LIST] (state, list) {
    state.tabbar.navList = list
  }
}

// actions
const actions = {
  tabbarChaneNav ({ commit }, params) {
    commit(types.SELECTED_NAV_INDEX, params)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
