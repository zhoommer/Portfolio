import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
    expense: [],
    activeLink: "home",
  },

  getters: {
    _todos: (state) => state.todos,
    _expense: (state) => state.expense,
    _activeLink: (state) => state.activeLink,
  },
  mutations: {
    setTodo(state, payload) {
      state.todos = payload;
    },
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((i) => i.id !== payload);
    },

    setExpense(state, payload) {
      state.expense = payload;
    },
    addExpense(state, payload) {
      state.expense.push(payload);
    },
    deleteExpense(state, payload) {
      state.expense = state.expense.filter((i) => i.id !== payload);
    },
    filterExpense(state, payload) {
      state.expense = state.expense.filter((i) =>
        i.product.toLowerCase().includes(payload.toLowerCase()),
      );
    },
  },

  setActiveLink(state, payload) {
    state.activeLink = paylaod;
  },
});

export default store;
