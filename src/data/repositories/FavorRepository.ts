import type { Favor, PersonId } from '@/domain/models';

export interface FavorRepository {
  listByPerson(personId: PersonId): Promise<readonly Favor[]>;
}
