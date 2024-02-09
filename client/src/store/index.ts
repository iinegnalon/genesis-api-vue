import { defineStore } from 'pinia';
import { EntityType } from '@/models/enum/entityType.ts';
import { EntityInfo } from '@/models/dto/entityInfo.ts';

export const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    entityType: EntityType.none,
    createdEntities: [],
  }),
  actions: {
    setEntityType(entityType: EntityType) {
      this.entityType = entityType;
    },
    addEntity(entity: EntityInfo) {
      this.createdEntities.push(entity);
    },
  },
});

interface MainStore {
  entityType: EntityType;
  createdEntities: EntityInfo[];
}
