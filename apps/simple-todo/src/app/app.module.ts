import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@nestbyte/core';
import { AuthModule } from '@nestbyte/auth';
import { authDbConfig } from '../configs/db/auth';

@Module({
  imports: [CoreModule, AuthModule.register(authDbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
