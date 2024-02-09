import { EntityType } from '@/models/enum/entityType.ts';
import { createCompanies, createContacts, createLeads } from '@/api';

export function createEntityFunction(entityType: EntityType) {
  switch (entityType) {
    case EntityType.none:
      throw 'Invalid entity';
    case EntityType.lead:
      return createLeads();
    case EntityType.contact:
      return createContacts();
    case EntityType.company:
      return createCompanies();
  }
}
