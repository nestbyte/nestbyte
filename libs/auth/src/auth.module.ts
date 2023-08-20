import { Module, Global } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { defineConfig } from '@mikro-orm/postgresql';
import { LoadStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
    }),
    MikroOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        defineConfig({
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          user: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          dbName: configService.get('DB_NAME'),
          entities: ['dist/**/*.entity.js'],
          entitiesTs: ['src/**/*.entity.ts'],
          debug: configService.get('NODE_ENV') === 'development',
          loadStrategy: LoadStrategy.JOINED,
          // highlighter: new SqlHighlighter(),
          metadataProvider: TsMorphMetadataProvider,
          // @ts-expect-error nestjs adapter option
          registerRequestContext: false,
          // extensions: [Migrator, EntityGenerator, SeedManager],
        }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {}
