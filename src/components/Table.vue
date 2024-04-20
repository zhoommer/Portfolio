<template>
  <div>
    <table class="table table-responsive table-dark table-hover mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody v-if="coins.length > 0">
        <tr v-for="coin in coins" :key="coin.index">
          <th scope="row">{{ coin.index }}</th>
          <td>{{ coin.name }}</td>
          <td>{{ coin.price }}</td>
        </tr>
      </tbody>

      <div v-else class="not-found">Data Not Found...</div>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["coins"]);
</script>
