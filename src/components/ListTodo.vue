<template>
  <SuccessMessage
    v-if="successMessageData.show"
    :message="successMessageData.message"
  />
  <Icon icon="eos-icons:bubble-loading" v-if="loading" class="loading" />
  <div class="d-flex justify-content-center" v-else>
    <input class="table-search-input" placeholder="Search todo" />
  </div>
  <div class="todo-list-container mt-4">
    <ConfirmModal
      v-if="confirmModal"
      @openConfirmModal="openConfirmModal"
      @deleteTodo="deleteTodo"
      :loading="loading"
    >
      <template #title>{{ title }}</template>
    </ConfirmModal>

    <div
      class="todo-item"
      v-for="(todo, index) in todos"
      :key="index"
      @dblclick="doubleClickBox(index)"
    >
      <Icon
        icon="solar:close-circle-line-duotone"
        class="close-window"
        v-if="closeWindow && currentWindow === index"
        @click="openConfirmModal(todo.id, todo.title)"
      />
      <div class="todo-title">{{ todo.title }}</div>
      <div class="todo-description">{{ todo.description }}</div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import SuccessMessage from "../components/SuccessMessage.vue";
import ConfirmModal from "../components/ConfirmModal.vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      closeWindow: false,
      currentWindow: null,
      confirmModal: false,
      todoId: "",
      loading: false,
      title: "",
      search: "",
      successMessageData: {
        show: false,
        message: "",
      },
    };
  },
  async mounted() {
    if (this.todos.length === 0) {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.get("http://localhost:3000/todos").then((res) => {
        this.$store.commit("setTodo", res.data);
      });
      this.loading = false;
    }
  },
  components: {
    ConfirmModal,
    Icon,
    SuccessMessage,
  },
  computed: {
    ...mapGetters({
      todos: "_todos",
    }),
  },
  methods: {
    doubleClickBox(value) {
      this.closeWindow = !this.closeWindow;
      this.currentWindow = value;
    },
    openConfirmModal(id, title) {
      this.todoId = id;
      this.confirmModal = !this.confirmModal;
      this.title = title;
    },
    async deleteTodo() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios
        .delete(`http://localhost:3000/todos/${this.todoId}`)
        .then((res) => {
          this.successMessageData.show = true;
          this.successMessageData.message = "Todo successfully deleted";
          this.$store.commit("deleteTodo", res.data.id);
          setTimeout(() => {
            this.openConfirmModal();
          }, 3000);
        });
      this.loading = false;
    },
  },
};
</script>
