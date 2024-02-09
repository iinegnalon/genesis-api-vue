<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    items: string[];
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  },
);

const emit = defineEmits(['update:modelValue', 'change']);

const selected = ref(props.modelValue ?? props.items?.[0] ?? '');

watch(selected, (newValue) => {
  emit('update:modelValue', newValue);
});

function handleChange() {
  emit('change', selected.value);
}
</script>

<template>
  <select
    v-model="selected"
    :class="{ 'app-select_disabled': disabled }"
    :disabled="disabled"
    class="app-select"
    @change="handleChange"
  >
    <option v-for="(item, index) in items" :key="index">
      {{ item }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.app-select {
  width: fit-content;
  border-radius: 8px;
  border: 1px solid var(--color-text);
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;

  &:disabled {
    background-color: #eeeeee;
    color: var(--color-text);
    cursor: default;
  }
}
</style>
