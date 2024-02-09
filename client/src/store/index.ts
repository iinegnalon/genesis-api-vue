import { defineStore } from 'pinia';
import type { EntityDTO } from '@/models/dto/entityDTO';
import { EntityType } from '@/models/enum/entityType.ts';

export const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    entityType: EntityType.none,
    createdEntities: [],
  }),
  actions: {
    setEntityType(entityType: EntityType) {
      this.entityType = entityType;
    },
    addEntity(entity: EntityDTO) {
      this.createdEntities.push(entity);
    },
  },
});

interface MainStore {
  entityType: EntityType;
  createdEntities: EntityDTO[];
}
