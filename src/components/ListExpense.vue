<template>
  <SuccessMessage :message="successModalMessage" v-if="successModal" />
  <ConfirmModal
    :loading="loading"
    @openConfirmModal="toggleConfirmModal"
    @deleteTodo="deleteExpense"
    v-if="warningModal"
  >
    <template #expense>{{ title }}</template>
  </ConfirmModal>
  <div class="expense-container" :style="blur">
    <table
      class="table table-dark table-hover table-responsive"
      id="expense-table"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Product
            <Icon
              icon="mdi:filter-outline"
              style="cursor: pointer"
              @click="filter = !filter"
            />
            <input
              type="search"
              v-if="filter"
              v-model="query"
              @keyup.enter="filterExpense(query)"
              placeholder="Type product name and press Enter"
              class="filter-expense-input"
            />
          </th>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Payment Type</th>
          <th scope="col">Category</th>
          <th scope="col">Created Date</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in expense" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.product }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.paymentType }}</td>
          <td>{{ categoryMapper(item.category) }}</td>
          <td>{{ item.createdDate }}</td>
          <td>
            <button
              class="expense-delete-button"
              @click="toggleConfirmModal(item.id, item.product)"
            >
              <Icon icon="ic:sharp-delete" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";
import ConfirmModal from "../components/ConfirmModal.vue";
import SuccessMessage from "../components/SuccessMessage.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false,
      warningModal: false,
      message: "",
      expenseId: "",
      title: "",
      filter: false,
      query: "",
      successModal: false,
      successModalMessage: "",
    };
  },
  components: {
    ConfirmModal,
    Icon,
    SuccessMessage,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    async deleteExpense() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios
        .delete(`http://localhost:3000/expense/${this.expenseId}`)
        .then((res) => {
          this.message = "Expense will be deleted. Do you want to continue?";
          this.$store.commit("deleteExpense", res.data.id);
          this.successModal = true;
          this.successModalMessage = "Expense successfully deleted.";
          setTimeout(() => {
            this.warningModal = false;
            this.successModal = false;
          }, 2000);
        });
      this.loading = false;
    },

    categoryMapper(category) {
      switch (category) {
        case "clothes":
          return "Clothes";
        case "cosmetic":
          return "Cosmetic";
        case "market":
          return "Market";
        case "electronic":
          return "Electronic";
        case "travel":
          return "Travel";
        case "tobacco":
          return "Tobacco";
        default:
          category;
      }
    },

    filterExpense(query) {
      this.$store.commit("filterExpense", query);
    },

    toggleConfirmModal(id, title) {
      this.expenseId = id;
      this.warningModal = !this.warningModal;
      this.title = title;
    },
  },

  computed: {
    ...mapGetters({
      expense: "_expense",
    }),
    blur() {
      return {
        filter: this.visible ? "blur(1px)" : "none",
      };
    },
  },
  async mounted() {
    if (this.expense.length === 0) {
      await axios.get("http://localhost:3000/expense").then((res) => {
        this.$store.commit("setExpense", res.data);
      });
    }
  },
};
</script>
