<template>
  <div class="success-message">{{ message }}</div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.success-message {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  background: #478778;
  border-radius: 0.5em;
  width: 200px;
  height: 50px;
  z-index: 999;
}
</style>
