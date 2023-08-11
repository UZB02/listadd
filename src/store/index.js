import { createStore } from "vuex";

export default createStore({
  state: {
    todos: 
     [
      // Json.parse(localstorage.getitem(state)),
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Two",
      },
      {
        id: 3,
        title: "three",
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    delete_todo(state, id) {
      if (confirm("O'chirishni istaysizmi?"))
        state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
    },
  },
  modules: {},
});



