<template>
  <SuccessMessage v-if="show" :message="message" />
  <div class="daily-expense-toggle-form-container">
    <div class="daily-expense-toggle-form">
      <FormKit
        type="form"
        id="expenseForm"
        :form-class="submitted ? 'hide' : 'show'"
        @submit="handleSubmit"
        :actions="false"
      >
        <FormKit
          v-model="provideData.product"
          type="text"
          style="width: 100%"
          label="Product"
          validation="required"
          validation-visibility="live"
        />
        <FormKit
          v-model="provideData.price"
          type="text"
          style="width: 100%"
          label="Price"
          validation="required|number"
        />
        <FormKit
          v-model="provideData.amount"
          type="text"
          style="width: 100%"
          label="Amount"
          validation="required|number|max:10"
        />
        <FormKit
          v-model="provideData.paymentType"
          type="select"
          style="width: 100%"
          label="Payment Type"
          placeholder="Select payment type"
          validation="required"
          :options="{
            cash: 'Cash',
            creditCard: 'Credit Card',
          }"
        />
        <FormKit
          v-model="provideData.category"
          type="select"
          style="width: 100%"
          label="Category"
          placeholder="Select a category"
          validation="required"
          :options="{
            clothes: 'Clothes',
            cosmetic: 'Cosmetic',
            electronic: 'Electronic',
            hobbies: 'Hobbies',
            market: 'Market',
            travel: 'Travel',
            tobacco: 'Tobacco',
          }"
        />

        <FormKit type="submit" style="margin-top: 15px" id="submitButton">
          <Icon icon="eos-icons:bubble-loading" v-if="loading" />
          <span v-else>Save Expense</span>
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SuccessMessage from "../components/SuccessMessage.vue";
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      show: false,
      message: "",
      submitted: false,
      loading: false,
      provideData: {
        amount: null,
        price: "",
        paymentType: "",
        category: "",
        product: "",
        createdDate: new Date("2024-04-12").toLocaleString.toLocaleString(),
      },
    };
  },
  components: {
    SuccessMessage,
    Icon,
  },
  methods: {
    async handleSubmit() {
      (this.loading = true),
        await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios
        .post("http://localhost:3000/expense", this.provideData)
        .then((res) => {
          this.$store.commit("addExpense", this.provideData);
          this.show = true;
          this.message = "Expense successfully added";
          setTimeout(() => {
            this.$emit("closeModal");
            this.show = false;
          }, 3000);
        });
      this.loading = false;
    },
  },
};
</script>
