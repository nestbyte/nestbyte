import { DynamicModule, Global, Module } from '@nestjs/common';
import { MikroOrmModule, MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {
  static register(mikroOrmOptions: MikroOrmModuleSyncOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        MikroOrmModule.forRoot({
          ...mikroOrmOptions,
          entities: ['dist/**/*.entity.js'],
          entitiesTs: ['**/*.entity.ts'],
          migrations: {
            pathTs: 'src/migrations',
            path: 'dist/migrations',
          },
        }),
      ],
      global: true,
    };
  }
}
