import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityController } from './entity/entity.controller';

@Module({
  imports: [],
  controllers: [AppController, EntityController],
  providers: [AppService],
})
export class AppModule {}
