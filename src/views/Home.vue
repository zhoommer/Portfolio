<template>
  <Icon icon="eos-icons:bubble-loading" v-if="loading" class="loading" />
  <div class="home-container" v-else>
    <div class="box">
      <div class="box-title">Todos Count</div>
      <div class="box-count">{{ todos.length }}</div>
    </div>
    <div class="box">
      <div class="box-title">Expense Count</div>
      <div class="box-count">{{ expense.length }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios.get("http://localhost:3000/todos").then((res) => {
      this.$store.commit("setTodo", res.data);
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await axios.get("http://localhost:3000/expense").then((res) => {
      this.$store.commit("setExpense", res.data);
    });
    this.loading = false;
  },
  computed: {
    ...mapGetters({
      todos: "_todos",
      expense: "_expense",
    }),
  },
  components: {
    Icon,
  },
};
</script>

<style>
.home-container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  border: 3px solid #222831;
  border-radius: 0.5em;
  width: 250px;
  height: 200px;
}

.box-title {
  background: #222831;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
}

.box-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fd7014;
  letter-spacing: 3px;
  height: 100%;
}
</style>
