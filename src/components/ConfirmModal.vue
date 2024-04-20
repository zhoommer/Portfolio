<template>
  <div class="confirm-modal-container">
    <h3>
      <slot name="title" />
      <slot name="expense" />
      will be deleted, do you want to continue?
      <Icon icon="carbon:warning" class="warning-icon" />
    </h3>

    <div class="d-flex justify-content-end align-items-end h-100">
      <button class="me-2 mb-3" @click="$emit('openConfirmModal')">
        Close
      </button>
      <button class="me-2 mb-3" @click="$emit('deleteTodo')">
        <Icon icon="eos-icons:bubble-loading" v-if="loading" />
        <span v-else>Delete</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  props: ["loading"],
  emits: ["openConfirmModal", "deleteTodo"],
  components: {
    Icon,
  },
};
</script>
