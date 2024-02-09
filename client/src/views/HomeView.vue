<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import { ref } from 'vue';
import AppSelect from '@/components/AppSelect.vue';

const loading = ref(false);
const options = ['Не выбрано', 'Опция 1', 'Опция 2', 'Опция 3'];
const selectedOption = ref(options[0]);

function handleClick() {
  loading.value = true;

  setTimeout(() => (loading.value = false), 1000);
}
</script>

<template>
  <div>
    <h1>Home page</h1>
    <AppButton :loading="loading" @click="handleClick">Клик</AppButton>
    <AppSelect v-model="selectedOption" :items="options" />
    <p>{{ selectedOption }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
