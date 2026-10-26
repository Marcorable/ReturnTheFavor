export type PersonId = string;
export type FavorId = string;

export type Person = {
  id: PersonId;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type FavorDirection = 'received' | 'given';

export type Favor = {
  id: FavorId;
  personId: PersonId;
  direction: FavorDirection;
  occurredOn: string;
  createdAt: string;
  updatedAt: string;
};
