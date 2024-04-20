<template>
  <div class="todo-container">
    <OpenToDoModalButton @toggleVisible="alert('CreateToDoModal')" />

    <keep-alive>
      <component
        :is="activeComponent"
        :visible="visible"
        @closeModal="alert('ListTodo')"
      ></component>
    </keep-alive>
    <!--
    <CreateToDoModal :visible="visible" @closeModal="alert" />
    <ListTodo v-if="visible === false" :todos="todos" />
    -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import OpenToDoModalButton from "../components/OpenToDoModalButton.vue";
import CreateToDoModal from "../components/CreateToDoModal.vue";
import ListTodo from "../components/ListTodo.vue";
export default {
  data() {
    return {
      visible: false,
      todos: [],
      loading: false,
      activeComponent: "ListTodo",
    };
  },
  methods: {
    alert(component) {
      this.activeComponent = component;
      this.visible = !this.visible;
    },
  },
  components: {
    OpenToDoModalButton,
    CreateToDoModal,
    ListTodo,
    Icon,
  },
};
</script>

<style>
.todo-container {
  height: 100%;
}

.loading {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}
</style>
