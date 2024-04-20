<template>
  <div class="todo-item-delete-button">
    <button @click="alertFunc">Delete</button>
  </div class="todo-item-delete-button">
</template>

<script>
export default {
  methods: {
    alertFunc() {
      this.$emit("alert", "Hello");
    },
  },
};
</script>
