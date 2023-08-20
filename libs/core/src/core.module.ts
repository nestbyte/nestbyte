import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [HealthModule],
})
export class CoreModule {}
