import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [HealthModule, LoggerModule],
})
export class CoreModule {}
