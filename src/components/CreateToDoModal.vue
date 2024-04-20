<template>
  <SuccessMessage v-if="show" :message="message" />
  <div v-if="visible" class="create-todo-modal-container">
    <div
      class="create-todo-modal-header d-flex justify-content-center align-items-center"
    >
      <h3>Create Todo</h3>
    </div>

    <div class="create-todo-modal-main d-flex flex-column">
      <label for="title" class="mt-4">Title</label>
      <input type="text" v-model="title" />

      <label for="description" class="mt-4">Description</label>
      <input type="text" v-model="description" />
    </div>

    <div class="create-todo-modal-footer">
      <button class="me-2" @click="$emit('closeModal')">Close</button>
      <button @click="createTodo">
        <Icon icon="eos-icons:bubble-loading" v-if="loading" />
        <span v-else>Add Todo</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Icon } from "@iconify/vue";
import SuccessMessage from "../components/SuccessMessage.vue";
export default {
  data() {
    return {
      title: "",
      description: "",
      loading: false,
      show: false,
      message: "",
    };
  },
  components: {
    Icon,
    SuccessMessage,
  },
  methods: {
    async createTodo() {
      this.loading = true;
      const data = {
        title: this.title,
        description: this.description,
        createdDate: new Date().toLocaleString(),
      };
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.post("http://localhost:3000/todos", data).then((res) => {
        this.show = true;
        this.message = "Todo successfully added";
        (this.title = ""), (this.description = "");
        this.$store.commit("addTodo", data);
        setTimeout(() => {
          this.$emit("closeModal");
        }, 3000);
      });

      this.loading = false;
    },
  },
  props: ["visible"],
  emits: ["closeModal"],
};
</script>
