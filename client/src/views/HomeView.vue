<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import { onMounted, ref } from 'vue';
import AppSelect from '@/components/AppSelect.vue';
import EntityCard from '@/components/EntityCard.vue';
import { useMainStore } from '@/store';
import { EntityType } from '@/models/enum/entityType.ts';
import { AxiosError } from 'axios';
import { EntityInfo } from '@/models/dto/entityInfo.ts';
import { createEntityFunction } from '@/utils';

const mainStore = useMainStore();

const loading = ref(false);
const options = [
  EntityType.none,
  EntityType.lead,
  EntityType.contact,
  EntityType.company,
];
const selectedOption = ref(options[0]);
const errorMessage = ref('');

onMounted(() => {
  checkEnv();
});

function checkEnv() {
  if (!import.meta.env.VITE_API_ENDPOINT) {
    {
      errorMessage.value = 'Add VITE_API_ENDPOINT to .env';
    }
  }
}

async function handleClick() {
  errorMessage.value = '';
  loading.value = true;

  try {
    const entityInfo: EntityInfo = {
      id: '',
      type: mainStore.entityType,
    };

    const response = await createEntityFunction(mainStore.entityType);
    entityInfo.id = response.data;

    mainStore.addEntity(entityInfo);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      errorMessage.value = e.response?.data.message ?? e.message;
    } else {
      errorMessage.value = 'Something went wrong. Please try again';
    }
  }

  loading.value = false;
}

function handleSelect() {
  mainStore.setEntityType(selectedOption.value);
}
</script>

<template>
  <div class="home-page">
    <h1>Создание сущностей</h1>
    <AppSelect
      v-model="selectedOption"
      :items="options"
      @change="handleSelect"
    />
    <AppButton
      :disabled="mainStore.entityType == EntityType.none"
      :loading="loading"
      @click="handleClick"
    >
      Создать
    </AppButton>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <div class="entity-grid">
      <EntityCard
        v-for="entity in mainStore.createdEntities"
        :id="entity.id"
        :key="entity.id"
        :type="entity.type"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.error-message {
  color: #b00020;
}
</style>
