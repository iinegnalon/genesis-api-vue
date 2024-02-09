<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    disabled: boolean;
    loading: boolean;
  }>(),
  {
    disabled: false,
    loading: false,
  },
);

const emit = defineEmits(['click']);

function handleClick() {
  if (props.disabled || props.loading) {
    return;
  }

  emit('click');
}
</script>

<template>
  <button
    :disabled="disabled"
    class="app-button"
    :class="{ 'app-button_disabled': disabled, 'app-button_loading': loading }"
    @click="handleClick"
  >
    <span class="app-button__content"><slot></slot></span>
    <span v-if="loading" class="app-button__loader"></span>
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  position: relative;

  &_loading {
    cursor: default;

    .app-button__content {
      opacity: 0;
    }
  }

  &__loader {
    border: 2px solid #fff;
    border-radius: 50%;
    border-top: 2px solid var(--color-primary);
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
