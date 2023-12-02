import { Migration } from '@mikro-orm/migrations';

export class Migration20231202101308 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user_credential_entity" ("id" serial primary key);'
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user_credential_entity" cascade;');
  }
}
