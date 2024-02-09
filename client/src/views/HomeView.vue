<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import { ref } from 'vue';
import AppSelect from '@/components/AppSelect.vue';
import EntityCard from '@/components/EntityCard.vue';
import { useMainStore } from '@/store';
import { EntityType } from '@/models/enum/entityType.ts';

const mainStore = useMainStore();

const loading = ref(false);
const options = [
  EntityType.none,
  EntityType.deal,
  EntityType.contact,
  EntityType.company,
];
const selectedOption = ref(options[0]);

function handleClick() {
  loading.value = true;

  // todo: send api call
  setTimeout(() => {
    mainStore.addEntity({
      id: (mainStore.createdEntities.length + 1).toString(),
      type: mainStore.entityType,
    });

    loading.value = false;
  }, 1000);
}

function handleSelect() {
  mainStore.setEntityType(selectedOption.value);
}
</script>

<template>
  <div class="home-page">
    <h1>Создание сущностей</h1>
    <AppSelect
      @change="handleSelect"
      v-model="selectedOption"
      :items="options"
    />
    <AppButton
      :disabled="mainStore.entityType == EntityType.none"
      :loading="loading"
      @click="handleClick"
    >
      Создать
    </AppButton>
    <div class="entity-grid">
      <EntityCard
        v-for="entity in mainStore.createdEntities"
        :key="entity.id"
        :id="entity.id"
        :type="entity.type"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.entity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 10px;
}
</style>
