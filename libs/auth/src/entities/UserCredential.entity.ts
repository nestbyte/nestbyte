import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class UserCredentialEntity {
  @PrimaryKey()
  id!: number;
}
