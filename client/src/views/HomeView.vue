<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import { ref } from 'vue';

const loading = ref(false);

function handleClick() {
  loading.value = true;

  setTimeout(() => (loading.value = false), 1000);
}
</script>

<template>
  <div>
    <h1>Home page</h1>
    <AppButton :loading="loading" @click="handleClick">Клик</AppButton>
  </div>
</template>

<style scoped lang="scss"></style>
