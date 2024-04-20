<template>
  <div>
    <div class="text-center">
      <input
        type="search"
        class="table-search-input"
        placeholder="Search Coin"
        v-model="data.search"
      />
    </div>
    <Table :coins="filteredData" />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { coins } from "../datas/Coins";
import { coinTypes, dataTypes } from "../interfaces/DataTypes";
import Table from "../components/Table.vue";
const data: dataTypes = reactive({
  search: "",
  coins: coins,
});

const filteredData = computed((oldValue) => {
  return data.coins.filter((i: coinTypes) =>
    i.name.toLowerCase().includes(data.search.toLowerCase()),
  );
});
</script>
