import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { employees: [] },

  mutations: {
    setEmployees(state, employees) {
      // updates employees
      state.employees = employees;
    },
  },
  actions: {
    fetchData() {
      //makes call
      //runs setEmployees
    },
  },
  modules: {},
});
