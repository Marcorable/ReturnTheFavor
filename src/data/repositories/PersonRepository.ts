import type { Person, PersonId } from '@/domain/models';

export interface PersonRepository {
  findById(id: PersonId): Promise<Person | null>;
  listActive(): Promise<readonly Person[]>;
}
