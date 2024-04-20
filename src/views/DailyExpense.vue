<template>
  <div class="text-white">
    <OpenToDoModalButton @toggleVisible="toggleExpenseForm" />
    <DailyExpenseForm v-if="visible" @closeModal="toggleExpenseForm" />
    <!--
    <ListExpense :expense="expense" :visible="visible" />
    -->
    <component :is="activeComponent" :visible="visible"></component>
  </div>
</template>

<script>
import DailyExpenseForm from "../components/DailyExpenseForm.vue";
import OpenToDoModalButton from "../components/OpenToDoModalButton.vue";
import ListExpense from "../components/ListExpense.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      visible: false,
      activeComponent: "ListExpense",
    };
  },
  computed: {
    ...mapGetters({
      expense: "_expense",
    }),
  },
  methods: {
    toggleExpenseForm() {
      this.visible = !this.visible;
    },
  },
  components: {
    DailyExpenseForm,
    OpenToDoModalButton,
    ListExpense,
  },
};
</script>
