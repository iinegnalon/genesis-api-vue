<script lang="ts" setup>
defineProps<{
  type: string;
  id: string;
}>();
</script>

<template>
  <div class="card">
    <h2>{{ type }}</h2>
    <p>ID: {{ id }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>
