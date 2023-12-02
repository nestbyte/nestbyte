import { defineConfig } from '@mikro-orm/postgresql';
import { LoadStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';

export const authDbConfig = defineConfig({
  host: process.env['AUTH_DB_HOST'],
  port: Number(process.env['AUTH_DB_PORT']),
  user: process.env['AUTH_DB_USER'],
  password: process.env['AUTH_DB_PASSWORD'],
  dbName: process.env['AUTH_DB_NAME'],
  debug: process.env['NODE_ENV'] === 'development',
  loadStrategy: LoadStrategy.JOINED,
  // highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator],
});
