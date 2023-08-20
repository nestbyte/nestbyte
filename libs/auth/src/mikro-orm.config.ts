import { defineConfig } from '@mikro-orm/postgresql';
import { LoadStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';

export default defineConfig({
  host: process.env['DB_HOST'],
  port: Number(process.env['DB_PORT']),
  user: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  dbName: process.env['DB_NAME'],
  entities: ['**/*.entity.js'],
  entitiesTs: ['**/*.entity.ts'],
  debug: process.env['NODE_ENV'] === 'development',
  loadStrategy: LoadStrategy.JOINED,
  // highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator],
});
